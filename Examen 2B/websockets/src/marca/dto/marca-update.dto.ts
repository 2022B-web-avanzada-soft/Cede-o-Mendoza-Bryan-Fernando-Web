import {IsIn, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class MarcaUpdateDto {
    @IsOptional()
    @IsString()
    nombreMarca: string;

    @IsOptional()
    @IsString()
    numeroEmpleados: string;

    @IsOptional()
    @IsString()
    paisCede: string;

    @IsOptional()
    @IsString()
    propietario: string;
}