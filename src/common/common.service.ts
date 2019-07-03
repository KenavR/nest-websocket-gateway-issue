import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  get now() {
    return new Date();
  }
}
