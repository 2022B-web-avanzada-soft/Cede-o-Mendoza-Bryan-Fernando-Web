//01 variables
//npm install -g typescript
//tsc
let nombre: string = 'Fernando'; //primitiva
let nombre2: String = 'Fernando2'; //clasa string
//tsc 01-variables.ts --target es3
//tsc 01-variables.ts --target es6
//nombre = 1;
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//Duck Typing
let apellido = 'Cedeño'; //string
//apellido = 1; //Error, no es un string
apellido ='Mendoza';
apellido.toUpperCase();

let marihuana:any =2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string |Date = '2'; //2 /new date()
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 2222;
let numeroUnico: number = 1; //para igualar a otros se castea
numeroUnico = numeroUnico + Math.pow((edadMultiple as number), 2);