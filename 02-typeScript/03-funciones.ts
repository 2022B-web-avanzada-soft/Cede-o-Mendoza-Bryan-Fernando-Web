function sumarNumero(
    numeroInicial: number,
    ...numerosInfinitos: number[] //parámetro infinito
):number{return numeroInicial;}

function imprimir(mensaje?:string): void{ //undefined
    console.log('Hola'+mensaje?mensaje:'bienvenido'); //envia el mensaje y si no hay envía bienvenido
}

const arregloNumeros: number[]=[1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumeroTres: (number|string|boolean)[]=[1,'holi',true, 2,'holi3',true];
const arregloNumosCuatro: Array<number|string|boolean> = [1,'holi',true,2,'holi2',true];
let arregloNumerosCinco: number[]|string[]=[1,2,3,4];
arregloNumerosCinco = ['uno','dos'];