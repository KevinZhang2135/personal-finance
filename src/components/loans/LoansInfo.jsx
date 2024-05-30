import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AddCircle, Clear } from "@mui/icons-material";
import { ParallaxBanner } from "react-scroll-parallax";

const LoansInfo = (props) => {
    const { loans, setLoans } = props;

    // Parallax layers
    const background = {
        image: process.env.PUBLIC_URL + "/autumnForest.png",
        translateY: [-20, 0],
    };

    const backgroundOverlay = {
        children: (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: "rgba(0, 0, 0, 0.2)",
                    height: 1,
                }}
            />
        ),
    };

    return (
        <Stack id="loan-info" direction={{ xs: "column", md: "row" }}>
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
                    spacing={4}
                    sx={{ pl: { xs: "10vw", md: 4 }, pr: "10vw", py: 4 }}
                >
                    <Box>
                        <Typography variant="h1" fontWeight={500} gutterBottom>
                            Loans
                        </Typography>

                        <Typography variant="p">
                            Loans are frequently borrowed to help finance for
                            large expenses which cannot be paid out of pocket.
                            Whether financing a car, mortgage, post-  secondary
                            education, or other personal reasons, loans required
                            that portion of its total cost over time, typically
                            on monthly intervals.
                        </Typography>
                        <br />
                        <br />

                        <Typography variant="p">
                            While the monthly payment rate may seem appealling,
                            loans accrue interest that is dramatically amplified
                            by the yearly interest rate and loan duration.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={4}>
                        <Button
                            variant="contained"
                            startIcon={<AddCircle fontSize="large" />}
                            size="large"
                            sx={{ mt: 4 }}
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

                        {loans.length > 0 && (
                            <Button
                                variant="contained"
                                startIcon={<Clear fontSize="large" />}
                                color="error"
                                size="large"
                                sx={{ mt: 4 }}
                                onClick={(e) => {
                                    setLoans([]);
                                }}
                            >
                                <Typography variant="p">REMOVE ALL</Typography>
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
};

export default LoansInfo;
