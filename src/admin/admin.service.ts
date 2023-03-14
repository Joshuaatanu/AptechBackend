/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {

    async updateApplication(updateInfo: any) {
        console.log(updateInfo);
    }

}
