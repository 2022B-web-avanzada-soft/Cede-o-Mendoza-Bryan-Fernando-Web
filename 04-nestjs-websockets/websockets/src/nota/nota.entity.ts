import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('epn_nota')
export class NotaEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nota: number;

    @ManyToOne(
        () => UsuarioEntity, // Entidad Papa
        (instanciaUsuarioEntity) => // Campo Relacionado
            instanciaUsuarioEntity.notas,
        {
            nullable: false
        })
    usuario: UsuarioEntity
}