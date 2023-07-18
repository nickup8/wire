import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axiosClient";

import {
    Box,
    LinearProgress,
    Typography,
    Paper,
    Button,
    IconButton,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";

import { COLUMNS } from "./columnsSupplier";

export interface ISuppliers {
    id?: number | null;
    supplierCode: string;
    supplierName: string;
    createdAt: string;
}

export const Suppplier: React.FC = () => {
    const [suppliers, setSuppliers] = useState<ISuppliers[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        axiosClient.get("/v1/suppliers").then((data) => {
            setSuppliers(data.data.data);
            setLoading(false);
        });
    }, []);

    return (
        <Box>
            {loading ? (
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <LinearProgress color="error" />
                </Box>
            ) : (
                <div>
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
                            Поставщики
                        </Typography>
                        <Button
                            variant="contained"
                            endIcon={<AddCircleOutlineIcon />}
                            component={Link}
                            to="/supplier/new"
                            size="large"
                        >
                            Добавить поставщика
                        </Button>
                    </Box>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        {suppliers.length === 0 ? (
                            <Typography variant="h6" component="p">
                                Поставщиков нет
                            </Typography>
                        ) : (
                            <TableContainer>
                                <Table sx={{ width: "100%" }}>
                                    <TableHead>
                                        <TableRow>
                                            {COLUMNS.map((column, index) => {
                                                return (
                                                    <TableCell
                                                        key={`${column.Header}_${index}`}
                                                        sx={{
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {column.Header}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell
                                                sx={{
                                                    fontSize: "18px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Редактировать
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {suppliers.map((supplier) => {
                                            return (
                                                <TableRow
                                                    key={
                                                        supplier.supplierCode +
                                                        "_" +
                                                        supplier.supplierName
                                                    }
                                                >
                                                    <TableCell>
                                                        {supplier.supplierCode}
                                                    </TableCell>
                                                    <TableCell>
                                                        {supplier.supplierName}
                                                    </TableCell>
                                                    <TableCell>
                                                        {supplier.createdAt}
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton
                                                            component={Link}
                                                            to={`/supplier/${supplier.id}`}
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </Paper>
                </div>
            )}
        </Box>
    );
};
