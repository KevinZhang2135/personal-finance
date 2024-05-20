import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";

import { AddCircle } from "@mui/icons-material";

import Loan from "./Loan";
import { calculateLoanEMI } from "../../App";

const Loans = (props) => {
    const { loans, setLoans } = props;

    return (
        <Paper elevation={3} sx={{ p: "5vh 3vw", mb: "2vh" }}>
            <Typography variant="h2" sx={{mb: 6}}>
                Loans
            </Typography>

            <Grid container spacing={4} display="flex" flexDirection="row">
                {loans.map((loan, index) => (
                    <Loan
                        key={loan + index}
                        loan={loan}
                        loans={loans}
                        setLoans={setLoans}
                    />
                ))}
            </Grid>

            <Button
                variant="contained"
                startIcon={<AddCircle fontSize="large" />}
                size="large"
                onClick={(e) => {
                    setLoans([
                        ...loans,
                        {
                            principal: 0,
                            apr: 0.06,
                            termMonths: 60,
                            emi: 0,
                        },
                    ]);
                }}
            >
                <Typography variant="p">ADD LOAN</Typography>
            </Button>
        </Paper>
    );
};

export default Loans;
