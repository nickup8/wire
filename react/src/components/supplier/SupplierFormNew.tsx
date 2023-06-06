import { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Stack,
    TextField,
    Button,
    Alert,
    AlertTitle,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosClient from "../../axiosClient";

export interface ISupplierForm {
    supplierCode: string;
    supplierName: string;
}

export const SupplierFormNew = () => {
    const form = useForm<ISupplierForm>();
    const { register, formState, handleSubmit, getValues } = form;
    const { isValid } = formState;

    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState<string | null>(null);

    const onSubmit = () => {
        setSending(true);
        axiosClient
            .post("/suppliers", {
                supplier_code: getValues("supplierCode"),
                supplier_name: getValues("supplierName"),
            })
            .then((response) => {
                setSending(false);
            })
            .catch((error) => {
                setSending(false);
            });
    };

    return (
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
                                required: "Название поставщика обязателен",
                            })}
                        />
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ mr: 2 }}
                        disabled={!isValid || sending}
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
    );
};
