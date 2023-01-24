const inquirer = require('inquirer');
async function main(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type:'Input',
                    name:'apellido',
                    message:'ingresa tu nombre'
                },
                {
                    type:'Input',
                    name:'edad',
                    message:'ingresa tu edad'
                }

            ]);
        console.log('Respuesta',respuesta);
    }catch (e) {
        console.error(e);
    }

}
main();


class Marca{
    constructor(nombre, paisOrigen,numEmpleados, ingresos, telefonos ) {
        this.nombre=nombre
        this.paisOrigen=paisOrigen
        this.numEmpleados=numEmpleados
        this.ingresos=ingresos
        this.telefonos=telefonos
    }




}





async function leerArchivo(path){
    let miPrimerPromesa = await new Promise(
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
    return miPrimerPromesa
}

async function escribirArchivo(path, contenidoArchivo){
    const miPromesa = await new Promise(
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
    return miPromesa
}
async function guardarDatos(path, ContenidoObj){
    try {
        const nuevoContenido = JSON.stringify(ContenidoObj);
        await escribirArchivo(path, nuevoContenido);
    }catch (error){
        console.error(error);
    }
}

async function cargarDatos(path){
    return new Promise(
        async (res) => {
            let respuestaArchivo = await leerArchivo(path);
            respuestaArchivo = JSON.parse(respuestaArchivo);
            res(respuestaArchivo);
        }
    )
}
