import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AddCircle, Clear } from "@mui/icons-material";

const PersonalExpensesForm = (props) => {
    return (
        <Stack direction="row" spacing={4} justifyContent="center" mb={4}>
            <Button
                variant="contained"
                size="large"
                disableElevation
                disabled={false}
                startIcon={<AddCircle fontSize="large" />}
                onClick={() => {}}
                sx={{ width: 200, textTransform: "capitalize", mt: 4 }}
            >
                <Typography variant="p">Add Loan</Typography>
            </Button>

            <Button
                variant="contained"
                color="error"
                size="large"
                disableElevation
                disabled={false}
                startIcon={<Clear fontSize="large" />}
                onClick={() => {}}
                sx={{ width: 200, textTransform: "capitalize", mt: 4 }}
            >
                <Typography variant="p">Remove All</Typography>
            </Button>
        </Stack>
    );
};

export default PersonalExpensesForm;
