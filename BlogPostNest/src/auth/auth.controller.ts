import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor() { }

    @Post('login')
    login(@Req() request: any, @Res() response: any) {
        console.log(request.body, 'lol')
        const userData = {
            status: 200,
            token: request.body.credential,
            // g_csrf_token: request.body.g_csrf_token
        };
        return userData
        // const queryString = new URLSearchParams(userData).toString();
        // return response.redirect(`http://localhost:4200/dashboard?${queryString}`);
    }
}
