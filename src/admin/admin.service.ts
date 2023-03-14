/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {

    async approveApplication() {
        console.log("Approved");
    }


    async declineApplication() {
        console.log("Declined");
    }

}
