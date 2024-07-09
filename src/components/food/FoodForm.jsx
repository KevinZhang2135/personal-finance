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

const FoodForm = (props) => {
    const { foodCost, setFoodCost } = props;

    const handleGroceryCostChange = (e) =>
        setFoodCost({ ...foodCost, groceries: positiveClamp(e.target.value) });

    const handleEatingOutCostChange = (e) =>
        setFoodCost({ ...foodCost, eatingOut: positiveClamp(e.target.value) });

    return (
        <Paper
            id="food-form"
            elevation={3}
            sx={{
                width: { xs: 1, lg: 0.4 },
                height: "fit-content",
                p: 4,
            }}
        >
            <Stack direction="column" spacing={4}>
                <FormControl fullWidth>
                    <InputLabel>Monthly Grocery Expenses</InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Grocery Expenses"
                        value={foodCost.groceries}
                        onChange={handleGroceryCostChange}
                    />
                </FormControl>
                
                <FormControl fullWidth>
                    <InputLabel>Monthly Eating-Out Expenses</InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Monthly Eating-Out Expenses"
                        value={foodCost.eatingOut}
                        onChange={handleEatingOutCostChange}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default FoodForm;
