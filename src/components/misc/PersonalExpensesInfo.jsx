import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { AddCircle, Clear } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

const PersonalExpensesInfo = (props) => {
    const { miscExpenses, setMiscExpenses } = props;

    const addExpense = () => {
        const newExpense = { id: uuid(), amount: 0 };
        setMiscExpenses([...miscExpenses, newExpense]);
    };

    const addExpenseButtons = (
        <Stack direction="row" spacing={4} justifyContent="center">
            <Button
                variant="contained"
                size="large"
                disableElevation
                disabled={miscExpenses.length >= 12}
                startIcon={<AddCircle fontSize="large" />}
                onClick={addExpense}
                sx={{ width: 200, textTransform: "capitalize", mt: 4 }}
            >
                <Typography variant="p">Add Expense</Typography>
            </Button>

            <Button
                variant="contained"
                color="error"
                size="large"
                disableElevation
                disabled={miscExpenses.length === 0}
                startIcon={<Clear fontSize="large" />}
                onClick={() => setMiscExpenses([])}
                sx={{ width: 200, textTransform: "capitalize", mt: 4 }}
            >
                <Typography variant="p">Remove All</Typography>
            </Button>
        </Stack>
    );

    return (
        <Box
            id="misc-info"
            className="content-container"
            bgcolor={blue[50]}
            pt="5vh"
            pb={4}
        >
            <Typography variant="h1" gutterBottom>
                Personal Expenses
            </Typography>
            <Typography className="misc-expense-form" variant="h3" gutterBottom>
                Other Expenses
            </Typography>
            <Typography variant="p" display="block">
                After managing living expenses and paying necessities, there may
                be some money left for personal expenses. Discretionary income
                can be used for assortment of everyday items and non-essentials:
            </Typography>
            <Stack direction="row" mb={4}>
                <Typography variant="p" width={0.5}>
                    <li>Apparel</li>
                    <li>Cell Service</li>
                    <li>Electronics</li>
                    <li>Furniture</li>
                    <li>Gifts</li>
                </Typography>
                <Typography variant="p" width={0.5}>
                    <li>Hygiene products</li>
                    <li>Internet</li>
                    <li>Entertainment</li>
                    <li>Savings</li>
                </Typography>
            </Stack>
            {addExpenseButtons}
        </Box>
    );
};

export default PersonalExpensesInfo;
