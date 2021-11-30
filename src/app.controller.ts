import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

// http://localhost:3000/student
@Controller('student')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body('name') name: string, @Body('age') age: number): string {
    return 'Hai ' + name + 'my age is ' + age;
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return id;
  }

  @Put()
  putHello(): string {
    return 'Update the student';
  }
}
