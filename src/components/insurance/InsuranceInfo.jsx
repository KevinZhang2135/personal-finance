import React from "react";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const InsuranceInfo = () => {
    return (
        <Box
            id="insurance-info"
            sx={{ bgcolor: blue[50], px: "10vw", py: "5vh" }}
        >
            <Typography variant="h1" textAlign="center" mb={4}>
                Insurance
            </Typography>

            <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Facilisi morbi tempus iaculis urna id volutpat lacus. Pharetra
                et ultrices neque ornare aenean euismod elementum nisi quis.
                Suspendisse in est ante in nibh mauris cursus mattis molestie.
                <br />
                <br />
                Eget aliquet nibh praesent tristique magna sit amet. Congue eu
                consequat ac felis donec et odio. Diam vulputate ut pharetra sit
                amet aliquam id diam. Et magnis dis parturient montes nascetur.
                Posuere ac ut consequat semper viverra. Pulvinar neque laoreet
                suspendisse interdum consectetur libero id. Justo donec enim
                diam vulputate ut pharetra sit amet.
                <br />
                <br />
                Id consectetur purus ut faucibus pulvinar elementum. Diam sit
                amet nisl suscipit adipiscing bibendum est. Eget nunc lobortis
                mattis aliquam faucibus purus in massa. Iaculis at erat
                pellentesque adipiscing commodo. Amet purus gravida quis
                blandit. Eget nulla facilisi etiam dignissim diam quis enim.
                Eget mauris pharetra et ultrices neque ornare aenean. Eu sem
                integer vitae justo.
            </Typography>
        </Box>
    );
};

export default InsuranceInfo;
