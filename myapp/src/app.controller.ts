import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/message')
  getMessage(): string {
    return this.appService.getMessage();
  }

  // @Post('/hosted-zone')
  // async createHostedZone() {
  //   return this.appService.createHostedZone();
  // }
}
