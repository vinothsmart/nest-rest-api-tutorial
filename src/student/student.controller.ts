import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  async getOneStudent(@Param('id') id: string): Promise<Student> {
    return await this.studentService.getOneStudent(id);
  }

  @Post()
  async createStudent(@Body() data: StudentDTO): Promise<Student> {
    return await this.studentService.createStudent(data);
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() data: StudentDTO,
  ): Promise<Student> {
    return await this.studentService.updateStudent(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string): Promise<Student> {
    return await this.studentService.deleteOneStudent(id);
  }
}
