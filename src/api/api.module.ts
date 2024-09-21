import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: false,
            load: [() => ({ environment: process.env.NODE_ENV })],
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',

            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,

            entities: [student],
            synchronize: false,
        }),
        TypeOrmModule.forFeature([student]),

    ],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule { }
