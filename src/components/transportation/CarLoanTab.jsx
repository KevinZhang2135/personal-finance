import React from "react";
import {
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";

import { TabPanel } from "@mui/lab";
import { positiveClamp } from "../../App";
import LoanForm from "../loans/LoanForm";
import PublicTransitInput from "./PublicTransitInput";

const CarLoanTab = (props) => {
    const { carCost, setCarCost, publicTransitCost, setPublicTransitCost } =
        props;

    const handleCarLoanChange = (newLoan) =>
        setCarCost({
            ...carCost,
            loan: { ...carCost.loan, cost: newLoan },
        });

    const handleGasChange = (e) =>
        setCarCost({
            ...carCost,
            loan: { ...carCost.loan, gas: positiveClamp(e.target.value) },
        });

    const handleMaintenanceChange = (e) =>
        setCarCost({
            ...carCost,
            loan: {
                ...carCost.loan,
                maintenance: positiveClamp(e.target.value),
            },
        });

    const handleInsuranceChange = (e) =>
        setCarCost({
            ...carCost,
            loan: { ...carCost.loan, insurance: positiveClamp(e.target.value) },
        });

    const loanTitleSx = {
        position: "absolute",
        transform: "translate(-24px, calc(-32px - 50% ))",
        color: "text.secondary",
        bgcolor: "white",
        px: "8px",
    };

    return (
        <TabPanel value="loan" sx={{ p: 0 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h4" sx={loanTitleSx}>
                            Car Loan Payment
                        </Typography>
                        <LoanForm
                            loan={carCost.loan.cost}
                            setLoan={handleCarLoanChange}
                            single={true}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Gas Expenses</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Gas Expenses"
                            value={carCost.loan.gas}
                            onChange={handleGasChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Maintenance Savings</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Maintenance Savings"
                            value={carCost.loan.maintenance}
                            onChange={handleMaintenanceChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Car Insurance Premium</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Car Insurance Premium"
                            value={carCost.loan.insurance}
                            onChange={handleInsuranceChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <PublicTransitInput
                        publicTransitCost={publicTransitCost}
                        setPublicTransitCost={setPublicTransitCost}
                    />
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default CarLoanTab;
