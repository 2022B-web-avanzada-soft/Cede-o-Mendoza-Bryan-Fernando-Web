import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param, Post, Put, Query,
    UnauthorizedException
} from "@nestjs/common";

import {validate} from "class-validator";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {MarcaService} from "./marca.service";
import {MarcaUpdateDto} from "./dto/marca-update.dto";
import {MarcaCreateDto} from "./dto/marca-create.dto";
import {MarcaEntity} from "./marca.entity";

@Controller('marca')

export class MarcaController{
    constructor(
        private readonly marcaService: MarcaService
    ) {
    }

    @Get("/:id") // GET /usuario/1
    @HttpCode(200)
    findOneById(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        return this.marcaService.findOneById(+params.id); // +"1" = 1
    }

    @Delete("/:id") // DELETE /usuario/:id
    @HttpCode(200)
    delete(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        return this.marcaService.delete(+params.id);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new MarcaUpdateDto();
        nuevoRegistro.nombreMarca = bodyParams.nombreMarca;
        nuevoRegistro.numeroEmpleados = bodyParams.numeroEmpleados;
        nuevoRegistro.paisCede = bodyParams.paisCede;
        nuevoRegistro.propietario = bodyParams.propietario;

        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.marcaService.update(
            bodyParams,
            +params.id
        );
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new MarcaCreateDto();
        nuevoRegistro.nombreMarca = bodyParams.nombreMarca;
        nuevoRegistro.numeroEmpleados = bodyParams.numeroEmpleados;
        nuevoRegistro.paisCede = bodyParams.paisCede;
        nuevoRegistro.propietario = bodyParams.propietario;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.marcaService.create(nuevoRegistro);
    }

    /*@Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<MarcaEntity> = {
            relations: ['celulares'],
            // select: ['id'], // Select
            // relations: { //  Relaciones
            //     notas: true
            // },
            skip: queryParams.skip ? +queryParams.skip : 0 , // 2 * 0 = 0 ; 2 * 1 = 2; 2 * 2 = 4;
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<MarcaEntity>[]
        if(queryParams.nombreMarca){
            consultaWhere.push({
                nombreMarca: Like('%' + queryParams.nombreMarca + '%'), // dr
                numeroEmpleados: queryParams.numeroEmpleados ? queryParams.numeroEmpleados : undefined // U
            })
        }
        if(queryParams.propietario){
            consultaWhere.push({
                propietario: Like('%' + queryParams.propietario + '%'), // dr
                numeroEmpleados: queryParams.numeroEmpleados ? queryParams.numeroEmpleados : undefined // U
            })
        }
        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        return this.marcaService.find(consulta);

    }*/
    @Get("/")
    @HttpCode(200)
    async findAll() {
        return this.marcaService.find({relations:['celulares']});
    }

}