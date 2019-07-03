import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
} from '@nestjs/websockets';
import { CommonService } from 'src/common/common.service';

@WebSocketGateway()
export class DatesGateway {
  constructor(private readonly commonService: CommonService) {}

  @SubscribeMessage('dates-now')
  onNow(client): Promise<WsResponse<Date>> {
    return Promise.resolve(this.commonService.now).then(now => ({
      event: 'dates-now',
      data: now,
    }));
  }
}
