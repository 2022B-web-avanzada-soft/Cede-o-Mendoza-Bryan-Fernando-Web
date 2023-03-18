import {useEffect, useState} from "react";
import Ubicacion ,{UbicacionProps} from "../components/Ubicacion";
import {io} from "socket.io-client";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);
export interface FormularioModelo{
    nombre:string;
    latitud:string;
    longitud;
}
export type UbicacionUser=FormularioModelo;

export default function (){
    const [isConnected, setIsConnected] = useState(socket.connected)
    const ubicacionInicio: UbicacionProps = {
        nombre:"nombre",
        latitud: '-0.30191',
        longitud: '-78.539'

    };
    const [ubicaciones, setUbicaciones] = useState([ubicacionInicio] as UbicacionProps[]);


    const [latitud, setLatitud] = useState('-0.301913949103853')
    const [longitud, setLongitud] = useState('-78.53986368030813')

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            nombre: '',
            latitud: '',
            longitud: ''
        },
        mode: 'all'
    })

    useEffect(
        () => {

            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoUbicacion', (data: UbicacionUser) => {
                const nuevaUbicacion: UbicacionProps = {

                    nombre: data.nombre,
                    longitud: data.longitud,
                    latitud: data.latitud
                };
                setLongitud(data.longitud)
                setLatitud(data.latitud)
                setUbicaciones((ubicacionesAnteriores) => [nuevaUbicacion]);
            });
        },
        []
    )
    const actualizarUbicacion = (data: FormularioModelo) => {
        const nuevoUbicacion= {
            nombre: data.nombre,
            longitud: data.longitud,
            latitud: data.latitud
        };
        socket.emit(
            'ubicacion', // Nombre Evento
            nuevoUbicacion, //  Datos evento
            () => { // Callback o respuesta del evefnto
                const nuevoUbicacion2:UbicacionProps = {
                    nombre: data.nombre,
                    longitud: data.longitud,
                    latitud: data.latitud
                };
                setLongitud(data.longitud)
                setLatitud(data.latitud)
                setUbicaciones((mensajesAnteriores) => [nuevoUbicacion2]);
            }
        )
    }

    return(
        <>
            <Layout title="Formulario">
                <div className="row">

                    <div className="col-sm-6 container">
                        <div className="row align-items-center">
                            <form onSubmit={handleSubmit(actualizarUbicacion)} className="row align-items-center">

                                <div className="mb-3 row align-items-center">
                                    {ubicaciones.map((ubicacion, indice) =>
                                        <Ubicacion key={indice}
                                                     nombre={ubicacion.nombre}
                                                     longitud={ubicacion.longitud}
                                                     latitud={ubicacion.latitud}

                                        />)
                                    }
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="mensaje" className="form-label">Ingrese su nombre</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="EJ: Catalina"
                                           id="nombre"
                                           {...register('nombre')}
                                           aria-describedby="mensajeHelp"
                                    />
                                    {errors.nombre &&
                                        <div className="alert alert-warning" role="alert">
                                            Tiene errores {errors.nombre.message}
                                        </div>
                                    }
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="mensaje" className="form-label">Ingrese la longitud</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="EJ: -0.30"
                                           id="longitud"
                                           {...register('longitud')}
                                           aria-describedby="mensajeHelp"
                                    />
                                    {errors.longitud &&
                                        <div className="alert alert-warning" role="alert">
                                            Tiene errores {errors.latitud.message}
                                        </div>
                                    }
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="mensaje2" className="form-label">Ingrese la latitud</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="EJ: -78.053"
                                           id="latitud"
                                           {...register('latitud')}
                                           aria-describedby="mensajeHelp"
                                    />
                                    {errors.latitud &&
                                        <div className="alert alert-warning" role="alert">
                                            Tiene errores {errors.latitud.message}
                                        </div>
                                    }
                                </div>
                                <button type="submit"
                                        disabled={!isValid}
                                        className="btn btn-warning row align-items-center">
                                    Cambiar Ubicacion
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}