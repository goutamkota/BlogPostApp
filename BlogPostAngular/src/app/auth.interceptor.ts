import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Hello Interceptor')
  const token = sessionStorage.getItem('token') as string;
  console.log(token, 'token')
  const newReq = req.clone({
    headers: req.headers.append('Authorization', token),
  });
  return next(newReq);
};
