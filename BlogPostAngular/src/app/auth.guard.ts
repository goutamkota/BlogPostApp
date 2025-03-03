import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!route.queryParams['token']) return false;
  sessionStorage.setItem('token', route.queryParams['token']);
  return true;
};
