import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BlogPostAngular';
  isToken = sessionStorage.getItem('token')
  isLogin = false
  private authService = inject(AuthService)
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url == '/login') return this.isLogin = false
      return this.isLogin = true
    });
   }
  logout() {
    this.authService.logout()
  }
}
