import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks";
import axiosClient from "../../axiosClient";

import {
    Box,
    LinearProgress,
    Typography,
    Paper,
    Button,
    IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";

export interface ISuppliers {
    id?: number | null;
    supplierCode: string;
    supplierName: string;
}

export const Suppplier: React.FC = () => {
    const [suppliers, setSuppliers] = useState<ISuppliers[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        axiosClient.get("/suppliers").then((data) => {
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
                        <table>
                            <thead>
                                <tr>
                                    <th>Код поставщика</th>
                                    <th>Наименование поставщика</th>
                                    <th>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((obj, index) => {
                                    return (
                                        <tr key={index + `_${obj.id}`}>
                                            <td>{obj.supplierCode}</td>
                                            <td>{obj.supplierName}</td>
                                            <td>
                                                <IconButton
                                                    component={Link}
                                                    to={`/supplier/${obj.id}`}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Paper>
                </div>
            )}
        </Box>
    );
};
