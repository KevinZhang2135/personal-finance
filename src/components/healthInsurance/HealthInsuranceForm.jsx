import React from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
} from "@mui/material";

const HealthInsuranceForm = (props) => {
    return (
        <Paper
            id="health-insurance-form"
            elevation={3}
            sx={{ height: "fit-content", p: 4 }}
        >
            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={4}
                height="fit-content"
            >
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel>Monthly Premium</InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Premium"
                        value={"todo"}
                        onChange={() => {}}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Monthly Deductible Savings</InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Deductible Savings"
                        value={"todo"}
                        onChange={() => {}}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default HealthInsuranceForm;
