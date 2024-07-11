import React from "react";
import {
    Box,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
} from "@mui/material";

const HealthInsuranceForm = (props) => {
    return (
        <Box
            id="health-insurance-form"
            className="content-container"
            pb="5vh"
        >
            <Paper elevation={3} sx={{ height: "fit-content", p: 4 }}>
                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={4}
                    height="fit-content"
                >
                    <FormControl fullWidth sx={{ mb: 4 }}>
                        <InputLabel sx={{ fontSize: "1.1rem" }}>
                            Monthly Premium
                        </InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
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
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Deductible Savings"
                            value={"todo"}
                            sx={{ fontSize: "1.1rem" }}
                            onChange={() => {}}
                        />
                    </FormControl>
                </Stack>
            </Paper>
        </Box>
    );
};

export default HealthInsuranceForm;
