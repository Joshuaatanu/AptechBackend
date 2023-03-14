import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ApplyModule } from './apply/apply.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AuthModule, ApplyModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
