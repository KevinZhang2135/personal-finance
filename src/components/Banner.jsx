import React from "react";
import { Box, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

const Banner = (props) => {
    // Parallax layers
    const background = {
        image: process.env.PUBLIC_URL + "/mountainRoad.png",
        translateY: [0, 30],
    };

    const backgroundOverlay = {
        children: (
            <Box
                className="main-banner"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: "rgba(0, 0, 0, 0.2)",
                }}
            />
        ),
    };

    const title = {
        translateY: [35, 0],
        scale: [1, 0.75],
        easing: "easeInCubic",
        children: (
            <Box sx={{ px: "10vw" }}>
                <Typography
                    textAlign="center"
                    color="whitesmoke"
                    fontSize="10vmin"
                    fontWeight={500}
                >
                    Personal finance done easy.
                </Typography>
            </Box>
        ),
    };

    return (
        <ParallaxBanner
            className="main-banner"
            layers={[background, backgroundOverlay, title]}
        />
    );
};

export default Banner;
