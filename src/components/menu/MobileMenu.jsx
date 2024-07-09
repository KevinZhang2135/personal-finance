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
    const { handleSummaryOpen } = props;

    // Hide menu upon scroll
    const scrollTrigger = useScrollTrigger();

    // Pop over menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <Slide appear={false} direction="down" in={!scrollTrigger}>
            <AppBar elevation={0} sx={{ bgcolor: "black.dark" }}>
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
                        onClick={handleMenuClick}
                    >
                        <Typography variant="h5" color="white">
                            Menu
                        </Typography>
                    </Button>

                    <Menu
                        className="mobile-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        sx={{
                            "& .MuiMenu-paper": {
                                color: "white",
                                bgcolor: "black.dark",
                            },
                        }}
                    >
                        {anchorLinks.map((anchor) => (
                            <MenuItem
                                key={`#${anchor.id}-menu-item`}
                                component={Link}
                                href={`#${anchor.id}`}
                                sx={{ "&:hover": { bgcolor: "inherit" } }}
                                onClick={handleMenuClose}
                            >
                                {anchor.name}
                            </MenuItem>
                        ))}

                        <MenuItem
                            component={Link}
                            sx={{ "&:hover": { bgcolor: "inherit" } }}
                            onClick={handleSummaryOpen}
                            
                        >
                            Summary
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default MobileMenu;
