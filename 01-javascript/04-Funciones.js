function soloNumeros(a,b,c){
    return a-b+c;
}

//js permite el uso de funciones sin validaciones
//solo numero('V', true, [1,2,3];
//soloNumeros((a)=>a, (a)=>a, (a)=>a);
//solonumero (1,2,3,4,5,6,7,8,9);
//solo numero();
function soloLetras(a,b,c){//sin return devolvemos: undefined
    console.log(a,b,c);
}

//funciones nombreadas-named functions
function funcionNombrada(){
}
//funciones anonimas - Anonymous functions
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function () {};
let funcionSinNombre3 = function () {};
[].forEach(function () {});
funcionSinNombre1();
funcionSinNombre3();
funcionSinNombre3();

const funcionFatArrow1 = () =>{};
let funcionFatArrow2 =()=>{};
var funcionFatArrow3 = ()=> {};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 =()=>{};
const funcionArrow5 = (parametro)=>{
    return parametro+1;
}
const funcionFatArrow6 = (parametro)=>parametro+1//una sola linea,omito return, omito llaves
const funcionFatArrow7 = parametro => parametro+1;//solo si tenemos 1 parametro omitimos parentesis
const funcionFatArrow8 =(numUno,numDos, numtres)=>numeroUno+numeroDos+numtres;

//... => parametros infinitoss => llegan en un arreglo de parámetros
//solo podemos tener un parametro infinitos por funcion
function sumarNumeros(...todosNumeros) {//parametros infinitos [1,2,3,4,4,6,7,9,....]
    //Primera alternativa
    //let total = 0;
    //todosNumeros.forEach((valorActual)=>{total=total+valorActual;});
    //recorremos el arreglo, se envia el valor actual y se cuma al cumulo de anteriores.
    //return total;
    
    //Otra alternativa
    return todosNumeros.reduce((a,v)=>a+v,0);
    //se utiliza reduce  que permitira sumar todos los valores del arreglo
}
console.log(sumarNumeros(1,2,3,4,5,6))