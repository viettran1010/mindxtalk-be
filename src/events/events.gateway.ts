import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway()
  export class EventsGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    handleEvent(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
      ): string {
        console.log('data', data)
        console.log('client', client)
        return data;
      }
  
    @SubscribeMessage('identity')
    async identity(@MessageBody() data: number): Promise<number> {
      return data;
    }
  }