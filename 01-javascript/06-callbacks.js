const fs= require('fs'); // Modulo file System
                        // Importat modulo fs

console.log('Primero');
let contTotal;

fs.readFile(
    './06-ejemplo.txt', //Nombre o path del archivo
    'utf-8',            //Codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo)=>{      //Callback
       if(errorLecturaPrimerArchivo){
           console.error('Error Leyendo archivo', errorLecturaPrimerArchivo);
       }else{
           //console.log('Contenido: ', contenidoPrimerArchivo)
           contTotal=contenidoPrimerArchivo;
           fs.readFile(
               './01-variables.js', //Nombre o path del archivo
               'utf-8',            //Codificacion
               (errorLecturaSegundoArchivo, contenidoSegundoArchivo)=>{      //Callback
                   if(errorLecturaSegundoArchivo){
                       console.error('Error Leyendo archivo', errorLecturaSegundoArchivo);
                   }else{
                      // console.log('Contenido2: ', contenidoSegundoArchivo);
                       //console.log('Contenido1: ', contenidoPrimerArchivo);
                       contTotal+=contenidoSegundoArchivo;

                       fs.writeFile(
                           './06-nuevo-variables.js', //Nombre o path del archivo
                           contTotal, //Codificacion
                           (errorEscritura)=>{ //Callback
                               if(errorEscritura){
                                   console.error('Error Escribiendo archivo');
                               }
                           }
                       );




                   }
               }
           );

       }
    }
);





console.log('Tercero');