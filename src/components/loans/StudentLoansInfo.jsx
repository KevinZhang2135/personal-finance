import React from "react";
import {
    Box,
    Button,
    Divider,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { AddCircle, Clear } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

import Theme from "../../Theme";

const StudentLoansInfo = (props) => {
    const { studentLoans, setStudentLoans } = props;
    const addLoanButtons = (
        <Stack direction="row" spacing={4} justifyContent="center">
            <Button
                variant="contained"
                size="large"
                disableElevation
                disabled={studentLoans.length >= 4}
                startIcon={<AddCircle fontSize="large" />}
                sx={{ textTransform: "capitalize", width: 200, mt: 4 }}
                onClick={() => {
                    const newLoan = {
                        id: uuid(),
                        principal: 0,
                        termMonths: 60,
                        apr: 0.06,
                        emi: 0,
                    };

                    setStudentLoans([...studentLoans, newLoan]);
                }}
            >
                <Typography variant="p">Add Loan</Typography>
            </Button>

            <Button
                variant="contained"
                color="error"
                size="large"
                disableElevation
                disabled={studentLoans.length === 0}
                startIcon={<Clear fontSize="large" />}
                sx={{ textTransform: "capitalize", width: 200, mt: 4 }}
                onClick={() => {
                    setStudentLoans([]);
                }}
            >
                <Typography variant="p">Remove All</Typography>
            </Button>
        </Stack>
    );

    return (
        <Box
            id="loan-info"
            className="content-container"
            pt="5vh"
            pb={studentLoans.length > 0 ? 4 : "5vh"}
        >
            <Typography variant="h1" gutterBottom>
                Student Loans
            </Typography>

            <Stack
                direction={{ xs: "column", lg: "row" }}
                justifyContent="space-between"
                divider={
                    <Divider
                        orientation={
                            useMediaQuery(Theme.breakpoints.down("lg"))
                                ? "horizontal"
                                : "vertical"
                        }
                        flexItem
                    />
                }
                spacing={4}
                mb={4}
            >
                <Box width={{ xs: 1, lg: 0.5 }}>
                    <Typography variant="h3" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="p">
                        Post-secondary education in the US is expensive.
                        According to CollegeBoard, the average published annual
                        tuition and fees for full-time students attending public
                        four-year in-state universities is $11,260 while the
                        cost of tuition for public four-year out-of-state
                        universities is more than 2.5 times greater at $29,150
                        per year.<sup>6</sup> Hence, many pursuing college
                        education often borrow student loans to finance the
                        exorbitant cost.
                    </Typography>
                </Box>

                <Box width={{ xs: 1, lg: 0.5 }}>
                    <Typography variant="h3" gutterBottom>
                        Student Loan Types
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom>
                        Direct subsidized loans are federal student loans that
                        do not accumulate interest during enrollment or the
                        six-month grace period after graduation. They are
                        typically rewarded to those who demonstrate financial
                        need.
                        <sup>7</sup>
                    </Typography>

                    <Typography variant="p" display="block" gutterBottom>
                        Direct unsubsidized loans are federal student loans that
                        immediately begins accruing interest after receiving the
                        money.
                        <sup>7</sup>
                    </Typography>

                    <Typography variant="p" display="block">
                        Private loans are student loans that immediately begins
                        accruing interest after receiving the money.
                        <sup>8</sup>
                    </Typography>
                </Box>
            </Stack>

            {addLoanButtons}
        </Box>
    );
};

export default StudentLoansInfo;
