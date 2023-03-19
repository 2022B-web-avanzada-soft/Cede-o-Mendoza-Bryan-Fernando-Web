import {IsIn, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class MarcaCreateDto {
    @IsNotEmpty()
    @IsString()
    nombreMarca: string;

    @IsNotEmpty()
    @IsString()
    numeroEmpleados: string;

    @IsNotEmpty()
    @IsString()
    paisCede: string;

    @IsNotEmpty()
    @IsString()
    propietario: string;
}