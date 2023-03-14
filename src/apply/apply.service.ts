/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Application } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ApplyService {

    constructor(private readonly PrismaService:PrismaService){}

    async createApplication(applicationDTO: Application) {
        try {
            console.log(applicationDTO);
            const application = await this.PrismaService.application.create({ data: applicationDTO })
            
            return {status:"Successfull",application}

        } catch (e) {
            console.error(e);
            return { error:e.toString()}
        }
    }

}
