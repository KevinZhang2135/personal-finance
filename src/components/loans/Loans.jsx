import React from "react";
import { Box, Collapse, Divider, List } from "@mui/material";
import { blue } from "@mui/material/colors";

import { TransitionGroup } from "react-transition-group";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans } = props;

    return (
        <Box className="loan-forms" sx={{ bgcolor: blue[50], px: "10vw" }}>
            <List>
                <TransitionGroup>
                    {loans.map((loan, index) => {
                        return (
                            <Collapse key={loan + index}>
                                <LoanForm
                                    loan={loan}
                                    loans={loans}
                                    setLoans={setLoans}
                                />
                                {index < loans.length - 1 && (
                                    <Divider variant="inset" component="li" />
                                )}
                            </Collapse>
                        );
                    })}
                </TransitionGroup>
            </List>
        </Box>
    );
};

export default Loans;