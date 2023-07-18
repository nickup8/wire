import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Alert,
    AlertTitle,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useForm } from "react-hook-form";
import axiosClient from "../axiosClient";

export const LoginLayout = () => {
    const form = useForm();
    const { register, getValues, handleSubmit, formState } = form;
    const { isValid } = formState;
    const [error, setError] = useState("");
    const [sending, setSending] = useState(false);

    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }

    const { setUser, setToken } = useStateContext();

    const onSubmit = async () => {
        setSending(true);
        await axiosClient
            .post("/login", {
                name: getValues("name"),
                password: getValues("password"),
            })
            .then(({ data }) => {
                setToken(data.token);
                setUser(data.user);
                console.log(data.user);
            })
            .catch((error) => {
                setSending(false);
                const response = error.response;
                if (response && response.status === 422) {
                    response.data.errors = "Пользователь не найден";
                    setError(response.data.errors);
                } else if (response && response.status === 401) {
                    setError(response.data.message);
                }
            });
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                background: "#F7F9FC",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            component="div"
        >
            <Box width={400}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                >
                    Сиситема управления проводами
                </Typography>
                <Paper sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }} align="center">
                        Вход в систему
                    </Typography>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            label="Логин"
                            {...register("name", {
                                required: "Логин обязательный",
                            })}
                        />
                        <TextField
                            type="password"
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            label="Пароль"
                            {...register("password", {
                                required: "Пароль не должен быть пустым",
                            })}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={sending}
                        >
                            Войти
                        </Button>
                    </form>
                </Paper>

                {error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        <AlertTitle>Ошибка</AlertTitle>
                        {error}
                    </Alert>
                )}
            </Box>
        </Box>
    );
};
