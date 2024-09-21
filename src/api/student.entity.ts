import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    gender: string;

    @Column()
    class: number;

    @Column()
    advisorname: string;
}