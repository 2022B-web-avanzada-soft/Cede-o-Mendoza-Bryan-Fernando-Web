//02-arreglos
let arreglo=[6,7,8,9,10];
arreglo=1;
arreglo=true;
arreglo=undefined;
arreglo=null;
arreglo={};
arreglo=[true,1,1.1,"fernando",'cedeño',undefined,null,{},[1,2]];
arreglo=[6,7,8,9,10];


//for of   itera los valores
for(let numero of arreglo){ //VALORES
    console.log('numero',numero);
}
//for in  itera los indices
for(let indice in arreglo){ //INDICES
    arreglo[indice];
    console.log('indice',indice);
}

let objetoPrueba = {a:'1', b:'2', c:'3'};
for (let llave in objetoPrueba){
    console.log('llave',llave);
}
arreglo.push(11);//Añadir al final un elemento
//[6,7,8,9,10,11];
arreglo.pop();//eliminar al final un elemento
//[6,7,8,9,10];
arreglo.unshift(5); //añadir al principio del arreglo
//[5,6,7,8,9,10];
console.log(arreglo);
//splice(indice, numero de elementos eliminados, ...items a a gregar)
//EJ arreglo .splice(0,3,1,2,3,4,5,6);
arreglo.splice(0,0,4);
//[4,5,6,7,8,9,10];
console.log(arreglo);

const indiceNueve = arreglo.indexOf(9);
//Encuentra el primer elemento con ese valor y devuelve su índice
arreglo.splice(indiceNueve, 2);
//[4,5,6,7,8]
console.log(arreglo);