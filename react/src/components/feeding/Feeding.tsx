import {
    Box,
    Typography,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Stack,
    Button,
} from "@mui/material";

import { useForm } from "react-hook-form";

const data = [
    {
        zona: "Зона 1",
        storage: "A-010-C",
        hu: "380705448",
        material: "BR203990",
        description: "LT Single Wire PRFLRYB 0.75 BR",
        batch: "20052023",
        qnt: "12000",
        supplierCode: "YZKRU90V",
        supplier: "Russia Distribution Center",
        date: "12/05/2023",
    },
    {
        zona: "Зона 1",
        storage: "A-010-C",
        hu: "371352128",
        material: "BR203950",
        description: "LT Single Wire PRFLRYB 0.75 BR",
        batch: "20052023",
        qnt: "12000",
        supplierCode: "YZKRU90V",
        supplier: "Russia Distribution Center",
        date: "12/05/2023",
    },
    {
        zona: "Зона 1",
        storage: "A-010-C",
        hu: "338251659",
        material: "BR206730",
        description: "LT Single Wire PRFLRYB 0.75 BR",
        batch: "20052023",
        qnt: "10000",
        supplierCode: "YZKRU90V",
        supplier: "Russia Distribution Center",
        date: "12/05/2023",
    },
    {
        zona: "Зона 1",
        storage: "A-010-C",
        hu: "371805866",
        material: "BR204040",
        description: "LT Single Wire PRFLRYB 0.75 BR",
        batch: "20052023",
        qnt: "8000",
        supplierCode: "YZKRU90V",
        supplier: "Russia Distribution Center",
        date: "12/05/2023",
    },
];

export const Feeding = () => {
    const form = useForm();
    const { register } = form;

    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Typography
                    variant="h4"
                    component={"h1"}
                    fontStyle={"bold"}
                    sx={{ px: 2 }}
                >
                    Фидинг
                </Typography>
            </Box>
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                <form noValidate>
                    <Stack
                        component="div"
                        spacing={2}
                        direction="row"
                        sx={{ mb: 2 }}
                    >
                        <TextField
                            variant="outlined"
                            label="Зона"
                            size="small"
                            fullWidth
                            {...register("zona")}
                        />
                        <TextField
                            variant="outlined"
                            label="Полка"
                            size="small"
                            fullWidth
                            {...register("storage")}
                        />
                        <TextField
                            variant="outlined"
                            label="Код провода"
                            size="small"
                            fullWidth
                            {...register("material")}
                        />
                        <TextField
                            variant="outlined"
                            label="HU"
                            size="small"
                            fullWidth
                            {...register("hu")}
                        />
                        <TextField
                            variant="outlined"
                            label="Партия"
                            size="small"
                            fullWidth
                            {...register("batch")}
                        />
                        <TextField
                            variant="outlined"
                            label="Поставщик"
                            size="small"
                            fullWidth
                            {...register("supplier")}
                        />
                        <TextField
                            variant="outlined"
                            label="Дата создания"
                            size="small"
                            fullWidth
                            {...register("date")}
                        />
                    </Stack>
                    <Button variant="contained">Поиск</Button>
                </form>
            </Paper>
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
                                    Зона
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Полка
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Код провода
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    HU
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Описание
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Партия
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Количество
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Код поставщика
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
                                    Дата создания
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => {
                                return (
                                    <TableRow>
                                        <TableCell>{row.zona}</TableCell>
                                        <TableCell>{row.storage}</TableCell>
                                        <TableCell>{row.material}</TableCell>
                                        <TableCell>{row.hu}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.batch}</TableCell>
                                        <TableCell>{row.qnt}</TableCell>
                                        <TableCell>
                                            {row.supplierCode}
                                        </TableCell>
                                        <TableCell>{row.supplier}</TableCell>
                                        <TableCell>{row.date}</TableCell>
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
