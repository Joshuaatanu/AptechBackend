/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { Application } from "@prisma/client";

@Controller('apply')
export class ApplyController {
    constructor(private readonly ApplyService: ApplyService) { }
    
    @Post("/create_application")
    async createApplication(@Body() applicationDTO:Application) {
        return this.ApplyService.createApplication(applicationDTO)
    }


 }
