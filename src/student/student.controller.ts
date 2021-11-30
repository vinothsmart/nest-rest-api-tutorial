import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getStudent(): string {
    return 'Student Controller';
  }
}
