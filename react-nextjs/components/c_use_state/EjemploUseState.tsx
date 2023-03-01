import {useEffect, useState} from "react";

interface Usuario {//Setear los datos que debe tener usuario
    nombre: string;
    edad: number;
    casado: boolean;
    hijos?: number[];
}

export default function(){
    const [numero, setNumero] = useState(0);
    const [nombre, setNombre] = useState("");
    const [arregloNumeros, setArregloNumeros] = useState([1, 2, 3] as number[]);
    //no es nesesario poner as numbre xk ya lo reconoce
    const [usuario, setUsuario] = useState({
        nombre: "Adrian",
        edad: 33,
        casado: true,
    }as Usuario)

    //setUsuario({nombre:"Fernando",edad:25, casado:false,hijos:[]})

    // ayuda escuchar cambios variables
    useEffect(
        ()=>{
            console.log('INICIO EL COMPONENTE', numero, usuario);
        },
        []  // arregloVariables
        // Si esta vacio se ejecuta al principio una vez
    );
    useEffect(
        ()=>{
            console.log('Cambio numero', numero);
        },
        [numero]  // arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio arregloNumeros', arregloNumeros);
        },
        [arregloNumeros]  // arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio usuario', usuario);
        },
        [usuario]  // arregloVariables
    );

    useEffect(
        ()=>{
            console.log('Cambio todo', numero, arregloNumeros, usuario);
        },
        [numero, arregloNumeros, usuario]  // arregloVariables
    );


    return (
        <>
            <button className={"bg-blue-500 m-2"} onClick={(event)=>{
                event.preventDefault();
                setNumero(numero+1);
            }}
            >Numero</button>
            <button className={"bg-blue-500 m-2"} onClick={(event)=>{
                event.preventDefault();
                setArregloNumeros([...arregloNumeros,1]);
                //Aumento en 1 al arreglo con destructuracion de arreglos
            }}
            >Arreglo</button>
            <button className={"bg-blue-500 m-2"} onClick={(event)=>{
                event.preventDefault();
                //sobre escribo el nombre con destructuracion del usuario
                let usuarioNuevo={...usuario,nombre: new Date().toString()};
                setUsuario(usuarioNuevo);
            }}
            >Usuario</button>
        </>
    )
}