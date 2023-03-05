
//[idTodo].tsx

import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {Todo, TodoHttp} from "../../servicios/http/todos.http";

// /i_todos
//      [idTodo].ts
import { useRouter } from 'next/router'

interface ParametrosTodo {
    error?: string;
    todo?: Todo;
}
// /i_todos/hijos_todos/index.ts
// /i_todos/hijos_todos/[idHijosTodos].ts
// http://localhost:3000/i_todos/hijos_todos/[idHijosTodos]

// /i_todos/[idTodo]/hijos_todos/index.ts
// /i_todos/[idTodo]/hijos_todos/[idHijosTodos].ts
// http://localhost:3000/i_todos/[idTodo]/hijos_todos/[idHijosTodos]

// http://localhost:3000/i_todos/1?nombre=adrian // idTodo = 1; nombre = adrian;

export default function(params:ParametrosTodo) {
    console.log(params);
    const router = useRouter()
    const {idTodo, nombre, apellido} = router.query;
    console.log(idTodo, nombre, apellido)
    return (
        <>
            <Layout title={"To Do's hijos"}>
                <h1>To Do's hijos  {params?.todo.title}</h1>
            </Layout>
        </>
    )
}
// Codigo para cargar informacion EN EL SERVIDOR y enviar al CLIENTE
export const getStaticProps: GetStaticProps = async (
    {params}
) => {
    try {
        // fetch
        const id = params?.idTodo as string;
        const resultado = await TodoHttp(id);
        return {props: {todo: resultado}}
    } catch (err: any) {
        return {props: {errors: err.message}}
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // consulta de los ids VALIDOS
    const paths = [
        {
            params: {idTodo: '1'},
        },
        {
            params: {idTodo: '2'},
        },
        {
            params: {idTodo: '4'},
        }
    ];
    return {paths, fallback: false}
}

// Servidor (nextjs frontend)

// Servidor Backend Content Management System (CMS) Wordpress Drupal
// noticia/1
// noticia/2
// noticia/3 NO - cerrada
// noticia/4