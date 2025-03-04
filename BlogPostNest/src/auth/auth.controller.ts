import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('login')
    login(@Req() request: any, @Res() response: any) {
        return response.redirect(`http://localhost:4200/dashboard?token=${request.body.credential}`);
    }

}
