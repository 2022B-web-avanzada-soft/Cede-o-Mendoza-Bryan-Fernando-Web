const arregloUsuraios=[
    {
        id:1,
        nombre:'Adrian',
    }
];

const arregloGuardado=JSON.stringify(arregloUsuraios)
const usuario={
    id:1,
    nombre:'Adrian',
};

const objetoGuardado=JSON.stringify(usuario)
console.log('arregloGuardado',arregloGuardado);
console.log('objetoGuardado',objetoGuardado);
const arregloRestaurado=JSON.parse(arregloGuardado);
const objetoRestaurado=JSON.parse(arregloGuardado);
console.log('arregloRestaurado',arregloRestaurado);
console.log('objetoRestaurado',objetoRestaurado);