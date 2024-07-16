import React from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
} from "@mui/material";

import { positiveClamp } from "../../App";

const HealthInsuranceForm = (props) => {
    const { healthInsuranceCost, setHealthInsuranceCost } = props;

    const handlePremiumChange = (e) =>
        setHealthInsuranceCost({
            ...healthInsuranceCost,
            premium: positiveClamp(e.target.value),
        });

    const handleDeductibleChange = (e) =>
        setHealthInsuranceCost({
            ...healthInsuranceCost,
            deductibleSavings: positiveClamp(e.target.value),
        });

    return (
        <Paper
            id="health-insurance-form"
            elevation={3}
            sx={{ height: "fit-content", p: 4 }}
        >
            <Stack direction={{xs: "column", md: "row"}} spacing={4}>
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel>
                        Monthly Premium
                    </InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Premium"
                        value={healthInsuranceCost.premium}
                        onChange={handlePremiumChange}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>
                        Monthly Deductible Savings
                    </InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Deductible Savings"
                        value={healthInsuranceCost.deductibleSavings}
                        onChange={handleDeductibleChange}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default HealthInsuranceForm;
