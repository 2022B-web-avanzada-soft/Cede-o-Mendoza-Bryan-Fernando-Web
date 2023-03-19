import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {MarcaEntity} from "./marca.entity";
import {MarcaCreateDto} from "./dto/marca-create.dto";
import {MarcaUpdateDto} from "./dto/marca-update.dto";


@Injectable()
export class MarcaService{
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}
    public marcaRepository = this.datasource.getRepository(MarcaEntity);
    find(opciones: FindManyOptions<MarcaEntity>) {
        return this.marcaRepository.find(opciones)
    }
    findOneById(id: number) {
        return this.marcaRepository.findOne({
            //select:{ }, el ide me ayuda a ver que atributos tiene esta entidad y cuales selecionaar.
            where: {
                id: id
            },
        })
    }
    create(datosCrear: MarcaCreateDto) {
        return this.marcaRepository.save(datosCrear);
    }
    update(datosActualizar: MarcaUpdateDto, id: number) {
        return this.marcaRepository.save(
            {...datosActualizar, id}
        );
    }
    delete(id: number) {
        return this.marcaRepository.delete(id);
    }

}
