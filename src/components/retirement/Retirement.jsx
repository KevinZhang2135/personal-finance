import React from "react";
import { Box, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";

import RetirementInfo from "./RetirementInfo";
import RetirementForm from "./RetirementForm";

const Retirement = (props) => {
    const { retirement, setRetirement, salary } = props;

    return (
        <Box className="content-container" bgcolor={blue[50]} py="5vh">
            <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
                <RetirementInfo />
                <RetirementForm
                    retirement={retirement}
                    setRetirement={setRetirement}
                    salary={salary}
                />
            </Stack>
        </Box>
    );
};

export default Retirement;
