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

const MortgageTab = (props) => {
    const { housingCost, setHousingCost } = props;

    const handleMortgageChange = (newLoan) => {
        setHousingCost({
            ...housingCost,
            mortgage: { ...housingCost.mortgage, cost: newLoan },
        });
    };

    const handleInsurancePremiumChange = (e) =>
        setHousingCost({
            ...housingCost,
            mortgage: {
                ...housingCost.mortgage,
                insurance: positiveClamp(e.target.value),
            },
        });

    const handleUtilitiesChange = (e) =>
        setHousingCost({
            ...housingCost,
            mortgage: {
                ...housingCost.mortgage,
                utilities: positiveClamp(e.target.value),
            },
        });

    const mortgageTitleSx = {
        position: "absolute",
        transform: "translate(-24px, calc(-32px - 50% ))",
        color: "text.secondary",
        bgcolor: "white",
        px: "8px",
    };

    return (
        <TabPanel value="mortgage" sx={{ p: 0 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h4" sx={mortgageTitleSx}>
                            Mortgage Payment
                        </Typography>
                        <LoanForm
                            loan={housingCost.mortgage.cost}
                            setLoan={handleMortgageChange}
                            single={true}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly House Insurance Premium</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly House Insurance Premium"
                            value={housingCost.mortgage.insurance}
                            onChange={handleInsurancePremiumChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Utilities Fee</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Utilities Fee"
                            value={housingCost.mortgage.utilities}
                            onChange={handleUtilitiesChange}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default MortgageTab;
