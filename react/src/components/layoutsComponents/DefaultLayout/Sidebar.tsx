import {
    Drawer,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@mui/material";

import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import AppsIcon from "@mui/icons-material/Apps";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";

import { useAppSelector } from "../../../hooks";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const drawerWidth = 240;

export const Sidebar = () => {
    const [openWarehouse, setOpenWarehouse] = useState(false);
    const [openFeeding, setOpenFeeding] = useState(false);
    const [openSetting, setOpenSetting] = useState(false);
    const open = useAppSelector((state) => state.drawer.open);
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <Toolbar />
            <List>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Панель" />
                </ListItemButton>
                <ListItemButton
                    onClick={() => setOpenWarehouse(!openWarehouse)}
                >
                    <ListItemIcon>
                        <WarehouseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Склад" />
                    {openWarehouse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={openWarehouse} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AppsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Места хранения" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <SystemUpdateAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Зона приемки" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <CancelIcon />
                            </ListItemIcon>
                            <ListItemText primary="Изолятор брака" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={() => setOpenFeeding(!openFeeding)}>
                    <ListItemIcon>
                        <Grid4x4Icon />
                    </ListItemIcon>
                    <ListItemText primary="Фидинг" />
                    {openFeeding ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={openFeeding} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AppsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Места хранения" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <SystemUpdateAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Зона приемки" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={() => setOpenSetting(!openSetting)}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Настройки" />
                    {openSetting ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={openSetting} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AppsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Пользователи" />
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="/supplier"
                        >
                            <ListItemIcon>
                                <SystemUpdateAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Поставщики" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};