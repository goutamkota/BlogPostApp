import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private authService: AuthService){}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No authentication token provided');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.decode(token, { complete: true })?.payload;
      if (!decoded) throw new UnauthorizedException('Invalid Google token');
      request.user = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid authentication');
    }
  }
}
