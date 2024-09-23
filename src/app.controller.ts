import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + ' root';
  }

  @Get('v1/hello')
  getHelloV1(): string {
    return this.appService.getHello() + ' v1';
  }

  @Get('v2/hello')
  getHelloV2(): string {
    return this.appService.getHello() + ' v2';
  }
}
