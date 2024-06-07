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
            <AppBar elevation={0} sx={{ bgcolor: "#07020d" }}>
                <Toolbar className="menu-buttons">
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        Personal Finance
                    </Typography>
                    {anchorLinks.map((anchor) => (
                        <Button
                            className="menu-btn"
                            key={`#${anchor.id}-anchor`}
                            href={`#${anchor.id}`}
                            variant="text"
                            size="large"
                            sx={{
                                bgcolor: "inherit",
                                "&:hover": {bgcolor: "#38343d"},
                                textTransform: "capitalize",
                                ml: 4,
                            }}
                        >
                            <Typography variant="h5" color="white">
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
