//pages/a_hola_mundo
/*const a_componente = function(){
    return (<></>)
}*/
/*

const b_componente = () =>{
    return <></>
}

export default a_componente
*/
import EstilosEjemplo from "../components/a_estilos/EstilosEjemplo";
//import Componente from "../components/b_componentes/Componente";
import Layout from "../components/Layout";

export default function a_hola_mundo(){
    return(
        <>
            <Layout title={'hola mundo'}>
                <h1>Hola mundo</h1>
                <EstilosEjemplo></EstilosEjemplo>

            </Layout>
        </>
    )
}