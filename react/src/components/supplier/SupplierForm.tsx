import { ReactEventHandler, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { ISuppliers } from "./Suppplier";

import {
    Box,
    LinearProgress,
    Stack,
    TextField,
    Typography,
    Paper,
    Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

interface IFormSupplier {
    supplierCode: string;
    supplierName: string;
}

export const SupplierForm: React.FC = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [supplier, setSupplier] = useState<ISuppliers>({
        supplierCode: "",
        supplierName: "",
    });
    // const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const form = useForm<IFormSupplier>({});
    const { register } = form;

    // const hendleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     if (supplier.id) {
    //         axiosClient
    //             .put("/suppliers/" + id, supplier, {
    //                 headers: {
    //                     Accept: "application/json",
    //                 },
    //             })
    //             .then(() => {
    //                 navigate("/supplier");
    //             })
    //             .catch((error) => {
    //                 const response = error.response;
    //                 if (response && response.status === 422) {
    //                     setErrors(response.data.error);
    //                 }
    //             });
    //     } else {
    //         axiosClient
    //             .post("/suppliers", supplier)
    //             .then((data) => {
    //                 setSupplier(data.data);
    //                 navigate("/supplier");
    //             })
    //             .catch((error) => {
    //                 const response = error.response;
    //                 if (response && response.status === 422) {
    //                     setErrors(response.data.error);
    //                 }
    //             });
    //     }
    // };

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get("/suppliers/" + id)
                .then((data) => {
                    setSupplier(data.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    return (
        <>
            {loading ? (
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <LinearProgress color="error" />
                </Box>
            ) : (
                <>
                    {supplier.id && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 2,
                            }}
                        >
                            <Typography
                                variant="h4"
                                component={"h1"}
                                fontStyle={"bold"}
                                sx={{ px: 2 }}
                            >
                                Редактировать:{" "}
                                <span>{supplier.supplierName}</span>
                            </Typography>
                        </Box>
                    )}
                    {!supplier.id && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 2,
                            }}
                        >
                            <Typography
                                variant="h4"
                                component={"h1"}
                                fontStyle={"bold"}
                                sx={{ px: 2 }}
                            >
                                Добавить нового поставщика
                            </Typography>
                        </Box>
                    )}
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <form noValidate>
                            <Stack spacing={2} direction="row">
                                <TextField
                                    type="text"
                                    id="supplierCode"
                                    label="Код поставщика"
                                    variant="outlined"
                                    size="small"
                                    {...register("supplierCode", {
                                        required: "Код поставщика обязателен",
                                    })}
                                />
                                <TextField
                                    type="text"
                                    id="supplierName"
                                    label="Название поставщика"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    {...register("supplierName", {
                                        required:
                                            "Название поставщика обязателен",
                                    })}
                                />
                                <Button variant="contained">Добавить</Button>
                                <Button
                                    component={Link}
                                    to="/supplier"
                                    variant="outlined"
                                >
                                    Отмена
                                </Button>
                            </Stack>
                            {/* <input
                            type="text"
                            onChange={(event) =>
                                setSupplier({
                                    ...supplier,
                                    supplierCode: event.target.value,
                                })
                            }
                            value={supplier.supplierCode}
                            placeholder="Код поставщика"
                        /> */}
                            <input
                                type="text"
                                onChange={(event) =>
                                    setSupplier({
                                        ...supplier,
                                        supplierName: event.target.value,
                                    })
                                }
                                value={supplier.supplierName}
                                placeholder="Название поставщика"
                            />
                            <button
                                type="submit"
                                onClick={() => console.log(supplier)}
                            >
                                {supplier.id ? "Редактировать" : "Добавить"}
                            </button>
                            <Link to={"/supplier"}>Отмена</Link>
                        </form>
                    </Paper>

                    {/* {errors && console.log(errors)} */}
                </>
            )}
        </>
    );
};
