import React from "react";
import { Box, Typography } from "@mui/material";

const CallToAction = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "5vh 10vw",
            }}
        >
            <Typography variant="h3" textAlign="center">
                According to CNBC and Forbes, more than 60% of Americans live
                paycheck to paycheck in 2023. <em>Let's change that.</em>
            </Typography>
        </Box>
    );
};

export default CallToAction;
