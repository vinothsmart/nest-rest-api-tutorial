import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getStudents(): string {
    return 'Student Service';
  }
}
