import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Hello Yasamin! Hello Git';
  }
  getTestMessage(): string {
    return 'das ist Test-Message';
  }
}
