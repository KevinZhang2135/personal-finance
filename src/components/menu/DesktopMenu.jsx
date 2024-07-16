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
    const { handleSummaryOpen } = props;

    // Hide menu upon scroll
    const scrollTrigger = useScrollTrigger();
    const menuButtonSx = {
        height: "100% !important",
        bgcolor: "inherit",
        "&:hover": { bgcolor: "black.main" },
        borderRadius: 0,
        color: "white",
        textTransform: "capitalize",
        px: 2,
    };

    return (
        <Slide appear={false} direction="down" in={!scrollTrigger}>
            <AppBar
                className="content-container"
                elevation={0}
                sx={{ bgcolor: "black.dark" }}
            >
                <Toolbar sx={{ p: "0 !important" }}>
                    <Typography variant="h5" flexGrow={1}>
                        Personal Finance
                    </Typography>

                    {anchorLinks.map((anchor) => (
                        <Button
                            className="menu-btn"
                            key={`#${anchor.id}-anchor`}
                            href={`#${anchor.id}`}
                            variant="text"
                            size="large"
                            sx={menuButtonSx}
                        >
                            <Typography variant="h5" color="inherit">
                                {anchor.name}
                            </Typography>
                        </Button>
                    ))}

                    <Button
                        className="menu-btn"
                        variant="text"
                        size="large"
                        onClick={handleSummaryOpen}
                        sx={menuButtonSx}
                    >
                        <Typography variant="h5" color="inherit">
                            Summary
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default DesktopMenu;
