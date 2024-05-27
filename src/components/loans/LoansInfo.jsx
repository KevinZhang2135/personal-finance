import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { brown } from "@mui/material/colors";

import Theme from "../../Theme";

const LoansInfo = (props) => {
    const infoItemWidth = { xs: 1, md: 0.5 };

    return (
        <Stack className="loan-info" direction={{ xs: "column", md: "row" }}>
            <Box
                className="loan-info-banner parallax"
                display="flex"
                width={infoItemWidth}
            />

            <Stack
                direction="column"
                alignItems="stretch"
                justifyContent="space-between"
                useFlexGap
                width={infoItemWidth}
                p={4}
            >
                <Typography variant="h1" fontWeight={500}>
                    Loans
                </Typography>

                <Typography variant="p">
                    Loans are frequently borrowed to help finance for large
                    expenses which cannot be paid out of pocket by paying a
                    portion of the cost over time. While the monthly payment
                    rate may seem appealling, loans accrue interest that is
                    dramatically amplified by the yearly interest rate and loan
                    duration.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default LoansInfo;
