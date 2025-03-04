import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router, private appService: AppService) { }

  ngOnInit() {
    (window as any).handlecallback = this.handleCallback.bind(this);
    sessionStorage.clear();
  }

  handleCallback(response: any) {
    const token = response.credential;
    const { email, name, picture } = this.auth.getDecodedToken(token);
    const details = { email, name, picture }
    this.appService.setDetails(details);
    try {
      this.appService.findOrCreate(details).subscribe({
        next: () => {
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('user', JSON.stringify(details) as string)
          this.router.navigate(['/dashboard'])
        }
      })
    } catch (error) {
      console.error('Token Decode Error:', error);
    }
  }

}
