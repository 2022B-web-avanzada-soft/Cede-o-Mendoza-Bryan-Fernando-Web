import {useEffect, useState} from "react";
import useSelectMoneda from "../hooks/useSelectMoneda";
import {MonedasInterface} from "../../interfaces/moneda";
import {MONEDAS} from "../d_hook_custom/monedas";

export default function (params) {
    const {setMonedas} = params;
    const [monedasArreglo, setMonedasArreglo] = useState(MONEDAS); // creamos monedasArreglo con los valores de monedas
    //Cramos un arreglo vacio de criptos con la misa estructura que Monedas Interface
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] = useState([] as MonedasInterface[]);
    const [valorMoneda, SelectMonedaComponente] = useSelectMoneda(   //Usamos el HookPersonalizados para Monedas
        'Seleccionar Moneda',
        monedasArreglo
    );
    const [valorCriptoMoneda, SelectCriptoMonedaComponente] = useSelectMoneda(  //Usamos el HookPersonalizados para Crypto
        'Seleccionar Criptomoneda',
        criptoMonedasArreglo
    );
    useEffect( //Inicializar las variables dentro del componente
        () => {
            const consultarAPICripto = async () => { //Acepmos una peticion a la API
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const respuesta = await fetch(url); //Hacer llamadas http
                const dataPlana = await respuesta.json(); //Se obtiene la data plana
                const arregloCriptos: MonedasInterface[] = dataPlana.Data.map(  //Hacemos un map para ingresar a las propiedades de cada moneda.
                    (criptoMoneda) => {
                        const criptoMonedaLocal: MonedasInterface = {  //Devolvemos  un monedas Interface
                            id: criptoMoneda.CoinInfo.Name,     //Sacamos los valores segun las llaves de la API
                            nombre: criptoMoneda.CoinInfo.FullName,
                        }
                        return criptoMonedaLocal    //Devolvemos la Criptomeneda locar
                    }
                );
                setCriptoMonedasArreglo(arregloCriptos); //Llenamos el arrglo vacio de criptos con el que acabamos de traernos de la api
            }
            consultarAPICripto().then().catch((error) => {  //consultamos El APICRIPTO
                console.error(error)
            });
        },
        []
    )
    const manejarSubmitFormulario = (e)=>{
        e.preventDefault();
    }
    return(

        <>
            <form onSubmit={manejarSubmitFormulario}>
                {SelectMonedaComponente} //Traemos los  dos componentes
                {SelectCriptoMonedaComponente}
                <br/>
                <button className={'btn btn-primary w-100'} type={'submit'}>
                    Consultar
                </button>
            </form>
        </>
    )

}
