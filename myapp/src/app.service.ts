import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string {
    console.log('watch this in cloudwatch logs');
    return 'Hi. ECS CI/CD Success';
  }
}
