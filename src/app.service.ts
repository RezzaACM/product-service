import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      application: process.env.APPLICATION,
      version: process.env.VERSION,
      env: process.env
    }
  }
}
