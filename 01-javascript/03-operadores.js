const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES CON PARÁMETROS
//fin
//enviamos una expresion - truty falsy
//devuelve el primero que cumpla esa condición
console.log('respuestaFind :)');
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            //return valorActual.nombre === "Cristian";
            return valorActual.nota <=5;
        }
    );
console.log('respuestaFind :)', respuestaFind); //Crisdtian si no encuentra devuelve undefined
console.log('respuestaFindIndex :)');
//FINDINDEX
//enviamos una expresión - truty falsy
//devuelve el índice del primero que cumpla
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); //indice -6 //si no encuentra - -1

//FOREACH
//itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloActual){
            console.log('valorActual', valorActual);
        }
    );
console.log('respuestaForEach', respuestaForEach); //devuelve undefined


//MAP (modificar o mutar el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloActual)=> {
            const notaActual = valorActual.nota + 1;
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: notaActual,
                estaAprobado: notaActual > 14,
                casado: false,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);
console.log('arreglo',arreglo);

//FILTER (filtrar el arreglo)
//enviamos EXPRESSION truty falsy
//devuekve los elementos que cumple es condición
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloActual) =>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuesteFilter', respuestaFilter);
console.log('arreglo', arreglo);

//SOME -> expresión
//devuelve BOOLEAN
//hay alguna nota menor a nueve? Si No
//OR
const respuestaSome =arreglo
    .some(
        function (valorActual, indiceActual, arregloActual){
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//every -> expresion}
//devuelve booleano
//todas las notas son mayores a 14? Si No
//AND
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloACtual){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//reduce iz-> der
//reduce right der->izq

//100<3 puntos enunerador

//Suma
const respuestaReduce = arreglo
    .reduce(
        function(valorAcumulado, valorActual,indice, pesoAcumulado){
            return (valorAcumulado+valorActual.nota);
        },
        0//Acumulador
    )
console.log(respuestaReduce);//
console.log(respuestaReduce/arreglo.length );

arreglo.filter((a)=>a.nota<14)
    .map((e)=>e.nota+1)
    .some((e)=> e>14);