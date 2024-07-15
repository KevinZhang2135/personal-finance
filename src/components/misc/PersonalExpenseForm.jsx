import React from "react";
import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
} from "@mui/material";

import { positiveClamp } from "../../App";

const PersonalExpenseForm = (props) => {
    const { expense, miscExpenses, setMiscExpenses } = props;

    const handleAmountChange = (e) => {
        const expensesCopy = [...miscExpenses];
        const expenseIndex = miscExpenses.indexOf(expense);

        expensesCopy[expenseIndex] = {
            ...expense,
            amount: positiveClamp(e.target.value),
        };

        setMiscExpenses(expensesCopy);
    };

    return (
        <Stack
            width={1}
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-evenly"
            spacing={4}
        >
            <FormControl sx={{ flexGrow: 1 }}>
                <InputLabel>Label</InputLabel>
                <OutlinedInput label="Label" />
            </FormControl>

            <FormControl sx={{ flexGrow: 5 }}>
                <InputLabel>Monthly Cost</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Monthly Cost"
                    value={expense.amount}
                    onChange={handleAmountChange}
                />
            </FormControl>

            <Box display="flex" justifyContent="center">
                <Button
                    variant="contained"
                    color="error"
                    size="large"
                    disableElevation
                    startIcon={<Clear fontSize="large" />}
                    onClick={() =>
                        setMiscExpenses(
                            miscExpenses.filter((e) => e.id !== expense.id)
                        )
                    }
                    sx={{ width: 200, textTransform: "capitalize" }}
                >
                    <Typography variant="p">Remove</Typography>
                </Button>
            </Box>
        </Stack>
    );
};

export default PersonalExpenseForm;
