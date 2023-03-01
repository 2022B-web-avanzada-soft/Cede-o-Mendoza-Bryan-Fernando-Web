import {event} from "next/dist/build/output/log";
import {useState} from "react";

type PropiedadesComponente = {
    url?: string;
    iteraciones?: number;
    mostrar?:boolean;
};

//interface PropiedadesComponente{
export default function(props: PropiedadesComponente){
    const{url, iteraciones, mostrar}=props;
    //const url = props.url;
    //const iteraciones = props.iteraciones
    //const mostrar = props.mostrar

    const contenidoAdicional:()=>(JSX.Element)=()=>{
        if(mostrar){
            return <p>Hola</p>

        }
        return<></>
    };
    //Hooks
    //const[numeroUno, numeroDos]=[1,2]
    const [iteracion, setIteracion] = useState(iteraciones)
    return(
        <>
            <a target="_blanck" href={url}>IR a GOOGlE</a>
            //{/*mostrar ? <p>Hello</p>: <></>*/}
            {contenidoAdicional()}
            {mostrar &&
                <h1>Mostrar item</h1>
            }
            <div>
                {iteracion}
            </div>
            <button className="bg-blue-500" onClick={
                (event) => {
                    console.log(event);
                    setIteracion(iteracion+1)
                    //console.log('Dio Click')
                }
            }> Aumentar </button>
        </>
    )
}