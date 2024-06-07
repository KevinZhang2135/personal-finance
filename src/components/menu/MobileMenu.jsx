import React, { useState } from "react";
import {
    AppBar,
    Button,
    Link,
    Menu,
    MenuItem,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { anchorLinks } from "../../App";

const MobileMenu = (props) => {
    // Hide menu upon scroll
    const trigger = useScrollTrigger();

    // Pop over menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar elevation={0} sx={{ bgcolor: "#07020d" }}>
                <Toolbar className="menu-buttons">
                    <Button
                        className="menu-btn"
                        variant="text"
                        size="large"
                        startIcon={
                            <MenuIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        }
                        sx={{ bgcolor: "inherit", mr: 4 }}
                        onClick={handleClick}
                    >
                        <Typography variant="h5" color="whitesmoke">
                            Menu
                        </Typography>
                    </Button>

                    <Menu
                        className="mobile-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{
                            "& .MuiMenu-paper": {
                                color: "whitesmoke",
                                bgcolor: "#07020d",
                            },
                        }}
                    >
                        {anchorLinks.map((anchor) => (
                            <MenuItem
                                key={`#${anchor.id}-menu-item`}
                                href={`#${anchor.id}`}
                                sx={{ "&:hover": { bgcolor: "inherit" } }}
                                onClick={handleClose}
                                component={Link}
                            >
                                {anchor.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default MobileMenu;
