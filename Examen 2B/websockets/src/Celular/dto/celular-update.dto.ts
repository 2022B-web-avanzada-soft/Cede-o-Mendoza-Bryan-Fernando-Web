import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CelularUpdateDto {
    @IsOptional()
    @IsString()
    nombreCelular: string;

    @IsOptional()
    @IsString()
    modelo: string;

    @IsOptional()
    @IsString()
    precio: string;

    @IsOptional()
    @IsString()
    procesador: string;

    @IsOptional()
    @IsNumber()
    marca: number;
}