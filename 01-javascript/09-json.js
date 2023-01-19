const arregloUsuraios=[
    {
        id:1,
        nombre:'Adrian',
    }
];

const arregloGuardado=JSON.stringify(arregloUsuraios) //tranforma un arreglo a un string
const usuario={
    id:1,
    nombre:'Kevin',
};

const objetoGuardado=JSON.stringify(usuario) //tranforma un objeto a un string
console.log('arregloGuardado',arregloGuardado);
console.log('objetoGuardado',objetoGuardado);
const arregloRestaurado=JSON.parse(arregloGuardado);  //transforma a objeto
const objetoRestaurado=JSON.parse(objetoGuardado); //transforma a objeto
console.log('arregloRestaurado',arregloRestaurado);
console.log('objetoRestaurado',objetoRestaurado);