import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Layout from "../components/Layout";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

type FormularioEjemplo = { //Creamos los valores del formulario
    nombre: string;
    estadoCivil: string;
}
export default function () {
    const [nombre, setNombre] = useState('Bryan');
    //Creamos el formulario
    const  {handleSubmit, register, formState: {errors, isValid},
        control
    }= useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Fernando',//
                estadoCivil: ''
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data)
    }

    return (
        <>
            <Layout title={'Formulario'}>
                <h1>Formulario con react Hook Form</h1>
                <form onSubmit={handleSubmit(controladorSubmit)}>//cuando se usa onSubmit usamos lo que nos traer el hookFrom
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Adrian"
                               id="nombre"
                               {...register('nombre', {
                                   required: { //que sea requerido
                                       value: true,
                                       message: 'nombre requerido'
                                   }, //validaciones
                                   maxLength: {value: 20, message: 'Longitud maxima 20'},
                                   minLength: {value: 5, message: 'Longitud minima 5'},
                                   validate: {   //validadciones personales
                                       soloNumeros:(valorActual) => {
                                           // Transformar a numero un string:
                                           // Number("1")
                                           // +"1"
                                           if (Number.isNaN(+valorActual)) {
                                               // Se puede devolver un false o un mensaje de error
                                               // return false; // Error
                                               return 'Ingrese solo numeros'; // Error
                                           } else {
                                               // Se devuelve un true
                                               return true; // Esta correcto
                                           }
                                       }
                                   }
                               })}
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                        {errors.nombre &&
                            <div className="alert alert-warning"
                                 role="alert">
                                Tiene errores {errors.nombre.message}
                            </div>
                        }
                    </div>

                    //Form de una libreria de React
                    <div className="mb-3">
                        <FormControl fullWidth>   //Libreria MUi
                            <InputLabel id="estadoCivilLabelId">Estado civil</InputLabel>
                            <Controller //Libreria Reack Hook from
                                control={control}
                                rules={{ required: {value: true, message: 'Estado C. requerido'}}}
                                name="estadoCivil"
                                render={ //recibe una funcion
                                    ({field: {onChange, value, onBlur,}}) => {
                                        // onBlur,Onchange ,etx son las partes mas importantes y selas devuelve
                                        return <Select
                                            labelId="estadoCivilLabelId"
                                            id="estadoCivilId"
                                            label="Estado Civil"
                                            onBlur={onBlur}
                                            value={value}
                                            onChange={onChange}
                                        >
                                            <MenuItem value={'casado'}>Casado</MenuItem>
                                            <MenuItem value={'soltero'}>Soltero</MenuItem>
                                        </Select>
                                    }
                                }
                            />
                            {/*Termina controller*/}
                            {errors.estadoCivil &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.estadoCivil.message}
                                </div>
                            }
                        </FormControl>
                    </div>

                    <Button type="submit"
                            disabled={!isValid}
                            variant='outlined'>Submit</Button>

                </form>

            </Layout>
        </>
    )
}