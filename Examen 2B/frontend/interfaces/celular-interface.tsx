import {MarcaInterface} from "./marca-interface";

export interface CelularInterface {
    id: number;
    nombreCelular: string;
    modelo: string;
    precio: string;
    procesador: string;
    marca?: MarcaInterface | number;

}