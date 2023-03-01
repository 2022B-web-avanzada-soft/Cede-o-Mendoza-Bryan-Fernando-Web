import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";
import EComponenteC from "./EComponenteC";

export default function (){
    const contenedorContexto= useContext(ContenedorContext)
    return(
        <>
            Componente B
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-500 m-2"} onClick={ e=>{
                e.preventDefault();
                contenedorContexto.setNombreUsuario('CompB')
            }}>
                Actualizar
            </button>
            <EComponenteC></EComponenteC>
        </>
    )
}