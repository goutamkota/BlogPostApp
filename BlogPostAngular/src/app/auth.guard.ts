import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // const auth = inject(AuthService)
  // const token = route.queryParams['token']
  // if (token) {
  //   sessionStorage.setItem('token', route.queryParams['token']);
  //   const userdetails = auth.getDecodedToken(token)
  //   const { email, name, picture } = userdetails
  //   sessionStorage.setItem('user',JSON.stringify({email,name,picture}))
  // }
  return true;
};
