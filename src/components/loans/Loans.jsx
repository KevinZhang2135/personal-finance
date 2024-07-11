import React from "react";
import { Collapse, List, ListItem, Paper } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans, bgcolor } = props;

    const listSx = {
        bgcolor,
        pl: "10vw",
        pr: "calc(10vw - 8px)",
        pt: 0,
        pb: loans.length > 0 ? "5vh" : 0,
    };

    return (
        <List className="content-container" sx={listSx}>
            <TransitionGroup>
                {loans.map((loan, index) => (
                    <Collapse key={"loan-form-" + loan.id}>
                        <ListItem
                            sx={{
                                p: 0,
                                pb: index === loans.length - 1 ? 0 : 4,
                            }}
                        >
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
    );
};

export default Loans;
