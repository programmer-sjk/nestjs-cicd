import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string {
    console.log('noooooooo??');
    return 'Hi. ECS CI/CD Rollback Test!!!!!!!!!';
  }
}
