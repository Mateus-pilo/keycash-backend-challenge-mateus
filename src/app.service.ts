import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `RUNNING in ${process.env.NODE_ENV}`;
  }
}
