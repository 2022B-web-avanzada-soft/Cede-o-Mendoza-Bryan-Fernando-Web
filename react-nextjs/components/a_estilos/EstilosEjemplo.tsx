 import styles from './estilos.module.css'
 import styled from '@emotion/styled'
export default function(){
    const misEstilos={
        color: 'white',
        backgroundColor:'black',
        borderBottom:'5px solid yellow',
    }

    const TituloRojo = styled.h1`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: red
`
    const Subtitulo = styled.h2`
    font-size: 1.5rem;
    text-transfrom:capitalize;
    color:green;
`

    //Styled COmponents
    //Se puede crear componentes de
    return(
        <>
            <div className={styles.rojo}> Hola </div> aqui estilos ejemplo
            <div style={misEstilos}> Hola </div>
            <TituloRojo>Styled Componene </TituloRojo>


        </>
    )
}