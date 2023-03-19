import {TypeOrmModule} from "@nestjs/typeorm";

import {Module} from "@nestjs/common";
import {CelularEntity} from "./celular.entity";
import {CelularService} from "./celular.service";
import {CelularController} from "./celular.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [CelularEntity], // Entidad en este modulo
            'default'
        ),
    ],
    providers: [CelularService],
    exports: [CelularService],
    controllers: [CelularController]
})
export class CelularModule {

}