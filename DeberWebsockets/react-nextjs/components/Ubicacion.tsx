
export interface UbicacionProps{
    nombre:string;
    latitud:string;
    longitud:string;
}


export default function (props:UbicacionProps){
    const{nombre,latitud,longitud}= props
    return(
        <>
            <p>
              <strong>Ubicacion de: {nombre} </strong>
            </p>
            <p>
                Latitud:{latitud}
                Longitud:{longitud}
            </p>


        </>
        )
}