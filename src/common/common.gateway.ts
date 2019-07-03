import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class CommonGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server;
  users: number = 0;

  handleConnection() {
    this.users++;

    console.log('USER CONNECTED: ', this.users);
  }

  handleDisconnect() {
    this.users--;

    console.log('USER Disconnected: ', this.users);
  }
}
