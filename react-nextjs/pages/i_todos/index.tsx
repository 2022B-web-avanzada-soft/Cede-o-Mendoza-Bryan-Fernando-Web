import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {Todo, TodoHttp} from "../../servicios/http/todos.http";


export default function() {

    const [arregloTodos, setArregloTodos] = useState(
        [] as Todo[])
    useEffect( // Iniciar el componente
        () => {
            // consulta API ...
            consultarTodos();
        },
        []
    )
    const consultarTodos = async () => { //funcion consultar
        const resultado = await TodoHttp();
        setArregloTodos([ //seteamos el arreglo con los valores del resultado
            ...arregloTodos,
            ...resultado]);
    }
    return (
        <>
            <Layout title={"To Do's"}>
                <h1>To Do's </h1>
                {arregloTodos.map(   //a continuacio se relaiza un map con todos los todos y se renderiza un listado de items
                    (todo) => {
                        return (<li key={todo.id}>
                            {todo.id} - {todo.completed} -
                            <a href={'/i_todos/' + todo.id}>
                                {todo.title}
                            </a>
                        </li>)
                    }
                )}
            </Layout>
        </>
    )
}