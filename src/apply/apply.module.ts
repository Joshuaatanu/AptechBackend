/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ApplyService,PrismaService],
  controllers: [ApplyController],
})
export class ApplyModule {}
