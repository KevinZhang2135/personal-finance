import React, { useState } from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
} from "@mui/material";

import { positiveClamp } from "../../App";

const RetirementForm = (props) => {
    const { retirement, setRetirement, salary } = props;
    const monthlySalary = salary / 12;

    const [salaryPercent, setSalaryPercent] = useState(0);

    const handleInvestmentChange = (e) => {
        const investment = positiveClamp(e.target.value)
        setRetirement(investment);
        setSalaryPercent(investment / monthlySalary);
    };

    const handlePercentChange = (e) => {
        const percent = positiveClamp(e.target.value) / 100;
        setRetirement(monthlySalary * percent);
        setSalaryPercent(percent);
    };

    return (
        <Paper
            id="retirement-form"
            elevation={3}
            sx={{
                width: { xs: 1, lg: 0.5 },
                p: 4,
            }}
        >
            <Stack direction="column" spacing={4}>
                <FormControl fullWidth>
                    <InputLabel>Monthly Retirement Investment</InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Retirement Investment per Month"
                        value={Math.round(retirement)}
                        onChange={handleInvestmentChange}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Percentage of Monthly Salary</InputLabel>
                    <OutlinedInput
                        endAdornment={
                            <InputAdornment position="start">%</InputAdornment>
                        }
                        label="Percentage of Monthly Salary"
                        value={Math.round(salaryPercent * 100)}
                        onChange={handlePercentChange}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default RetirementForm;
