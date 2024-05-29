import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const MobileMenu = (props) => {
    const anchorLinks = [
        { name: "Taxes", id: "tax-info" },
        { name: "Loans", id: "loan-info" },
        { name: "Insurance", id: "insurance-info" },
    ];

    return (
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "transparent" }}>
            <Toolbar>
                <Button
                    variant="text"
                    size="large"
                    startIcon={<Menu color="white" fontSize="large" />}
                    sx={{
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
                        ".MuiTouchRipple-child": { backgroundColor: "black" },
                        mr: 4,
                    }}
                >
                    <Typography variant="h5" color="whitesmoke">
                        MENU
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default MobileMenu;
