import React from "react";
import { Box, Collapse, List, ListItem, Paper } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans, bgcolor } = props;

    return (
        <Box className="loan-forms content-container" bgcolor={bgcolor}>
            <List sx={{ py: 0 }}>
                <TransitionGroup>
                    {loans.map((loan) => (
                        <Collapse key={"loan-form-" + loan.id}>
                            <ListItem sx={{ p: 0, pb: 4 }}>
                                <Paper elevation={3} sx={{ width: 1, p: 4 }}>
                                    <LoanForm
                                        loan={loan}
                                        loans={loans}
                                        setLoans={setLoans}
                                    />
                                </Paper>
                            </ListItem>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
};

export default Loans;
