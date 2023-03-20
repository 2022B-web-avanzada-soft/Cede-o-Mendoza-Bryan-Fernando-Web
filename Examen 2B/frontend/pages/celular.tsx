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
    Checkbox, FormControlLabel, Select, InputLabel, MenuItem, Box
} from "@mui/material";
import {useForm, SubmitHandler} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";

import {CelularInterface} from "../interfaces/celular-interface";
import {MarcaInterface} from "../interfaces/marca-interface";


const URL = "http://localhost:3030/celular";
type Inputs = {
    id: number;
    nombreCelular: string;
    modelo: string;
    precio: string;
    procesador: string;
    marca?:  number;
};

export default function () {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>();
    const [openCreateInstanceDialog, setOpenCreateInstanceDialog] = useState(false);
    const [celulares, setCelulares] = useState([] as CelularInterface[]);
    const [marcas, setMarcas] = useState([] as MarcaInterface[]);
    const [celular, setCelular] = useState({} as CelularInterface);

    useEffect(
        () => {
            const getCelulares = async () => {
                const response = await fetch(URL);
                const celulares = await response.json();
                setCelulares(celulares);
            }
            const getMarcas = async () => {
                const response = await fetch("http://localhost:3030/marca");
                const marcas = await response.json();
                setMarcas(marcas);
            }
            getCelulares();
            getMarcas();
        },
        []
    )

    function MateriaCards(): JSX.Element[]  {
        const returnCards: JSX.Element[] = [];
        celulares.forEach((celular: CelularInterface) => {
            returnCards.push(
                <Grid item xs={12} bgcolor={"#ECEBEB"} padding={"1rem"} sx={{
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                }} key={celular.id}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <h2 style={{color: "#6F6F6F"}}>{celular.nombreCelular}</h2>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <p style={{color: "#6F6F6F"}}><strong>Modelo: </strong> {celular.modelo}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Precio: </strong>{celular.precio}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Procesador: </strong>{celular.procesador}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Marca: </strong>{typeof celular.marca === "number" ? "Sin profesor asignado" : celular.marca?.nombreMarca}</p>
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
                            }} onClick={(e) => {handleEditInstance(celular)}}>
                                Editar
                            </Button>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#6fa8dc",
                            }} sx={{
                                marginLeft: "1rem",
                            }} onClick={(event) => {handleDeleteInstance(celular.id)}}>
                                Eliminar
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            )
        })
        return returnCards;
    }


    const handleDeleteInstance = (celularId: number) => {
        axios.delete(`${URL}/${celularId}`).then(r => {
            const newCelulares = celulares.filter((celular: CelularInterface) => celular.id !== celularId);
            setCelulares(newCelulares);
        }).catch(e => {
            console.log(e);
        })

    }
    const handleCancelCreateInstanceDialog = () => {
        setCelular({} as CelularInterface)
        setOpenCreateInstanceDialog(false);
    };
    const handleAcceptCreateInstanceDialog: SubmitHandler<Inputs> = data => {

        const newCelular: CelularInterface = {

            id: data.id,
            nombreCelular: data.nombreCelular,
            modelo: data.modelo,
            precio: data.precio,
            procesador: data.procesador,
            marca:  data.marca,
        }
        axios.post(URL, newCelular).then(r => {
            newCelular.marca = marcas.find((marca: MarcaInterface) => marca.id === newCelular.marca);
            const newCelulares = celulares.concat(newCelular);
            setCelulares(newCelulares);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });

    };
    const handleUpdateCreateInstanceDialog: SubmitHandler<Inputs> = data => {
        console.log(data)
        const newCelular: CelularInterface = {

            id: celular.id,
            nombreCelular: data.nombreCelular,
            modelo: data.modelo,
            precio: data.precio,
            procesador: data.procesador,
            marca:  data.marca,
        }
        axios.put(`${URL}/${celular.id}`, newCelular).then(r => {
            newCelular.marca = marcas.find((marca: MarcaInterface) => marca.id === newCelular.marca);
            const newCelulares = celulares.map((celular: CelularInterface) => {
                if (celular.id === newCelulares.id) {
                    return newCelulares;
                }
                return celular;
            });
            setCelulares(newCelulares);
            setCelular({} as CelularInterface)
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    }
    const handleCreateInstance = () => {
        console.log("Create instance")
        setOpenCreateInstanceDialog(true);
    }
    const handleEditInstance = (c: CelularInterface) => {
        setCelular(c);
        setOpenCreateInstanceDialog(true);
    }

    const openDataDialog = (celular: CelularInterface) => {
        return(
            <Dialog open={openCreateInstanceDialog}>
                <DialogTitle>Crear un nuevo celular</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ingresa los siguientes datos para registrar un celular.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nombreCelular"
                        label="Nombre del celular"
                        defaultValue={celular.nombreCelular}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("nombreCelular", {required: "Este campo es requerido"})}
                    />
                    {errors.nombreCelular && <span>Este campo es requerido</span>}
                    <TextField
                        margin="dense"
                        id="modelo"
                        label="Modelo"
                        defaultValue={celular.modelo}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("modelo", {required: "Este campo es requerido"})}
                    />
                    {errors.modelo && <><span>Este campo es requerido</span><br/></>}
                    <TextField
                        margin="dense"
                        id="precio"
                        label="Precio"
                        defaultValue={celular.precio}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("precio", {required: "Este campo es requerido"})}
                    />
                    {errors.precio && <><span>Este campo es requerido</span><br/></>}
                    <TextField
                        margin="dense"
                        id="procesador"
                        label="Procesador"
                        defaultValue={celular.procesador}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("procesador", {required: "Este campo es requerido"})}
                    />
                    {errors.procesador && <><span>Este campo es requerido</span><br/></>}
                    <Select
                        margin="dense"
                        labelId="Marca"
                        id="marca"
                        label="Marca"
                        defaultValue={typeof celular.marca === "number" ? "Sin profesor asignado" : celular.marca?.id}
                        fullWidth
                        variant="outlined"
                        {...register("marca", {required: "Este campo es requerido"})}>
                        {marcas.map((marca: MarcaInterface) => {
                            return <MenuItem key={marca.id} value={marca.id}>{marca.nombreMarca}</MenuItem>
                        })
                        }
                    </Select>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelCreateInstanceDialog}>Cancelar</Button>
                    {celular.id? <Button onClick={handleSubmit(handleUpdateCreateInstanceDialog)} disabled={!isValid}>Actualizar</Button> :
                        <Button onClick={handleSubmit(handleAcceptCreateInstanceDialog)} disabled={!isValid}>Crear</Button>}
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
                        <Grid  item md={3} >
                            <h1>Celulares</h1>
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
                                {MateriaCards()}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {openDataDialog(celular)}
        </Layout>
    )
}