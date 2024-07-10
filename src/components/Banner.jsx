import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = (props) => {
    return (
        <Box
            className="content-container"
            sx={{
                minHeight: "60vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/mountainRoad.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                color: "white",
                py: "10vh",
            }}
        >
            <Typography
                gutterBottom
                sx={{
                    pt: "10vh",
                    fontSize: { xs: "3rem", lg: "5rem" },
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
