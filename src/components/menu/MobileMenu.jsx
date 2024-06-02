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

const MobileMenu = (props) => {
    const anchorLinks = [
        { name: "Taxes", id: "tax-info" },
        { name: "Loans", id: "loan-info" },
        { name: "Insurance", id: "insurance-info" },
    ];

    // Styling
    const black20a = "rgba(0, 0, 0, 0.2)";
    const black60a = "rgba(0, 0, 0, 0.6)";
    const black80a = "rgba(0, 0, 0, 0.6)";

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
            <AppBar elevation={0} sx={{ bgcolor: "transparent" }}>
                <Toolbar className="menu-buttons">
                    <Button
                        className="menu-btn"
                        variant="text"
                        size="large"
                        startIcon={
                            <MenuIcon
                                fontSize="large"
                                sx={{ color: "whitesmoke" }}
                            />
                        }
                        sx={{
                            bgcolor: black60a,
                            "&:hover": { bgcolor: black80a },
                            mr: 4,
                        }}
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
                                backgroundColor: black60a,
                            },
                        }}
                    >
                        {anchorLinks.map((anchor) => (
                            <MenuItem
                                key={`#${anchor.id}-menu-item`}
                                href={`#${anchor.id}`}
                                sx={{ "&:hover": { bgcolor: black20a } }}
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
