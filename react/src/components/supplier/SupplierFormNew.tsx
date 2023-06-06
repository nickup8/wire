import { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Stack,
    TextField,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export interface ISupplierForm {
    supplierCode: string;
    supplierName: string;
}

export const SupplierFormNew = () => {
    const form = useForm<ISupplierForm>();
    const { register, formState } = form;
    const { isValid } = formState;
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
                                required: "Название поставщика обязателен",
                            })}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ mr: 2 }}
                        disabled={!isValid}
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
