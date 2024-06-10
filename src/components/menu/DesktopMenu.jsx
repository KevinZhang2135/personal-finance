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
        color: "white",
        bgcolor: "inherit",
        "&:hover": { bgcolor: "black.main" },
        textTransform: "capitalize",
        ml: 4,
    };

    return (
        <Slide appear={false} direction="down" in={!scrollTrigger}>
            <AppBar elevation={0} sx={{ bgcolor: "black.dark" }}>
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
                        sx={menuButtonSx}
                        onClick={handleSummaryOpen}
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
