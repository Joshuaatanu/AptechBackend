/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
// eslint-disable-next-line prettier/prettier

    constructor(private readonly AuthService:AuthService){}

    @Post("/login")
    async login(@Body() loginDTO) {
        return this.AuthService.login(loginDTO);   
    }

    @Post("/signin")
    async signin(@Body() signinDTO) {
        return this.AuthService.signin(signinDTO);
    }

}
