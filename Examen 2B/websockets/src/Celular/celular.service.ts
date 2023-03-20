import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {CelularEntity} from "./celular.entity";
import {CelularCreateDto} from "./dto/celular-create.dto";
import {CelularUpdateDto} from "./dto/celular-update.dto";

@Injectable()
export class CelularService{
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}
    public celularRepository = this.datasource.getRepository(CelularEntity);
    find(opciones: FindManyOptions<CelularEntity>) {
        return this.celularRepository.find(opciones)
    }
    findOneById(id: number) {
        return this.celularRepository.findOne({
            //select:{ }, el ide me ayuda a ver que atributos tiene esta entidad y cuales selecionaar.
            where: {
                id: id
            },
        })
    }

    create(datosCrear: any):Promise<any> {
        return this.celularRepository.save(datosCrear);
    }
    update(datosActualizar: CelularUpdateDto, id: number):Promise<CelularEntity> {
        return this.celularRepository.save(
            {...datosActualizar, id}
        );
    }


    /*
    create(datosCrear: any) {
        return this.celularRepository.save(datosCrear);
    }
    update(datosActualizar: any, id: number) {
        return this.celularRepository.save(
            {...datosActualizar, id}
        );
    }*/

    delete(id: number) {
        return this.celularRepository.delete(id);
    }

}