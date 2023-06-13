import React from "react";

import {
    Box,
    Stack,
    Paper,
    Typography,
    TextField,
    Button,
} from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

export interface IInvoiceForm {
    numberInvoice: string;
    supplierInvoice: string;
    fileInvoice: string;
}

export const InvoiceFormUpload = () => {
    const form = useForm<IInvoiceForm>();
    const { register, handleSubmit, formState, getValues } = form;
    const { isValid } = formState;
    const navigate = useNavigate();

    const onSubmit = () => {
        console.log(
            getValues("numberInvoice"),
            getValues("supplierInvoice"),
            getValues("fileInvoice")
        );
        return navigate(-1);
    };

    return (
        <Box>
            <Typography
                variant="h4"
                component={"h1"}
                fontStyle={"bold"}
                sx={{ px: 2, mb: 2 }}
            >
                Загрузить новую накладную
            </Typography>
            <Paper variant="outlined" sx={{ p: 2 }}>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2} direction="row" mb={2}>
                        <TextField
                            label="Номер накладной"
                            size="small"
                            type="text"
                            fullWidth
                            {...register("numberInvoice", {
                                required: "Номер накладной обязателен",
                            })}
                        />
                        <TextField
                            label="Код поставщика"
                            size="small"
                            type="text"
                            fullWidth
                            {...register("supplierInvoice", {
                                // required: "Код поставщика обязателен",
                            })}
                        />
                        <TextField
                            size="small"
                            type="file"
                            fullWidth
                            {...register("fileInvoice", {
                                // required: "Файл для загрузки обязателен",
                            })}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        endIcon={<FileUploadIcon />}
                        size="large"
                        sx={{ mr: 2 }}
                        type="submit"
                    >
                        Загрузить
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        component={Link}
                        to="/invoices"
                    >
                        Отмена
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};
