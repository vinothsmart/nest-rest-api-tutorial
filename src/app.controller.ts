import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

// http://localhost:3000/student
@Controller('student')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put()
  putHello(): string {
    return 'Updated student';
  }
}
