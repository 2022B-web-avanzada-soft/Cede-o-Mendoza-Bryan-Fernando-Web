import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MarcaEntity} from "./marca/marca.entity";
import {CelularEntity} from "./Celular/celular.entity";
import {CelularModule} from "./Celular/celular.module";
import {MarcaModule} from "./marca/marca.module";

@Module({
  imports: [ // Imports importamos otros modulos

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/bddExamen.sqlite',
      entities: [
          MarcaEntity,
          CelularEntity
      ], // entidades de TOODOO el aplicativo
      synchronize: true, // true => edita las columnas y tablas // false => nada
      dropSchema: false, // true => borra toda la base de datos! cuidado! // false => nada
    }),
      CelularModule,
      MarcaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
