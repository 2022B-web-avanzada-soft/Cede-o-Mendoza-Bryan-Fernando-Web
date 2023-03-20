import Layout from "../components/Layout";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    DialogContentText,
    Checkbox, FormControlLabel, Box
} from "@mui/material";
import {useForm, SubmitHandler} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";

import {MarcaInterface} from "../interfaces/marca-interface";
import {CelularInterface} from "../interfaces/celular-interface";


const URL = "http://localhost:3030/marca/"
type Inputs = {
    id: number;
    nombreMarca: string;
    numeroEmpleados: string;
    paisCede: string;
    propietario: string;
    materias?: CelularInterface[];
};

export default function () {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>();
    const [openCreateInstanceDialog, setOpenCreateInstanceDialog] = useState(false);
    const [marca, setMarca] = useState({} as MarcaInterface);
    const [marcas, setMarcas] = useState([] as MarcaInterface[]);


    useEffect(
        () => {
            const getMarcas = async () => {
                const response = await fetch(URL);
                const marcas = await response.json();
                setMarcas(marcas);
            }
            getMarcas();
        },
        []
    )

    function MarcasCards(): JSX.Element[]  {
        const returnCards: JSX.Element[] = [];
        marcas.forEach((marcas: MarcaInterface) => {
            returnCards.push(
                <Grid item xs={12} bgcolor={"#ECEBEB"} padding={"1rem"} sx={{
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                }} key={marcas.id}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <h2 style={{color: "#6F6F6F"}}>{marcas.nombreMarca}</h2>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <p style={{color: "#6F6F6F"}}><strong>Nombre de marca: </strong> {marcas.nombreMarca.toString()}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Numero de empleados: </strong>{marcas.numeroEmpleados}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Pais cede: </strong>{marcas.paisCede}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Propietario: </strong>{marcas.propietario}</p>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#6fa8dc",
                            }}  sx={{
                                marginLeft: "1rem",
                            }} onClick={(e) => hanldeUpdateInstanceDialog(marcas)}>
                                Editar
                            </Button>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#6fa8dc",
                            }} sx={{
                                marginLeft: "1rem",
                            }} onClick={(e) => handleDeleteInstance(marcas.id)}>
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
        return returnCards;
    }


    const handleDeleteInstance = (marcaId: number) => {
        axios.delete(`${URL}/${marcaId}`).then(r => {
            const newMarcas = marcas.filter((marca: MarcaInterface) => marca.id !== marcaId);
            setMarcas(newMarcas);
        }).catch(e => {
            console.log(e);
        })

    }

    const hanldeUpdateInstanceDialog = (marca: MarcaInterface) => {
        setMarca(marca);
        setOpenCreateInstanceDialog(true);
    }

    const handleCancelCreateInstanceDialog = () => {
        setMarca({} as MarcaInterface);
        setOpenCreateInstanceDialog(false);
    };
    const handleAcceptCreateInstanceDialog: SubmitHandler<Inputs> = data => {
        const newMarca: MarcaInterface = {
            id: data.id,
            nombreMarca: data.nombreMarca,
            numeroEmpleados: data.numeroEmpleados,
            paisCede: data.paisCede,
            propietario: data.propietario
        }
        axios.post(URL, newMarca).then(r => {
            setMarcas([...marcas, r.data]);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    };
    const handleAcceptUpdateInstanceDialog: SubmitHandler<Inputs> = data => {
        const newMarca: MarcaInterface = {
            id: marca.id,
            nombreMarca: data.nombreMarca,
            numeroEmpleados: data.numeroEmpleados,
            paisCede: data.paisCede,
            propietario: data.propietario
        }
        axios.put(`${URL}/${marca.id}`, newMarca).then(r => {
            const newMarcas = marcas.map((marca: MarcaInterface) => {
                if (marca.id === r.data.id) {
                    return r.data;
                }
                return marca;
            });
            setMarcas(newMarcas);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    }

    const handleCreateInstance = () => {
        console.log("Create instance")
        setOpenCreateInstanceDialog(true);
    }

    const renderDataDialog = (marca?: MarcaInterface) => {
        return (
            <Dialog open={openCreateInstanceDialog}>
                <DialogTitle>Crear Marca</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ingresa los siguientes datos correspondientes a la marca.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        defaultValue={marca?.nombreMarca}
                        id="name"
                        label="Nombre de la marca"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("nombreMarca", {required: "Este campo es requerido"})}
                    />
                    {errors.nombreMarca && <span>Este campo es requerido</span>}
                    <TextField
                        margin="dense"
                        id="numeroEmpleados"
                        label="Numero de Empleados"
                        defaultValue={marca?.numeroEmpleados}
                        type="string"
                        fullWidth
                        variant="outlined"
                        {...register("numeroEmpleados", {required: "Este campo es requerido"})}
                    />
                    {errors.numeroEmpleados && <><span>Este campo es requerido</span><br/></>}
                    <TextField
                        margin="dense"
                        id="paisCede"
                        label="Pais Cede"
                        defaultValue={marca?.paisCede}
                        type="string"
                        fullWidth
                        variant="outlined"
                        {...register("paisCede", {required: "Este campo es requerido"})}
                    />
                    {errors.paisCede && <span>Este campo es requerido</span>}
                    <TextField
                        margin="dense"
                        id="propietario"
                        label="Propietario"
                        defaultValue={marca?.propietario}
                        type="string"
                        fullWidth
                        variant="outlined"
                        {...register("propietario", {required: "Este campo es requerido"})}
                    />
                    {errors.propietario && <span>Este campo es requerido</span>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelCreateInstanceDialog}>Cancelar</Button>
                    {marca?.nombreMarca && <Button onClick={handleSubmit(handleAcceptUpdateInstanceDialog)} disabled={!isValid}>Actualizar</Button>}
                    {!marca?.nombreMarca && <Button onClick={handleSubmit(handleAcceptCreateInstanceDialog)} disabled={!isValid}>Crear</Button>}
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} bgcolor={"#597872"} color={"#BC6D73"} padding={"1rem"} >
                    <Grid container alignContent={"center"}>
                        <Grid item md={5} >
                        </Grid>
                        <Grid item md={3}>
                            <h1>Marcas</h1>
                        </Grid>
                        <Grid item md={4} sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}>
                            <Button variant={"contained"} style={{
                                borderRadius: 15,
                                backgroundColor: "#6fa8dc",
                            }}  onClick={handleCreateInstance} sx={{
                                marginLeft: "1rem",
                            }}>
                                Agregar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '-1rem',
                }}>
                    <Grid item md={6}>
                        <Box sx={{
                            borderRadius: "1rem",
                            marginBottom: "1rem",
                            bgcolor: "#9E875F",
                            padding: "1rem",
                            marginTop: '2rem',
                        }}>
                            <Grid container>
                                {MarcasCards()}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {renderDataDialog(marca)}
        </Layout>
    )
}