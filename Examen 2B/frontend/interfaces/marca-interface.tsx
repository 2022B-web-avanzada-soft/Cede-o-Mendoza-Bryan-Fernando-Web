import {CelularInterface} from "./celular-interface";


export interface MarcaInterface {
    id: number;
    nombreMarca: string;
    numeroEmpleados: string;
    paisCede: string;
    propietario: string;
    materias?: CelularInterface[];
}