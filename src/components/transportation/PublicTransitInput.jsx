import React from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";

const PublicTransitInput = () => {
    return (
        <Paper variant="outlined" sx={{ p: 4 }}>
            <Typography variant="h3" mb={4}>
                Maintenance
            </Typography>
            <FormControl fullWidth>
                <InputLabel>Monthly Maintenance Savings</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Monthly Maintenance Savings"
                    value={"todo"}
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                />
            </FormControl>
        </Paper>
    );
};

export default PublicTransitInput;
