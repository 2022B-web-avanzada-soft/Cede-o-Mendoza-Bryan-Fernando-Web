import Layout from "../components/Layout";
import CryptoFormulario from "../components/f_ejemplo_criptomonedas/CryptoFormulario";
import {useState} from "react";

export default function () {
    const [monedas, setMonedas]=useState({}as any)

    return(
        <>
            <Layout title="Ejemplo Criptomonedas EPN "></Layout>
            <CryptoFormulario>
                setMonedas={setMonedas}
            </CryptoFormulario>


        </>
    )
}