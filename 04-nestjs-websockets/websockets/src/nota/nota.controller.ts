import {BadRequestException, Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import {NotaService} from "./nota.service";
import {UsuarioCreateDto} from "../usuario/dto/usuario-create.dto";
import {validate} from "class-validator";

@Controller('nota')
export class NotaController {
    constructor(
        private readonly notaService: NotaService
    ) {
    }
    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        return this.notaService.create(bodyParams);
    }

    @Get("/") // POST /usuario
    @HttpCode(200)
    async find() {
        return this.notaService.find({
            relations:['usuario']});
    }
}