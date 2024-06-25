import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = (props) => {
    return (
        <Box
            className="content-container"
            bgcolor="black.dark"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            py="5vh"
        >
            <Typography variant="p" color="white" align="center">
                For the sake of transparency and open-source code, read the
                source code at{" "}
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/KevinZhang2135/Personal-Finance"
                    color="inherit"
                    sx={{ wordWrap: "break-word" }}
                >
                    https://www.github.com/KevinZhang2135/Personal-Finance
                </Link>
                .
            </Typography>
        </Box>
    );
};

export default Footer;
