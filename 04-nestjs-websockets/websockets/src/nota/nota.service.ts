import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {NotaEntity} from "./nota.entity";
import {UsuarioCreateDto} from "../usuario/dto/usuario-create.dto";
import {UsuarioUpdateDto} from "../usuario/dto/usuario-update.dto";

@Injectable()
export class NotaService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}
    public notaRepository = this.datasource
        .getRepository(NotaEntity);

    find(opciones: FindManyOptions<NotaEntity>) {
        return this.notaRepository.find(opciones)
    }
    findOneById(id: number) {
        return this.notaRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }
    create(datosCrear: any) {
        return this.notaRepository.save(datosCrear);
    }
    update(datosActualizar: any, id: number) {
        return this.notaRepository.save(
            {...datosActualizar, id}
        );
    }
    delete(id: number) {
        return this.notaRepository.delete(id);
    }
}