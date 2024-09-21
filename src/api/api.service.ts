import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApiService {
    constructor(
        @InjectRepository(student)
        private studentRepository: Repository<student>,
    ) { }

    async findAll(): Promise<student[]> {
        return await this.studentRepository.find();
    }

    async findById(id: string | number): Promise<student[]> {
        return await this.studentRepository.find({ where: { id: Number(id) } });
    }

    async findByClassNumber(classNo: string | number): Promise<student[]> {
        return await this.studentRepository.find({ where: { class: Number(classNo) } });
    }
}
