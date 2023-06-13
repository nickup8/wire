import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
export const LoginLayout = () => {
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
                    <form noValidate>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            label="Логин"
                        />
                        <TextField
                            type="password"
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            label="Пароль"
                        />
                        <Button variant="contained" fullWidth>
                            Войти
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
};
