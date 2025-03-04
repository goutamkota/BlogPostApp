import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt from 'jwt-decode';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  getDecodedToken(token: string): any {
    // const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return null;
    }

    try {
      return jwt.jwtDecode(token);
    } catch (error) {
      console.error('Invalid Token:', error);
      return null;
    }
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
