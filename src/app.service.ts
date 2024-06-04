import { Injectable } from '@nestjs/common';
import { getDataApp } from './app.interface.interface';

@Injectable()
export class AppService {
  getHello(): getDataApp {
    return {success: "true",message: "success hit endpoint."};
  }
}
