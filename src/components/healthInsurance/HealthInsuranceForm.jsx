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
                direction="column"
                spacing={4}
            >
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel sx={{ fontSize: "1.1rem" }}>
                        Monthly Premium
                    </InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Premium"
                        value={"todo"}
                        sx={{ fontSize: "1.1rem" }}
                        onChange={() => {}}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel sx={{ fontSize: "1.1rem" }}>
                        Monthly Deductible Savings
                    </InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Deductible Savings"
                        value={"todo"}
                        sx={{ fontSize: "1.1rem" }}
                        onChange={() => {}}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default HealthInsuranceForm;
