import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";
@WebSocketGateway(
    11202,{
        cors:{
            origin:'*',
        }
    }
)
export class EventosGateway{
    @SubscribeMessage('ubicacion')
    devolverUbicacion(
        @MessageBody()
        message:{nombre: string, latitud: string, longitud: string },
        @ConnectedSocket()
            socket: Socket // import {Server, Socket} from 'socket.io';
    ){
        // backend
        const mensajeSala = {
            nombre: message.nombre,
            latitud: message.latitud,
            longitud: message.longitud
        };
        socket.broadcast
            .emit('escucharEventoUbicacion', //  Nombre evento que vamos a enviar a los clientes conectados
                // OBJETO A ENVIAR
                mensajeSala
            );
        return {mensaje: 'ok'}; // Callback del metodo "ubicacion"

    }
}