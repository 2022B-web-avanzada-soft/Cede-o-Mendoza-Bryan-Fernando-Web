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
import {CelularService} from "./celular.service";
import {CelularUpdateDto} from "./dto/celular-update.dto";
import {CelularCreateDto} from "./dto/celular-create.dto";
import {CelularEntity} from "./celular.entity";


@Controller('celular')

export class CelularController{
    constructor(
        private readonly celularService: CelularService
    ) {
    }

    @Get("/:id") // GET /usuario/1
    @HttpCode(200)
    findOneById(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        return this.celularService.findOneById(+params.id); // +"1" = 1
    }

    @Delete("/:id") // DELETE /usuario/:id
    @HttpCode(200)
    delete(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        return this.celularService.delete(+params.id);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new CelularUpdateDto();
        nuevoRegistro.nombreCelular = bodyParams.nombreCelular;
        nuevoRegistro.modelo = bodyParams.modelo;
        nuevoRegistro.precio = bodyParams.precio;
        nuevoRegistro.procesador = bodyParams.procesador;
        nuevoRegistro.marca = bodyParams.marca;

        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.celularService.update(
            bodyParams,
            +params.id
        );
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new CelularCreateDto();
        nuevoRegistro.nombreCelular = bodyParams.nombreCelular;
        nuevoRegistro.modelo = bodyParams.modelo;
        nuevoRegistro.precio = bodyParams.precio;
        nuevoRegistro.procesador = bodyParams.procesador;
        nuevoRegistro.marca = bodyParams.marca;

        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.celularService.create(nuevoRegistro);
    }

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<CelularEntity> = {
            relations: ['marca'],
            // select: ['id'], // Select
            // relations: { //  Relaciones
            //     notas: true
            // },
            skip: queryParams.skip ? +queryParams.skip : 0 , // 2 * 0 = 0 ; 2 * 1 = 2; 2 * 2 = 4;
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<CelularEntity>[]
        if(queryParams.nombreCelular){
            consultaWhere.push({
                nombreCelular: Like('%' + queryParams.nombreCelular + '%'), // dr
                precio: queryParams.precio ? queryParams.precio : undefined // U
            })
        }
        if(queryParams.procesador){
            consultaWhere.push({
                procesador: Like('%' + queryParams.procesador+ '%'), // dr
                precio: queryParams.precio ? queryParams.precio : undefined
            })
        }
        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        return this.celularService.find(consulta);

    }

}