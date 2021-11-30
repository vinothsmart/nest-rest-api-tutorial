import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudent(): Promise<Student[]> {
    return await this.studentService.getStudents();
  }

  @Post()
  async createStudent(@Body() data: StudentDTO): Promise<Student> {
    return await this.studentService.createStudent(data);
  }
}
