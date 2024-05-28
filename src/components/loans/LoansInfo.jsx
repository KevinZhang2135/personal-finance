import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { ParallaxBanner } from "react-scroll-parallax";

const LoansInfo = (props) => {
    const { loans, setLoans } = props;

    const background = {
        image: process.env.PUBLIC_URL + "/autumnForest.png",
        translateY: [-20, 0],
    };

    const backgroundOverlay = {
        children: (
            <Box
                className="loan-info-banner"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: "rgba(0, 0, 0, 0.2)",
                }}
            />
        ),
    };

    return (
        <Stack className="loan-info" direction={{ xs: "column", md: "row" }}>
            <Box
                className="loan-info-banner"
                display="flex"
                width={{ xs: 1, md: 0.5 }}
            >
                <ParallaxBanner layers={[background, backgroundOverlay]} />
            </Box>

            <Box display="flex" width={{ xs: 1, md: 0.5 }}>
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    useFlexGap
                    sx={{ pl: { xs: "10vw", md: 4 }, pr: "10vw", py: 4 }}
                >
                    <Box>
                        <Typography variant="h1" fontWeight={500} gutterBottom>
                            Loans
                        </Typography>

                        <Typography variant="p">
                            Loans are frequently borrowed to help finance for
                            large expenses which cannot be paid out of pocket by
                            paying a portion of the cost over time. While the
                            monthly payment rate may seem appealling, loans
                            accrue interest that is dramatically amplified by
                            the yearly interest rate and loan duration.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        startIcon={<AddCircle fontSize="large" />}
                        size="large"
                        sx={{ width: 0.5, mt: 4 }}
                        onClick={(e) => {
                            const newLoan = {
                                principal: 0,
                                termMonths: 60,
                                apr: 0.06,
                                emi: 0,
                            };

                            setLoans([...loans, newLoan]);
                        }}
                    >
                        <Typography variant="p">ADD LOAN</Typography>
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
};

export default LoansInfo;
