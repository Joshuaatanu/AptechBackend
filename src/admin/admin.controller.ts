/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(private readonly AdminService:AdminService){}

    @Post("approve_application")
    async approveApplication() {
        return this.AdminService.approveApplication();
    }

    @Patch("/decline_application")
    async declineApplication() {
        return this.AdminService.declineApplication();
    }

}
