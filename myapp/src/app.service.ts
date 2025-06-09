import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string {
    console.log('noooooooo??');
    return 'Hi~~~~~~ ECS CI/CD Rollback Test       wtf';
  }
}
