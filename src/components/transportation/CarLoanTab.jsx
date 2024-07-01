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
import LoanForm from "../loans/LoanForm";
import { positiveClamp } from "../../App";

const CarLoanTab = (props) => {
    const { carCost, setCarCost } = props;

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

    return (
        <TabPanel value="loan" sx={{ p: 0, pt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Car Loan Payment
                        </Typography>
                        <LoanForm
                            loan={carCost.loan.cost}
                            setLoan={handleCarLoanChange}
                            single={true}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Gas
                        </Typography>
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
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Maintenance
                        </Typography>
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
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Car Insurance
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Premium</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Premium"
                                value={carCost.loan.insurance}
                                onChange={handleInsuranceChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default CarLoanTab;
