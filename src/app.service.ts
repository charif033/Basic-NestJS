import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (`
      <h1> Dev_School API </h1>
      <div>Got to [<code>/api/students</code>] to get all students data.</div>
      <div>Got to [<code>/api/students/:id</code>] to get student data by id.</div>
      <div>Got to [<code>/api/students/class/:class</code>] to get student data by class number.</div>
    `
    );
  }
}
