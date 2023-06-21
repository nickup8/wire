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
    Snackbar,
    AlertProps,
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { useForm, Controller } from "react-hook-form";
import type { NestedValue } from "react-hook-form";

interface IUserForm {
    name: string;
    password: string;
    role: string;
}

export const UsersFormNew = () => {
    const form = useForm<IUserForm>();
    const { register, formState, handleSubmit, getValues, control } = form;
    const { isValid } = formState;

    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = () => {
        setSending(true);
        axiosClient
            .post("/suppliers", {})
            .then((response) => {
                setSending(false);
                setOpen(true);
                return navigate(-1);
            })
            .catch((error) => {
                setSending(false);
            });
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <>
            <Box>
                <Typography
                    variant="h4"
                    component={"h1"}
                    fontStyle={"bold"}
                    sx={{ px: 2, mb: 2 }}
                >
                    Добавить пользователя
                </Typography>
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2} direction="row" mb={2}>
                            <TextField
                                type="text"
                                label="Имя пользователя"
                                variant="outlined"
                                fullWidth
                                size="small"
                                {...register("name", {
                                    required: "Имя пользователя обязательно",
                                })}
                            />
                            <FormControl fullWidth size="small">
                                <InputLabel htmlFor="password">
                                    Пароль
                                </InputLabel>
                                <OutlinedInput
                                    {...register("password", {
                                        required: "Не заполнен",
                                        min: 6,
                                    })}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Controller
                                render={({ field }) => (
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="role">Роль</InputLabel>
                                        <Select
                                            labelId="role"
                                            label="Роль"
                                            id="role"
                                            {...field}
                                            {...register("role", {
                                                required:
                                                    "Определите роль пользователя",
                                            })}
                                        >
                                            <MenuItem value={10}>1</MenuItem>
                                            <MenuItem value={20}>2</MenuItem>
                                            <MenuItem value={30}>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                )}
                                name="role"
                                control={control}
                            />

                            {/* <FormControl fullWidth size="small">
                                <InputLabel id="role">Роль</InputLabel>
                                <Select
                                    labelId="role"
                                    label="Роль"
                                    id="role"
                                    value={role}
                                    {...register("role", {
                                        required:
                                            "Определите роль пользователя",
                                    })}
                                >
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>2</MenuItem>
                                    <MenuItem value={30}>3</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Stack>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ mr: 2 }}
                            disabled={!isValid || sending}
                        >
                            Добавить пользователя
                        </Button>
                        <Button
                            component={Link}
                            to="/users"
                            variant="outlined"
                            size="large"
                        >
                            Отмена
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    );
};
