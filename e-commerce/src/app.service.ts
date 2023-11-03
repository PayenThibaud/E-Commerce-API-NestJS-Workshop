import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  logiqueDeDireBonjour(): string {
    return 'Bonjour';
  }
}
