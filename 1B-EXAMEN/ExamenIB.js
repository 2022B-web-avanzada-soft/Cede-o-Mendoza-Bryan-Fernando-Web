
const inquirer = require('inquirer');
const fs = require('fs');

class Marca{

    // Crear una marca
    constructor(nombre, numeroEmpleados, paisCede, propietario) {
        this.nombre = nombre;
        this.numeroEmpleados = numeroEmpleados;
        this.paisCede = paisCede;
        this.propietario = propietario;
        this.celulares = [];
    }

    async crearMarca(){
        const nuevaMarca = new Marca()
        let promesaMarca;
        const respuestaMarca = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre de la Marca'
                },
                {
                    type: 'input',
                    name: 'numeroEmpleados',
                    message: 'Ingrese la cantidad de empleados Actuales',
                },
                {
                    type: 'input',
                    name: 'paisCede',
                    message: 'Ingrese el pais Cede de la marca'
                },
                {
                    type: 'input',
                    name: 'propietario',
                    message: 'Ingrese nombre del propietario'
                },
            ]).then(a=>{
                promesaMarca = new Promise(
                    respuesta =>(
                        nuevaMarca.nombre = a.nombre,
                            nuevaMarca.numeroEmpleados = parseInt(a.numeroEmpleados),
                            nuevaMarca.paisCede = a.paisCede,
                            nuevaMarca.propietario = a.propietario,
                            nuevaMarca.celulares = [],
                            respuesta(nuevaMarca)
                    ));
            });

        return promesaMarca
    }

    // Actualiza la información Marca
    async actualizarMarca(listaMarcas){
        let promesaMarcas;
        let indiceMarcas;
        const respuestaMarca = await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre de la Marca:'
                },
                {
                    type:'rawlist',
                    name:'nuevaEleccion',
                    message:'Elige la opción que vas a cambiar:',
                    choices: ['1. Nombre', '2. Numero de Empleados', '3. Pais Cede','4. Propietario']},
                {
                    type:'input',
                    name:'nuevoValor',
                    message:'Ingrese el nuevo valor:'
                },
            ]).then(a=>{
                promesaMarcas = new Promise(
                    res =>(
                        listaMarcas
                            .forEach(
                                valorActual => {
                                    if (valorActual.nombre === a.nombre) {
                                        indiceMarcas = listaMarcas.indexOf(valorActual)
                                        switch (a.nuevaEleccion){
                                            case "1. Nombre":
                                                listaMarcas[indiceMarcas].nombre = a.nuevoValor;
                                                break;
                                            case "2. Numero Empleados":
                                                listaMarcas[indiceMarcas].numeroEmpleados = parseInt(a.nuevoValor);
                                                break;
                                            case "3. Pais Cede":
                                                listaMarcas[indiceMarcas].paisCede = a.nuevoValor;
                                                break;
                                            case "4. Propietario":
                                                listaMarcas[indiceMarcas].propietario = a.nuevoValor;
                                                break;
                                        }
                                    }
                                }
                            ),
                            res(listaMarcas)
                    ));
            });
        return promesaMarcas
    }

    //Borra la Marca elegida
    async borrarMarca(listaMarcas){
        let promesaMarca;
        const respuestaMarca = await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre de la Marca:'
                },
            ]).then(a=>{
                promesaMarca = new Promise(
                    res =>(
                        res(listaMarcas.filter(item => item.nombre !== a.nombre))
                    ));
            });
        return promesaMarca
    }
}
class Celular{

    constructor(nombre, modelo, fechaLanzamiento,precio, procesador) {
        this.nombreCelular = nombre;
        this.modelo = modelo;
        this.fechaLanzamiento = fechaLanzamiento
        this.precio = precio
        this.procesador = procesador
    }

    async indiceMarca(listaMarca){
        var promesaIndiceMarca
        var indiceMarca;
        await inquirer.prompt([
            {
                type:'input',
                name:'nombre',
                message:'Ingrese el nombre de la Marca:'
            },
        ]).then(respuesta => {
            promesaIndiceMarca = new Promise(
                res => (
                    listaMarca
                        .forEach(
                            valorActual => {
                                if (valorActual.nombre === respuesta.nombre) {
                                    indiceMarca = listaMarca.indexOf(valorActual)
                                }
                            }
                        ),
                        res(indiceMarca)
                ));
        });
        return promesaIndiceMarca
    }

    async crearCelular(){
        const nuevoCelular = new Celular()
        let promesaCelular;
        await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del celular:'},
                {
                    type:'input',
                    name:'modelo',
                    message:'Ingrese el modelo:'},
                {
                    type:'input',
                    name:'fechaLanzamiento',
                    message:'Ingrese la fecha de Lanzamiento (aaaa-mm-dd):'},
                {
                    type:'input',
                    name:'precio',
                    message:'Ingrese el precio en Dolares:'},
                {
                    type:'input',
                    name:'procesador',
                    message:'Ingrese el nombre del procesador'}
            ]).then(a=>{
                promesaCelular = new Promise(
                    res =>(
                            nuevoCelular.nombreCelular = a.nombre,
                            nuevoCelular.modelo = a.modelo,
                            nuevoCelular.fechaLanzamiento = new Date(a.fechaLanzamiento.split('-')[0],a.fechaLanzamiento.split('-')[1],a.fechaLanzamiento.split('-')[2]),
                            nuevoCelular.precio = parseInt(a.precio),
                            nuevoCelular.procesador = a.procesador,
                            res(nuevoCelular)
                    ));
            });
        return promesaCelular
    }

    async actualizarCelular(listaCelular, indiceMarca){
        let promesaMarca;
        let indiceCelular;
        await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del celular:'
                },
                {
                    type:'rawlist',
                    name:'respuesta',
                    message:'Elige la opción a actualizar:',
                    choices: ['1. Nombre', '2. Modelo', '3. Fecha Lanzamiento',
                        '4. Precio','5. Procesador']
                },
                {
                    type:'input',
                    name:'nuevoValor',
                    message:'Ingrese el nuevo valor:'
                },
            ]).then(a=>{
                promesaMarca = new Promise(
                    res => {
                        listaCelular[indiceMarca].celulares
                            .forEach(
                                celular => {
                                    if (celular.nombreCelular === a.nombre) {
                                        indiceCelular = listaCelular[indiceMarca].celulares.indexOf(celular)
                                        switch (a.respuesta) {
                                            case "1. Nombre":
                                                listaCelular[indiceMarca].celulares[indiceCelular].nombreCelular = a.nuevoValor
                                                break
                                            case "2. Modelo":
                                                listaCelular[indiceMarca].celulares[indiceCelular].modelo= a.nuevoValor
                                                break
                                            case "3. Fecha Lanzamiento":
                                                listaCelular[indiceMarca].celulares[indiceCelular].fechaLanzamiento= new Date(a.nuevoValor.split('-')[0], a.nuevoValor.split('-')[1], a.nuevoValor.split('-')[2])
                                                break
                                            case "4. Precio":
                                                listaCelular[indiceMarca].celulares[indiceCelular].precio = parseInt(a.nuevoValor)
                                                break
                                            case "5. Procesador":
                                                listaCelular[indiceMarca].celulares[indiceCelular].procesador = a.nuevoValor
                                                break
                                        }
                                    }
                                }
                            )
                        res(listaCelular);
                    });
            });
        return promesaMarca
    }

    async borrarCelular(listaMarca, indiceMarca){
        let promesaMarca;
        let listaCelulares = listaMarca[indiceMarca].celulares;
        await inquirer
            .prompt([
                {
                    type:'input',
                    name:'nombre',
                    message:'Ingrese el nombre del Celular:'},
            ]).then(a=>{
                promesaMarca = new Promise(
                    res =>(
                        listaMarca[indiceMarca].celulares=listaCelulares.filter(item => item.nombreCelular !== a.nombre),
                            res(listaMarca)
                    ));
            });
        return promesaMarca
    }

}

async function main(){
    try{
        console.log("Sistema de Gestión de Celulares y Marcas");
        const nuevaMarca = new Marca();
        await inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'Menu',
                    message: '¿Qué desea hacer?',
                    choices: [
                        '1. Añadir Marca',
                        '2. Mostrar Marca',
                        '3. Actualizar Marca',
                        '4. Gestionar celulares de una Marca',
                        '5. Eliminar Marca',
                        '6. Salir'
                    ]
                }
            ]
        ).then(
            async answerMenu =>{
                switch (answerMenu.Menu){
                    case "1. Añadir Marca":
                        nuevaMarca.crearMarca().then(
                            (datos)=>{
                                leerEscribirArchivo('./baseDatos.txt',datos)
                                main()
                            }
                        )
                        break;
                    case "2. Mostrar Marca":
                        leerArchivo('./baseDatos.txt').then(
                            data => {
                                console.log(JSON.parse(data))
                                main()
                            }
                        )
                        break;
                    case "3. Actualizar Marca":
                        leerArchivo('./baseDatos.txt').then(
                            datos =>{
                                const listaMarcas = JSON.parse(datos)
                                nuevaMarca.actualizarMarca(listaMarcas).then(
                                    newData =>{
                                        escribirArchivo('./baseDatos.txt',JSON.stringify(newData))
                                        console.log('Información actualizada')
                                        main()
                                    }
                                )
                            }
                        )
                        break;
                    case "4. Gestionar celulares de una Marca":
                        var nuevoCelular = new Celular()
                        var indiceCelular;
                        leerArchivo('./baseDatos.txt').then(
                            datos =>{
                                const listaMarca = JSON.parse(datos)
                                nuevoCelular.indiceMarca(listaMarca).then(
                                    indice =>{
                                        indiceMarca = parseInt(indice)
                                        mainCelular();
                                    }
                                )
                            }
                        )
                    async function mainCelular() {
                        try {
                            nuevoCelular = new Celular()
                            var marcas = leerArchivo('./baseDatos.txt').then(
                                datos =>{
                                    marcas = JSON.parse(datos)
                                }
                            )
                            const respuesta = await inquirer
                                .prompt([
                                    {
                                        type: 'rawlist',
                                        name: 'opcion',
                                        message: 'Elige una opción:',
                                        choices: ['1. Crear Celular', '2. Mostrar celular', '3. Actualizar', '4. Borrar', '5. Salir']
                                    }
                                ]).then( (respuestaMarca) => {
                                    switch (respuestaMarca.opcion) {
                                        case '1. Crear Celular':
                                             nuevoCelular.crearCelular().then(
                                                (datosCelular) => {
                                                    marcas[indiceMarca].celulares.push(datosCelular)
                                                    escribirArchivo('./baseDatos.txt', JSON.stringify(marcas))
                                                    mainCelular()
                                                })
                                            break

                                        case '2. Mostrar celular':
                                            console.log(marcas[indiceMarca].celulares)
                                            mainCelular()
                                            break

                                        case '3. Actualizar':
                                            nuevoCelular.actualizarCelular(marcas, indiceMarca).then(
                                                newData => {
                                                    console.log(newData)
                                                    escribirArchivo('./baseDatos.txt', JSON.stringify(newData))
                                                    console.log('Información actualizada')
                                                    mainCelular()
                                                }
                                            )
                                            break

                                        case '4. Borrar':
                                            nuevoCelular.borrarCelular(marcas, indiceMarca).then(
                                                newData => {
                                                    escribirArchivo('./baseDatos.txt', JSON.stringify(newData))
                                                    console.log('Información borrada')
                                                    mainCelular()
                                                }
                                            )
                                            break

                                        case '5. Salir':
                                            main()
                                            break
                                    }
                                });
                        } catch (e) {
                            console.error(e);
                        }
                    }
                        break;
                    case "5. Eliminar Marca":
                        leerArchivo('./baseDatos.txt').then(
                            dataMarca =>{
                                const listaMarca = JSON.parse(dataMarca)
                                nuevaMarca.borrarMarca(listaMarca).then(
                                    newData =>{
                                        escribirArchivo('./baseDatos.txt',JSON.stringify(newData))
                                        console.log('Información borrada')
                                        main()
                                    }
                                )
                            }
                        )
                        break;
                    case "6. Salir":
                        console.log("Gracias por usar el sistema");
                        break;
                    default:
                        main()
                }
            }
        )
    }catch (e){
        console.error(e);
    }
}
main().then().catch();
async function leerArchivo(path){
    let promesaLeer = await new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',//codificación
                (errorLecturaPrimerArchivo , contenidoArchivo) =>{//callback
                    if(errorLecturaPrimerArchivo){
                        reject('error leyendo archivo');
                    }else{
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    return promesaLeer
}

async function escribirArchivo(path, contenidoArchivo){
    const promesaEscribirArchivo = await new Promise(
        (resolve, reject)=> {
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {//callback
                    if (errorEscritura) {
                        reject('error leyendo archivo');
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    return promesaEscribirArchivo
}
async function leerEscribirArchivo(path, nuevoContenido){
    try {
        let respuestaContenidoArchivoOriginal = await leerArchivo(path); //espera una respuesta
        if(respuestaContenidoArchivoOriginal == ""){
            respuestaContenidoArchivoOriginal='[]'
        }
        respuestaContenidoArchivoOriginal = JSON.parse(respuestaContenidoArchivoOriginal);
        respuestaContenidoArchivoOriginal.push(nuevoContenido)
        const strMedico = JSON.stringify(respuestaContenidoArchivoOriginal);
        await escribirArchivo(path, strMedico);
    }catch (error){
        console.error(error);
    }
}




