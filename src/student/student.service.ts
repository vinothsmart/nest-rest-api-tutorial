import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  getStudents(): string {
    return 'Student Service';
  }

  async createStudent(student: StudentDTO): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }
}
