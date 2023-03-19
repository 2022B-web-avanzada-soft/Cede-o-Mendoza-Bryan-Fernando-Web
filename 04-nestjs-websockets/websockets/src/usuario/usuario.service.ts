import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioCreateDto} from "../dto/usuario-create.dto";
import {UsuarioUpdateDto} from "../dto/usuario-update.dto";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}
    public usuarioRepository = this.datasource.getRepository(UsuarioEntity);
    find(opciones: FindManyOptions<UsuarioEntity>) {
        return this.usuarioRepository.find(opciones)
    }
    findOneById(id: number) {
        return this.usuarioRepository.findOne({
            //select:{ }, el ide me ayuda a ver que atributos tiene esta entidad y cuales selecionaar.
            where: {
                id: id
            },
        })
    }
    create(datosCrear: UsuarioCreateDto) {
        return this.usuarioRepository.save(datosCrear);
    }
    update(datosActualizar: UsuarioUpdateDto, id: number) {
        return this.usuarioRepository.save(
            {...datosActualizar, id}
        );
    }
    delete(id: number) {
        return this.usuarioRepository.delete(id);
    }

}
