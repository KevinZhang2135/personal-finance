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

const MortgageTab = (props) => {
    const { housingCost, setHousingCost } = props;

    const handleMortgageChange = (newLoan) => {
        setHousingCost({
            ...housingCost,
            mortgage: { ...housingCost.mortgage, cost: newLoan },
        });
    };

    const handleInsurancePremiumChange = (e) => {
        let premium = parseInt(e.target.value);
        (isNaN(premium) || premium < 0) && (premium = 0);

        setHousingCost({
            ...housingCost,
            mortgage: { ...housingCost.mortgage, insurance: premium },
        });
    };

    const handleUtilitiesChange = (e) => {
        let utilities = parseInt(e.target.value);
        (isNaN(utilities) || utilities < 0) && (utilities = 0);

        setHousingCost({
            ...housingCost,
            mortgage: { ...housingCost.mortgage, utilities },
        });
    };

    return (
        <TabPanel value="mortgage">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            Mortgage Payment
                        </Typography>
                        <LoanForm
                            loan={housingCost.mortgage.cost}
                            setLoan={handleMortgageChange}
                            single={true}
                        />
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            House Insurance
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Insurance Premium</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Insurance Premium"
                                value={housingCost.mortgage.insurance}
                                onChange={handleInsurancePremiumChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            Utilities
                        </Typography>
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
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default MortgageTab;
