import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MarcaEntity} from "../marca/marca.entity";

@Entity('celulares') // nombre tabla en la bdd
export class CelularEntity {
    // id autogenerado
    @PrimaryGeneratedColumn()
    id: number;
    // Columna en la bdd
    @Column({
        name: 'nombre_Celular', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    nombreCelular: string; // nombre campo

    // Columna en la bdd
    @Column({
        name: 'modelo', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud bdd
        nullable: false, // Si es nullable
    })
    modelo: string; // nombre campo

    // Columna bdd
    @Column({
        name: 'precio', // nombre campo bdd
        type: 'varchar', /// tipo campo bdd
        length: 60, // longitud
        nullable: false, // Si es nullable
    })
    precio: string;

    @Column({
        name: 'procesador', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    procesador: string; // nombre campo

    @ManyToOne(
        () => MarcaEntity, // Entidad Papa
        (instanciaMarcaEntity) => // Campo Relacionado
            instanciaMarcaEntity.celulares,
        {
            nullable: false
        })
    marca: MarcaEntity

}