import React from "react";
import {
    Button,
    Divider,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { Clear } from "@mui/icons-material";
import { calculateLoanEMI, currencyFormatter } from "../../App";
import Theme from "../../Theme";

const LoanForm = (props) => {
    const { loan, loans, setLoans } = props;

    // Styling
    const formItemWidth = { xs: 1, lg: 0.5 };
    const outputProps = {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const formDividerOrientation = useMediaQuery(Theme.breakpoints.down("lg"))
        ? "horizontal"
        : "vertical";

    // Handling input
    const handlePrincipalChange = (e) => {
        let principal = parseInt(e.target.value);
        (isNaN(principal) || principal < 0) && (principal = 0);

        const emi = calculateLoanEMI(principal, loan.apr, loan.termMonths);

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, principal: principal, emi: emi };

        setLoans(loansCopy);
    };

    const handleTermMonthsChange = (e) => {
        let termMonths = parseInt(e.target.value);
        (isNaN(termMonths) || termMonths < 0) && (termMonths = 0);

        const emi = calculateLoanEMI(loan.principal, loan.apr, termMonths);

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, termMonths: termMonths, emi: emi };

        setLoans(loansCopy);
    };

    const handleAprChange = (e) => {
        let apr = parseInt(e.target.value) / 100;
        (isNaN(apr) || apr < 0) && (apr = 0);

        const emi = calculateLoanEMI(loan.principal, apr, loan.termMonths);

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, apr: apr, emi: emi };

        setLoans(loansCopy);
    };

    return (
        <Paper elevation={0} sx={{ p: 4 }}>
            <Stack
                direction={{ xs: "column", lg: "row" }}
                justifyContent="space-evenly"
                alignItems="flex-start"
                divider={
                    <Divider orientation={formDividerOrientation} flexItem />
                }
                spacing={4}
            >
                <Stack width={formItemWidth} spacing={4}>
                    <FormControl fullWidth>
                        <InputLabel>Principal</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Principal"
                            value={loan.principal}
                            onChange={(e) => {
                                handlePrincipalChange(e);
                            }}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Months</InputLabel>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position="start">
                                    months
                                </InputAdornment>
                            }
                            label="Months"
                            value={loan.termMonths}
                            onChange={(e) => {
                                handleTermMonthsChange(e);
                            }}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>APR</InputLabel>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position="start">
                                    %
                                </InputAdornment>
                            }
                            value={loan.apr * 100}
                            label="APR"
                            onChange={(e) => {
                                handleAprChange(e);
                            }}
                        />
                    </FormControl>
                </Stack>

                <Stack
                    width={formItemWidth}
                    spacing={3}
                    divider={<Divider flexItem />}
                >
                    <Stack {...outputProps}>
                        <Typography variant="h4">Monthly Payment</Typography>

                        <Typography variant="h4" color="primary">
                            {currencyFormatter(loan.emi)}
                        </Typography>
                    </Stack>

                    <Stack {...outputProps}>
                        <Typography variant="h4">
                            Total Principal Paid
                        </Typography>

                        <Typography variant="h4" color="primary">
                            {currencyFormatter(loan.principal)}
                        </Typography>
                    </Stack>

                    <Stack {...outputProps}>
                        <Typography variant="h4">
                            Total Interest Paid
                        </Typography>

                        <Typography variant="h4" color="primary">
                            {currencyFormatter(
                                loan.emi * loan.termMonths - loan.principal
                            )}
                        </Typography>
                    </Stack>

                    <Stack {...outputProps}>
                        <Button
                            variant="contained"
                            startIcon={<Clear fontSize="large" />}
                            color="error"
                            size="large"
                            onClick={() => {
                                setLoans(loans.filter((e) => e !== loan));
                            }}
                        >
                            <Typography variant="p">REMOVE</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default LoanForm;
