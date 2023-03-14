/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService{
    async login(loginDTO: any) {
        console.log(loginDTO);
        console.log("Login");
    }
    async signin(signinDTO: any) {
        console.log("signin");
    }
}
