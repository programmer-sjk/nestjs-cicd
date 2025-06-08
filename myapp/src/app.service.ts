import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string {
    console.log('nooooo??');
    return 'Hi~~~~~~ ECS CI/CD Rollback Test       wtf';
  }
}
