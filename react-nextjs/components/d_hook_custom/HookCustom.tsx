import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect} from "react";
import {MONEDAS} from "./monedas";

export default function (){
    const[moneda, UseSelectMoneda]=useSelectMoneda(
        'moneda2', MONEDAS
    )
    useEffect(  // usamos un useEfect como listener de la variable moneda.
        ()=>{
            console.log('cambio moneda',moneda)
        },
        [moneda]
    )
    return (<>
        {UseSelectMoneda}
    </>)
}