import io from "socket.io-client"
import {useEffect, useState} from "react";
import MensajeChat,{MensajeChatProps} from "../components/i_websockets/MensajesChat";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";
const  servidorWebsocket= 'http://localhost:11202';
const socket= io(servidorWebsocket);

export interface FormularioModelo {
    salaId: string;
    nombre: string;
    mensaje: string;
}
export type MensajeSala = FormularioModelo;
export type MensajeSala2 = {
    salaId: string;
    nombre: string;
    mensaje: string;
};


export default function(){
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            salaId: '',
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    })
    useEffect(
        ()=>{
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                console.log('escucharEventoHola');
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
            socket.on('escucharEventoUnirseSala', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores,
                    nuevoMensaje]);
            });
            socket.on('escucharEventoMensajeSala', (data: MensajeSala) => {

                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.salaId + ' - ' + data.mensaje,
                    nombre: data.nombre,
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores,
                    nuevoMensaje]);
                console.log('escucharEventoMensajeSala');

            });


        },
        []
    )

    const enviarEventoHola = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'Fernando',
            nombre: 'Sistema',
            posicion: 'D'
        };
        socket.emit(
            'hola', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evefnto
                console.log(datosEventoHola) // {mensaje: 'ok'};
                //      LAS DOS FORMAS HACEN LO MISMO, pero el callback es en casos especiales
                //     const [nombre, setNombre] = useState('Adrian')
                //      setNombre('Vicente')
                //     const [arreglo, setArreglo] = useState([1,2])
                //      setArreglo( [1,2,3] ) // Metodo1: SIN CALLBACK
                //      setArreglo( ([1,2])=> [ ...[1,2], 3 ]) => [1,2,3] // Metodo2: CON CALLBACK
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            }
        )
    }

    const estaConectado = ()=>{
        if(isConnected){
            return <span>Conectado :)</span>
        }else{
            return <span>Desconectado :(</span>
        }
    }


    return(
        <>
            <Layout title="Formulario">
                <h1>Websockets</h1>
                <button className={'btn btn-success'} onClick={() => enviarEventoHola()}>Enviar evento hola</button>
                <div className="row">
                    <div className="col-sm-6">
                        Formulario
                    </div>
                    <div className="col-sm-6">
                        {mensajes.map((mensaje, indice) =>
                            <MensajeChat key={indice}
                                         mensaje={mensaje.mensaje}
                                         nombre={mensaje.nombre}
                                         posicion={mensaje.posicion}
                            />)
                        }
                    </div>

                </div>
            </Layout>

        </>
        )
}