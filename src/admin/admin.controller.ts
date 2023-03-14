/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(private readonly AdminService:AdminService){}

    @Post("update_application")
    async updateApplication(updateInfo:any) {
        return this.AdminService.updateApplication(updateInfo);
    }

}
