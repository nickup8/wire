import { styled, useTheme, Box, Toolbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layoutsComponents/DefaultLayout/Sidebar";
import { Header } from "../components/layoutsComponents/DefaultLayout/Header";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    background: "#F7F9FC",
    height: "100vh",
    padding: theme.spacing(5),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

export const DefaultLayout = () => {
    const theme = useTheme();
    // const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.drawer.open);
    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <Sidebar />
            <Main open={open} sx={{ px: 8 }}>
                <Toolbar />
                <Outlet />
            </Main>
        </Box>
    );
};
