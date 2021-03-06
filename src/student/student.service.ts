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

  async updateStudent(id: string, student: StudentDTO): Promise<Student> {
    // return await this.studentModel.findByIdAndUpdate({ _id: id }, student, {
    //   new: true,
    // });
    const updateStudent = await this.getOneStudent(id);
    updateStudent.name = student.name;
    updateStudent.age = student.age;
    updateStudent.city = student.city;
    updateStudent.initial = student.initial;
    return await updateStudent.save();
  }

  async deleteOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findOneAndDelete({ _id: id }).exec();
  }
}
