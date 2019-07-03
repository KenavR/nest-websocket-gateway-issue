# Nest Websocket Gateway Issue

This project includes multiple `@WebsocketGateway`s without a namespace. When connecting with a single client the `OnGatewayConnection` life cycle hook in `CommonGateway` is called multiple times. On call is added whenever a new `WebsocketGateway` is added to the project.

`Shouldn't it be called only once?`

## Console screenshot

![Console](https://raw.githubusercontent.com/KenavR/nest-websocket-gateway-issue/master/console.jpg)
