import React from "react";
import { Box, Divider, Paper, Stack, useMediaQuery } from "@mui/material";
import { blue } from "@mui/material/colors";
import RetirementInfo from "./RetirementInfo";
import RetirementForm from "./RetirementForm";
import Theme from "../../Theme";

const Retirement = (props) => {
    const { retirement, setRetirement } = props;

    const formDividerOrientation = useMediaQuery(Theme.breakpoints.down("lg"))
        ? "horizontal"
        : "vertical";

    return (
        <Box sx={{ bgcolor: blue[50], px: "10vw", py: "5vh" }}>
            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={4}
            >
                <RetirementInfo />
                <RetirementForm
                    retirement={retirement}
                    setRetirement={setRetirement}
                />
            </Stack>
        </Box>
    );
};

export default Retirement;
