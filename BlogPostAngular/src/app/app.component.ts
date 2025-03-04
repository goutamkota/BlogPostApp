import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'BlogPostAngular';
  isLogin = false
  pic!: string;
  constructor(private router: Router,public appService: AppService) {
    this.router.events.subscribe(() => {
      if (this.router.url == '/login') return this.isLogin = false
      return this.isLogin = true
    });
  }

  ngOnInit(): void {
    this.appService.details$.subscribe((details) => {
      this.pic = details?.picture || JSON.parse(sessionStorage.getItem('user') as string)?.picture;
    });
  }

  signOut() {
    const google = (window as any).google;

    if (google?.accounts?.id) {
      google.accounts.id.disableAutoSelect(); // Google Sign Out
    }

    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => window.location.reload());
  }
}
