import Layout from "../components/Layout";
import CryptoFormulario from "../components/f_ejemplo_criptomonedas/CryptoFormulario";
import {useEffect, useState} from "react";

export interface ConsultaMoneda{
    valorMoneda: string;
    valorCriptoMoneda: string;
}

export default function () {
    const [monedas, setMonedas]=useState({}as ConsultaMoneda)
    const [resultado, setResultado] = useState({} as any); //creamos una variable resultado de la conversion

    useEffect( //Para escuchar los valores de las monedas
        ()=>{
            if(Object.keys(monedas).length === 2){ //Verificar que el array monedas este lleno de las dos monedas,
                // debemos tener en cuenta los valores de consulta fsyms y tsyms que son las variable de moneda y cryto  a consultar
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.valorCriptoMoneda}&tsyms=${monedas.valorMoneda}`
                const consultarCripto = async ()=>{
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();//nos llega el resultado
                    setResultado(resultado.DISPLAY[monedas.valorCriptoMoneda][monedas.valorMoneda])
                }
                consultarCripto();
            }
        },
        [monedas]
    )

    return (
        <>
            <Layout title="Ejemplo Criptomonedas | EPN">
                <div className="text-center">
                    <h1>Cripto Exchange Calculator</h1>  //A continuacion crearemos un titulo y la imagen
                    <img
                        className={'rounded'}
                        src="https://media.ambito.com/p/e2e0836c4f57f5ae2890d784df8de512/adjuntos/239/imagenes/038/723/0038723804/criptomonedasjpg.jpg" alt=""/>
                </div>
                <h2>Seleccion</h2>
                <p>Selecciona tu moneda y criptomoneda</p>
                <div className="row">
                    <div className="col-sm-6"> //La dividimos en dos coluntas
                        <CryptoFormulario
                            setMonedas={setMonedas}>
                        </CryptoFormulario>
                    </div>
                    <div className="col-sm-6">
                        {
                            resultado.PRICE &&
                            <div>
                                <p><strong>PRECIO:</strong>
                                    {resultado.PRICE}</p>
                                <p><strong>Precio mas alto del dia:</strong>
                                    {resultado.HIGHDAY}</p>
                                <p><strong>Precio mas bajo del dia:</strong>
                                    {resultado.LOWDAY}</p>
                                <p><strong>Variacion ultimas 24 horas:</strong>
                                    {resultado.CHANGEPCT24HOUR}</p>
                                <p><strong>Ultima Actualizacion:</strong>
                                    {resultado.LASTUPDATE}</p>
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}