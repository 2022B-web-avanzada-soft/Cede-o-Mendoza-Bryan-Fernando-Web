
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CelularEntity} from "../Celular/celular.entity";

@Entity('marcasCelulares') // nombre tabla en la bdd
export class MarcaEntity {
    // id autogenerado
    @PrimaryGeneratedColumn()
    id: number;
    // Columna en la bdd
    @Column({
        name: 'marca_nombre', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    nombreMarca: string; // nombre campo

    // Columna en la bdd
    @Column({
        name: 'numero_Empleados', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud bdd
        nullable: false, // Si es nullable
    })
    numeroEmpleados: string; // nombre campo

    // Columna bdd
    @Column({
        name: 'pais_Cede', // nombre campo bdd
        type: 'varchar', /// tipo campo bdd
        length: 60, // longitud
        nullable: false, // Si es nullable
    })
    paisCede: string;

    @Column({
        name: 'nombre_propietario', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    propietario: string; // nombre campo

    @OneToMany(
        () => CelularEntity, // Entidad HIJA
        (instanciaCelularEntity) =>
            instanciaCelularEntity.marca) // Campo Relacionado
    celulares: CelularEntity[]


}