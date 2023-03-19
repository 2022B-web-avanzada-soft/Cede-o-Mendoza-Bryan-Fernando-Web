import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CelularCreateDto {
    @IsNotEmpty()
    @IsString()
    nombreCelular: string;

    @IsNotEmpty()
    @IsString()
    modelo: string;

    @IsNotEmpty()
    @IsString()
    precio: string;

    @IsNotEmpty()
    @IsString()
    procesador: string;

    @IsNotEmpty()
    @IsNumber()
    marca: number;

}