import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private auth: AuthService){}
    @Post()
    login(@Body() body: any) {
        try {
            return this.auth.validateUser(body)
        } catch (error) {
            throw new UnauthorizedException({message: "Unable to create user!"})
        }
    }

}
