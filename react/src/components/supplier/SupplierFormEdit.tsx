import { useState, useEffect, forwardRef } from "react";
import {
    Box,
    Typography,
    Paper,
    Stack,
    TextField,
    Button,
    LinearProgress,
    Alert,
    AlertProps,
    Snackbar,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosClient from "./../../axiosClient";
import { ISupplierForm } from "./SupplierFormNew";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />;
    }
);

export const SupplierFormEdit = () => {
    const form = useForm<ISupplierForm>();
    const { register, formState, setValue, handleSubmit, getValues } = form;
    const { isValid, isDirty } = formState;
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [open, setOpen] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axiosClient.get("/suppliers/" + id).then((data) => {
            setValue("supplierCode", data.data.supplierCode);
            setValue("supplierName", data.data.supplierName);
            setLoading(false);
        });
    }, []);

    const onSubmit = () => {
        setSending(true);
        axiosClient
            .put(`/suppliers/${id}`, {
                supplier_code: getValues("supplierCode"),
                supplier_name: getValues("supplierName"),
            })
            .then((response) => {
                console.log(response);
                setSending(false);
                setOpen(true);
            })
            .catch((error) => {
                setSending(false);
            });
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

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
                        Редактировать поставщика
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
                                disabled={!isDirty || !isValid || sending}
                                type="submit"
                            >
                                Сохранить
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
            <Snackbar
                open={open}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <SnackbarAlert
                    severity="success"
                    variant="filled"
                    onClose={handleClose}
                >
                    Поставщик упешно отредактирован
                </SnackbarAlert>
            </Snackbar>
        </>
    );
};
