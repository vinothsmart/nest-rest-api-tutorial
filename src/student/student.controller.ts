import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentDTO } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): string {
    return this.studentService.getStudents();
  }

  @Post()
  createStudent(@Body() data: StudentDTO): string {
    return 'Hi ' + data.name;
  }
}
