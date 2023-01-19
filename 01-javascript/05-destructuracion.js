const adrian = {
    nombre: 'adrian',
};
const carolina={
    nombre: 'Carolina',
    apellido: 'Eguez',
};
const adrianCarolina={//crea una nueva referencia (valor)
    ...adrian,
    ...carolina,
};
console.log('adrianCarolina',adrianCarolina);

//Destructuración de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [5,6,7,8,9,10];
const superArreglo = [
    ...arregloUno, //el orden importa
    ...arregloDos,
]; //[1,2,3,4,5,6,7,8,9,10];
console.log('superArreglo',superArreglo);