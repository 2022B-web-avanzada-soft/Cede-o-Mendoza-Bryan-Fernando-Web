// 01-javascript
//      01-variables.js

//mutables e inmutables
//mutables: son variables que se pueden reasignar

var numeroUno=1;
let numeroDos=2;
numeroUno=12;
numeroDos=8;
numeroUno=false;
numeroDos=true;

//inmutables

const configuracionArchivos='PDF';
//vamos a preferir Const>let> nunca el var

//Tipos de variables(Primitivas)
const numero=1; //numbre
const suelo=1.2;
const text='Sofia';
const apellidos = "Cedeño";  //
const  boolean = true;  // boolean
const  hijos = null;  // object
const  zapatos=undefined;  //   undefined
//   undefined
console.log(typeof numero);
console.log(typeof suelo);
console.log(typeof text);
console.log(typeof apellidos);
console.log(typeof boolean);
console.log(typeof hijos);
console.log(typeof zapatos);
// Truty y Falsy
if(""){
    console.log("String vacio Es verdadero")
}else{
    console.log("String vacio es falsy")
}
if("Adrian"){
    console.log("string con datos Es verdadero")
}else{
    console.log("String sin datos es falsy")
}
if(-1){
    console.log("negativo es Truty") //
}else{
    console.log("Negativo es falso")
}
if(0){
    console.log("cero es Truty")
}else{
    console.log("cero es falso")//
}
if(1){
    console.log("positivo es Truty") //
}else{
    console.log("positivo es falso")
}
if(null){
    console.log("null es Truty")
}else{
    console.log("Null es falso")//
}
if(undefined){
    console.log("undefined es Truty")
}else{
    console.log("undefined es falso")//
}

//Orden de importancia
//1) "const"
//2)"let"
//3) x- "var"

//objeto JSON
const fernando = {
    "nombre":"Fernando",//llave:valor
    'apellido':'Cedeño',
    edad:25,
    hijos:null,
    zapados:undefined,
    casado:false,
    ropa:{
        color:'amarillo',
        talla:'42',
    },
    mascotas:['Quiqui','Mitch'],
    prendas:[
        {   color:'amarillo',
            talla:'42'}
        ,{
            color:'amarillo',
            talla:'42'}]
};
console.log(fernando);

fernando.prendas.forEach(
    function (valorActual, indiceActual, arregloActual){
        console.log('valorActual', valorActual.color);
    }
)

//Acceder a las propiedades del objeto
fernando.nombre; //"Fernando"
fernando.apellido; //'Cedeño'
fernando["nombre"];//"Fernando"
//cambiar valores
fernando.nombre="Bryan";
fernando["nombre"]="Bryan";

//Crear nuevos atributos o metodos dentro del objeto
fernando.sueldo;//undefined
console.log(fernando.sueldo);
fernando.sueldo=1.2;
console.log(fernando.sueldo);//1.2
fernando["gastos"]=0.8;
console.log(fernando.gastos);//0.8
console.log(fernando);

//Borrar el valor de una propiedad
fernando.nombre=undefined; //solo borra el valor más no la llave que la deja como undefined
console.log(fernando);
console.log(Object.keys(fernando)); //obtengo todas las llaves del objeto
console.log(Object.values(fernando));// devuelve los valores de las llaves
//DELETE la llave y el valor dentro del objeto
delete  fernando.nombre; //eliminar la llave nombre
console.log(Object.keys(fernando));//imprimo las llaves existentes de fer..
console.log(fernando)

//variables por valor o referencia
//variables por valor en JS son las primitivas: number, string, boolean
let edadFer = 32;
let edadBryan = edadFer; //guardamos una primitiva en otra variable
                            //variables por valor
console.log(edadFer);//32
console.log(edadBryan);//32
edadFer=edadBryan+1;
console.log(edadFer);//33
console.log(edadBryan)//32

//variables por referencia: object({},[])
let notas={
    total:10
};
let notasSegundoBimestre = notas; //igualando la referencia
notasSegundoBimestre.total=notasSegundoBimestre.total+1;
console.log(notas);//11
console.log(notasSegundoBimestre);//11


//Como clonar objeto
let notasTercerBimestre = Object.assign({},notas);
//object.assign([],arreglo);
notasTercerBimestre.total=notasTercerBimestre.total+1;
console.log('notas',notas);
console.log('notasSegundoBimestre',notasSegundoBimestre);
console.log('notasTercerBimestre',notasTercerBimestre);