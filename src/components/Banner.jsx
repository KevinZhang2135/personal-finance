import React from "react";
import { Box, Typography } from "@mui/material";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const Banner = (props) => {
    return (
        <ParallaxBanner className="main-banner">
            <Box
                className="overlay"
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                bgcolor="rgba(0, 0, 0, 0.4)"
            >
                <Typography
                    textAlign="center"
                    color="white"
                    fontSize="10vmin"
                    fontWeight={500}
                >
                    Personal finance done easy.
                </Typography>
            </Box>
        </ParallaxBanner>
    );
};
export default Banner;
