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

const RentTab = (props) => {
    const { housingCost, setHousingCost } = props;

    const handleRentCostChange = (e) => {
        let rentCost = parseInt(e.target.value);
        (isNaN(rentCost) || rentCost < 0) && (rentCost = 0);

        setHousingCost({
            ...housingCost,
            rent: { ...housingCost.rent, cost: rentCost },
        });
    };

    const handleInsurancePremiumChange = (e) => {
        let premium = parseInt(e.target.value);
        (isNaN(premium) || premium < 0) && (premium = 0);

        setHousingCost({
            ...housingCost,
            rent: { ...housingCost.rent, insurance: premium },
        });
    };

    const handleUtilitiesChange = (e) => {
        let utilities = parseInt(e.target.value);
        (isNaN(utilities) || utilities < 0) && (utilities = 0);

        setHousingCost({
            ...housingCost,
            rent: { ...housingCost.rent, utilities },
        });
    };

    return (
        <TabPanel value="rent" sx={{ px: 0, py: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Rent Payment
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Rent</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Rent"
                                value={housingCost.rent.cost}
                                onChange={handleRentCostChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Renters Insurance
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
                                value={housingCost.rent.insurance}
                                onChange={handleInsurancePremiumChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
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
                                value={housingCost.rent.utilities}
                                onChange={handleUtilitiesChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default RentTab;
