 import styles from './estilos.module.css'
export default function(){
    const misEstilos={
        color: 'white',
        backgroundColor:'black',
        borderBottom:'5px solid yellow',
    }


    return(
        <>
            <div className={styles.rojo}> Hola </div> aqui estilos ejemplo
            <div style={misEstilos}> Hola </div>
        </>
    )
}