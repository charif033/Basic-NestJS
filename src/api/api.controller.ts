import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
    constructor(private apiService: ApiService) { }

    @Get('students')
    async getAllStudent() {
        return await this.apiService.findAll();
    }
    @Get('students/:id')
    async getStudentById(@Param('id') id: string) {
        return await this.apiService.findById(id);
    }
    @Get('students/class/:class')
    async getStudentByClassNumber(@Param('class') classNo: string) {
        return await this.apiService.findByClassNumber(classNo);
    }
}
