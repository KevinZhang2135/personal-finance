import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { AddCircle, Clear } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

const PersonalLoansInfo = (props) => {
    const { miscLoans, setMiscLoans } = props;
    const addLoan = () => {
        const newLoan = {
            id: uuid(),
            principal: 0,
            termMonths: 60,
            apr: 0.06,
            emi: 0,
        };

        setMiscLoans([...miscLoans, newLoan]);
    };

    const addLoanButtons = (
        <Stack direction="row" spacing={4} justifyContent="center">
            <Button
                variant="contained"
                size="large"
                disableElevation
                disabled={miscLoans.length >= 3}
                startIcon={<AddCircle fontSize="large" />}
                onClick={addLoan}
                sx={{ width: 200, textTransform: "capitalize", mt: 4 }}
            >
                <Typography variant="p">Add Loan</Typography>
            </Button>

            <Button
                variant="contained"
                color="error"
                size="large"
                disableElevation
                disabled={miscLoans.length === 0}
                startIcon={<Clear fontSize="large" />}
                onClick={() => setMiscLoans([])}
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
            pb={miscLoans.length > 0 ? 4 : "5vh"}
        >
            <Typography className="misc-expense-form" variant="h3" gutterBottom>
                Personal Loans
            </Typography>
            <Typography variant="p" display="block" mb={4}>
                For other more expensive purchases such as furniture or home
                improvements, it may be feasible to take out personal loans to
                finance such large costs. However, consider saving instead if
                possible because it circumvents the additional interest paid on
                top of loan principals. Personal loans are also heavily
                influenced by credit score, favoring borrowers with long
                established and responsible credit histories. Without a poor
                credit score, it may be difficult to get approval or low
                interest rates on loans.
            </Typography>
            {addLoanButtons}
        </Box>
    );
};

export default PersonalLoansInfo;
