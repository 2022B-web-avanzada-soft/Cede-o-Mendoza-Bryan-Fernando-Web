import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect} from "react";
import {MONEDAS} from "./monedas";

export default function (){ // creamos un componente  que tenga las variable:
    const[moneda, UseSelectMoneda]=useSelectMoneda(  //Usamos el Hookcustomisado
        'moneda2', MONEDAS
    )
    useEffect(  // usamos un useEfect como listener de la variable moneda.
        ()=>{
            console.log('cambio moneda',moneda)
        },
        [moneda]
    )
    return (<>
        {UseSelectMoneda}  //renderizamos el archivo jsx que se produjo en el hook
    </>)
}