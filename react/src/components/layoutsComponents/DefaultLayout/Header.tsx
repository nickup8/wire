import { useState } from "react";
import {
    useTheme,
    AppBar,
    CssBaseline,
    Box,
    Avatar,
    Toolbar,
    ImageListItem,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./../../../logo.svg";
import { useAppDispatch } from "../../../hooks";
import { openDrawer } from "../../../store/drawerSlice";

export const Header: React.FC = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: theme.zIndex.drawer + 1,
                    boxShadow: "none",
                    backgroundColor: "#fff",
                    color: "#212121",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => dispatch(openDrawer())}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img src={logo} alt="Yazaki Russia logo" width={140} />
                </Toolbar>
                <Divider />
            </AppBar>
        </>
    );
};
