import {TypeOrmModule} from "@nestjs/typeorm";

import {Module} from "@nestjs/common";
import {MarcaEntity} from "./marca.entity";
import {MarcaService} from "./marca.service";
import {MarcaController} from "./marca.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [MarcaEntity], // Entidad en este modulo
            'default'
        ),
    ],
    providers: [MarcaService],
    exports: [MarcaService],
    controllers: [MarcaController]
})
export class MarcaModule {

}