import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Paper,
    Stack,
    TextField,
    Button,
    LinearProgress,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosClient from "./../../axiosClient";
import { ISupplierForm } from "./SupplierFormNew";

export const SupplierFormEdit = () => {
    const form = useForm<ISupplierForm>();
    const { register, formState, setValue } = form;
    const { isValid, isDirty } = formState;
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axiosClient.get("/suppliers/" + id).then((data) => {
            setValue("supplierCode", data.data.supplierCode);
            setValue("supplierName", data.data.supplierName);
            setLoading(false);
        });
    }, []);

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
                <Box>
                    <Typography
                        variant="h4"
                        component={"h1"}
                        fontStyle={"bold"}
                        sx={{ px: 2, mb: 2 }}
                    >
                        Добавить поставщика
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <form noValidate>
                            <Stack spacing={2} direction="row" mb={2}>
                                <TextField
                                    type="text"
                                    id="supplierCode"
                                    label="Код поставщика"
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: 400 }}
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
                            </Stack>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ mr: 2 }}
                                disabled={!isDirty || !isValid}
                            >
                                Добавить поставщика
                            </Button>
                            <Button
                                component={Link}
                                to="/supplier"
                                variant="outlined"
                                size="large"
                            >
                                Отмена
                            </Button>
                        </form>
                    </Paper>
                </Box>
            )}
        </>
    );
};
