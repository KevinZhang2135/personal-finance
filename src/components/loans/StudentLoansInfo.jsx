import React, { Fragment } from "react";
import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import { AddCircle, Clear } from "@mui/icons-material";
import { ParallaxBanner } from "react-scroll-parallax";
import { v4 as uuid } from "uuid";

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

    const studentLoanTypeList = (
        <List dense>
            <ListItem>
                <ListItemText
                    primary={
                        <Fragment>
                            <Typography variant="h6" display="inline">
                                Direct Subsidized Loans{" "}
                            </Typography>

                            <Typography variant="p" display="inline">
                                are federal student loans that do not accumulate
                                interest during enrollment or the six-month
                                grace period after graduation. They are
                                typically rewarded to those who demonstrate
                                financial need.<sup>7</sup>
                            </Typography>
                        </Fragment>
                    }
                />
            </ListItem>

            <ListItem>
                <ListItemText
                    primary={
                        <Fragment>
                            <Typography variant="h6" display="inline">
                                Direct Unsubsidized Loans{" "}
                            </Typography>

                            <Typography variant="p" display="inline">
                                are federal student loans that immediately
                                begins accruing interest after receiving the
                                money.<sup>7</sup>
                            </Typography>
                        </Fragment>
                    }
                />
            </ListItem>

            <ListItem>
                <ListItemText
                    primary={
                        <Fragment>
                            <Typography variant="h6" display="inline">
                                Private Loans{" "}
                            </Typography>

                            <Typography variant="p" display="inline">
                                are student loans that immediately begins
                                accruing interest after receiving the money.
                                <sup>8</sup>
                            </Typography>
                        </Fragment>
                    }
                />
            </ListItem>
        </List>
    );

    const addLoanButtons = (
        <Stack direction="row" spacing={4}>
            <Button
                variant="contained"
                startIcon={<AddCircle fontSize="large" />}
                size="large"
                sx={{ textTransform: "capitalize", mt: 4 }}
                disabled={loans.length >= 4}
                onClick={() => {
                    const newLoan = {
                        id: uuid(),
                        principal: 0,
                        termMonths: 60,
                        apr: 0.06,
                        emi: 0,
                    };

                    setLoans([...loans, newLoan]);
                }}
            >
                <Typography variant="p">Add Loan</Typography>
            </Button>

            <Button
                variant="contained"
                startIcon={<Clear fontSize="large" />}
                color="error"
                size="large"
                sx={{ textTransform: "capitalize", mt: 4 }}
                disabled={loans.length === 0}
                onClick={() => {
                    setLoans([]);
                }}
            >
                <Typography variant="p">Remove All</Typography>
            </Button>
        </Stack>
    );

    return (
        <Stack id="loan-info" direction={{ xs: "column", lg: "row" }}>
            <Box
                className="loan-info-banner"
                display="flex"
                width={{ xs: 1, lg: 0.5 }}
            >
                <ParallaxBanner layers={[background, backgroundOverlay]} />
            </Box>

            <Box display="flex" width={{ xs: 1, lg: 0.5 }}>
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    useFlexGap
                    spacing={4}
                    sx={{ pl: { xs: "10vw", md: 4 }, pr: "10vw", py: 4 }}
                >
                    <Box>
                        <Typography variant="h1" fontWeight={500} gutterBottom>
                            Student Loans
                        </Typography>

                        <Typography variant="p">
                            Post-secondary education in the US is expensive.
                            According to CollegeBoard, the average published
                            annual tuition and fees for full-time students
                            attending public four-year in-state universities is
                            $11,260 while the cost of tuition for public
                            four-year out-of-state universities is more than 2.5
                            times greater at $29,150 per year.<sup>6</sup>
                        </Typography>

                        <Divider sx={{ my: 3 }} />
                        <Typography variant="p">
                            Hence, many pursuing college education often borrow
                            student loans to finance the exorbitant cost. Before
                            applying for such loans, consider the type of loan:
                        </Typography>

                        {studentLoanTypeList}
                        {addLoanButtons}
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default LoansInfo;
