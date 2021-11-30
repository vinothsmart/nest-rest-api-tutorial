import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  async getStudents(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async getOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }

  async createStudent(student: StudentDTO): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }
}
