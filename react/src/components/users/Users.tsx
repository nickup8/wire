import { useState, useEffect } from "react";
import {
    Box,
    Paper,
    Button,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axiosClient from "../../axiosClient";

interface IUser {
    id: number;
    name: string;
    rule: string;
    created_at: number;
}

export const Users = () => {
    const [users, setUser] = useState<IUser[]>([]);

    useEffect(() => {
        axiosClient.get("/v1/users").then((response) => {
            setUser(response.data);
        });
    }, []);

    return (
        <Box>
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
                    Пользователи
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to="/users/new"
                    size="large"
                    endIcon={<AddCircleOutlineIcon />}
                >
                    Добавить пользователя
                </Button>
            </Box>
            <Paper variant="outlined" sx={{ p: 2 }}>
                <TableContainer>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Имя пользователя
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Роль
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Дата создания
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Действия
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => {
                                return (
                                    <TableRow key={`${index}_${user.name}`}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.rule}</TableCell>
                                        <TableCell>{user.created_at}</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};
