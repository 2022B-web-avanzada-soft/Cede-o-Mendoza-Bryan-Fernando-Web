// /07-promesas
//      07-promesas.js

function promesaEsPar(numero) { // f -> Promesa
    return new Promise(
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero); /* return (then) */
            } else {
                reject(':( no es par'); /* throw (catch) */
            }
        }
    )
}
function promesaElevarAlCuadrado(numero) {
    return new Promise((res)=> res(Math.pow(numero, 2)));
    //utilizamos  solo el resolve(res) y utilizando la nomenclatura
    //de arrow funtion simplificada  realizamos una potencia
}
function promesaElevarAlCubo(numero) {
    return new Promise((res)=> res(Math.pow(numero, 3)));
    //utilizamos  solo el resolve(res) y utilizando la nomenclatura
    //de arrow funtion simplificada  realizamos una potencia
}
promesaEsPar(4)
    .then( // try
        (data)=>{
            console.log('DATA', data);
            return promesaElevarAlCuadrado(data);
        }
    )
    .then( // try
        (data)=>{
            console.log('DATA', data);
            return promesaElevarAlCubo(data);
        }
    )
    .then( // try
        (data)=>{
            console.log('DATA FINAL', data);
            return promesaElevarAlCuadrado(data);
        }
    )
    .then( // try
        (data)=>{
            console.log('DATA FINAL', data);
            return promesaElevarAlCuadrado(data);
        }
    )
    .catch( // catch
        (error)=>{
            console.error('ERROR', error);
        }
    )
    .finally( // finally
        ()=>{
            console.log('FINALLY');
        }
    )