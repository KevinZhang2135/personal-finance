import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = (props) => {
    const title = {
        translateY: ["35vh", "0vh"],
        scale: [1, 0.75],
        easing: "easeInCubic",
        children: (
            <Box sx={{ px: "10vw" }}>
                <Typography
                    textAlign="center"
                    color="white"
                    fontSize="10vmin"
                    fontWeight={500}
                >
                    Personal finance done easy.
                </Typography>
            </Box>
        ),
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/mountainRoad.png"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                color: "white",
                minHeight: "60vh",
                px: "10vw",
                py: "10vh",
            }}
        >
            <Typography
                gutterBottom
                sx={{
                    fontSize: { xs: "3rem", lg: "5rem" },
                    pt: "10vh",
                }}
            >
                Personal finance done easy.
            </Typography>

            <Typography variant="h3" gutterBottom>
                According to CNBC and Forbes, more than 60% of Americans live
                paycheck to paycheck in 2023.<sup>1-2</sup>
            </Typography>

            <Typography variant="h2" color="primary.light">
                Let's change that.
            </Typography>
        </Box>
    );
};

export default Banner;
