// 08-promesas.js
const fs = require('fs');
/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */

function leerArchivo(path){
    return new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path, // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura);
                        reject('Error leyendo primer archivo');
                    } else {
                        resolve(contenido)
                    }
                }
            );
        }
    ); //
}
function escribirArchivo(path, nuevoContenido){
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                path,
                nuevoContenido,
                (errorEscritura) => {
                    if (errorEscritura) {
                        console.error(errorEscritura);
                        reject('Error escribiendo nuevo archivo');
                    } else {
                        resolve('Completado');
                    }
                }
            );
        }
    ); //
}
//
function ejercicio08(path, contenidoNuevo){
    leerArchivo(path)
        .then(
            (contenidoArchivoOriginal)=>{
                return escribirArchivo(
                    path, contenidoArchivoOriginal + contenidoNuevo
                )
            }
        )
        .then()
        .catch((error)=> console.error(error));
}

ejercicio08('06-ejemplo.txt', ' :)  lo logramos!');

//fORMAS DEE SCRIBIT LA FUNCION  ASYNCAWAIT

const asyncAwaitDos= async function(){}
const asyncAwaitTres = async ()=>{

async function asyncAwaitUno(path,nuevoContenido){
    //Si sabemos que en la promesa PUEDE  devolver un reject, usamos try y catch
    //en el caso de la funcion elevar 2 que creamos no hay reject por tanto omitimos ty y catch
    try {
        const respuestaContenidoArchivoOriginal= await leerArchivo(path);
        await escribirArchivo(path,respuestaContenidoArchivoOriginal+nuevoContenido);
       //await escribirArchivo(path,(await leerArchivo(path))+nuevoContenido);
        leerArchivo().then().catch();//async
        await leerArchivo(path);//sync
    }catch (e) {
        console.error(e);
    }
}

asyncAwaitUno('06-ejemplo.txt', ' :)  lo logramos!')
}