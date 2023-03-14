/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplyService {

    async createApplication(applicationDTO: any) {
        console.log(applicationDTO);
    }

}
