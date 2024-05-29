import React from "react";
import { Box, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans } = props;

    return (
        <Box
            className="loan-forms"
            sx={{ bgcolor: blue[50], px: "10vw", pt: "5vh" }}
        >
            <Stack justifyContent="space-evenly" spacing={4}>
                {loans.map((loan, index) => (
                    <LoanForm
                        key={loan + index}
                        loan={loan}
                        loans={loans}
                        setLoans={setLoans}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default Loans;
