import React from "react";
import {
    AppBar,
    Button,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
} from "@mui/material";

import { anchorLinks } from "../../App";

const DesktopMenu = (props) => {
    // Hide menu upon scroll
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar
                elevation={0}
                sx={{ bgcolor: "transparent", width: "fit-content", left: 0 }}
            >
                <Toolbar className="menu-buttons">
                    {anchorLinks.map((anchor) => (
                        <Button
                            className="menu-btn"
                            key={`#${anchor.id}-anchor`}
                            href={`#${anchor.id}`}
                            variant="text"
                            size="large"
                            sx={{
                                bgcolor: "rgba(0, 0, 0, 0.6)",
                                "&:hover": {
                                    bgcolor: "rgba(0, 0, 0, 0.8)",
                                },
                                mr: 4,
                                px: 2
                            }}
                        >
                            <Typography variant="h5" color="whitesmoke">
                                {anchor.name}
                            </Typography>
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default DesktopMenu;
