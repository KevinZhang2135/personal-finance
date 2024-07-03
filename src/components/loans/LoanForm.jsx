import React, { useState } from "react";
import {
    Button,
    Divider,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { Clear } from "@mui/icons-material";
import { calculateLoanEMI, currencyFormatter, positiveClamp } from "../../App";
import Theme from "../../Theme";

const LoanForm = (props) => {
    const { loan, setLoan, loans, setLoans, single } = props;
    const [aprFormValue, setAprFormValue] = useState(loan.apr * 100);
    const [aprInvalid, setAprInvalid] = useState(false);

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

    const handlePrincipalChange = (e) => {
        const principal = positiveClamp(e.target.value);
        const emi = calculateLoanEMI(principal, loan.apr, loan.termMonths);
        if (single) {
            setLoan({ ...loan, principal, emi });
            return;
        }

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, principal, emi };

        setLoans(loansCopy);
    };

    const handleTermMonthsChange = (e) => {
        const termMonths = positiveClamp(e.target.value);
        const emi = calculateLoanEMI(loan.principal, loan.apr, termMonths);
        if (single) {
            setLoan({ ...loan, termMonths, emi });
            return;
        }

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, termMonths, emi };

        setLoans(loansCopy);
    };

    const handleAprChange = (e) => {
        setAprFormValue(e.target.value);
        const apr = parseFloat(e.target.value) / 100;

        // Does not continue if apr is invalid
        const regex = /^\d+.?\d*$/;
        const error = !(regex.test(e.target.value) && apr > 0);
        setAprInvalid(error);
        if (error) return;

        const emi = calculateLoanEMI(loan.principal, apr, loan.termMonths);

        if (single) {
            setLoan({ ...loan, apr, emi });
            return;
        }

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, apr, emi };

        setLoans(loansCopy);
    };

    const formInput = (
        <Stack width={formItemWidth} spacing={4}>
            <FormControl fullWidth>
                <InputLabel>Principal</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Principal"
                    value={loan.principal}
                    onChange={handlePrincipalChange}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel error={loan.termMonths <= 0}>Months</InputLabel>
                <OutlinedInput
                    endAdornment={
                        <InputAdornment position="start">months</InputAdornment>
                    }
                    label="Months"
                    value={loan.termMonths}
                    error={loan.termMonths <= 0}
                    onChange={handleTermMonthsChange}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel error={aprInvalid}>APR</InputLabel>
                <OutlinedInput
                    endAdornment={
                        <InputAdornment position="start">%</InputAdornment>
                    }
                    label="APR"
                    value={aprFormValue}
                    error={aprInvalid}
                    onChange={handleAprChange}
                />
            </FormControl>
        </Stack>
    );

    const formOutput = (
        <Stack width={formItemWidth} spacing={4} divider={<Divider flexItem />}>
            <Stack {...outputProps}>
                <Typography variant="h4">Monthly Payment</Typography>

                <Typography variant="h4" color="primary">
                    {currencyFormatter(loan.emi)}
                </Typography>
            </Stack>

            <Stack {...outputProps}>
                <Typography variant="h4">Total Principal Paid</Typography>

                <Typography variant="h4" color="primary">
                    {currencyFormatter(loan.principal)}
                </Typography>
            </Stack>

            <Stack {...outputProps}>
                <Typography variant="h4">Total Interest Paid</Typography>

                <Typography variant="h4" color="primary">
                    {currencyFormatter(
                        loan.emi * loan.termMonths - loan.principal
                    )}
                </Typography>
            </Stack>

            {!single && (
                <Stack
                    {...outputProps}
                    justifyContent={{ xs: "center", lg: "flex-start" }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        disableElevation
                        startIcon={<Clear fontSize="large" />}
                        sx={{ textTransform: "capitalize", width: 200 }}
                        onClick={() =>
                            setLoans(loans.filter((e) => e.id !== loan.id))
                        }
                    >
                        <Typography variant="p">Remove</Typography>
                    </Button>
                </Stack>
            )}
        </Stack>
    );

    return (
        <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-evenly"
            alignItems="flex-start"
            divider={<Divider orientation={formDividerOrientation} flexItem />}
            spacing={4}
        >
            {formInput}
            {formOutput}
        </Stack>
    );
};

export default LoanForm;
