import React from "react";

import {
    Box,
    Paper,
    Typography,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
} from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

export const Invoices = () => {
    return (
        <>
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
                    Накладные
                </Typography>
                <Button
                    variant="contained"
                    endIcon={<FileUploadIcon />}
                    component={Link}
                    to="/invoices/new"
                    size="large"
                >
                    Загрузить накладную
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
                                    № накладной
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Поставщик
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Дата загрузки
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Загрузил
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Просмотреть
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>123456</TableCell>
                                <TableCell>
                                    Самарская кабельная компания
                                </TableCell>
                                <TableCell>123</TableCell>
                                <TableCell>Сироткин Николай</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};
