import { Body, Controller, Get, Req, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello() + ' root';
  }

  @Get('v1/hello')
  getHelloV1(): string {
    return this.appService.getHello() + ' v1';
  }

  @Get('v2/hello')
  getHelloV2(
    @Req() req,
    @Body() body
  ) {
    return {
      message: this.appService.getHello() + ' v2',
      body,
    }
  }

  @Get('v2/unprotected/hello')
  getHelloV2Unprotected(
    @Req() req,
    @Body() body
  ) {
    return {
      message: this.appService.getHello() + 'unprotected v2',
      body,
    }
  }
}
