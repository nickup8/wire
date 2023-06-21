import { useState } from "react";
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

export const Users = () => {
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
                                    Действия
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};
