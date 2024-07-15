import React from "react";
import {
    Box,
    Collapse,
    List,
    ListItem,
    Paper,
    Typography,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans, bgcolor } = props;

    const listSx = {
        bgcolor,
        boxShadow: 3,
        p: 0,
    };

    return (
        <Box className="content-container" pb={loans.length > 0 ? "5vh" : 0}>
            <List sx={listSx}>
                <TransitionGroup>
                    {loans.map((loan, index) => (
                        <Collapse key={"loan-form-" + loan.id}>
                            <ListItem
                                sx={{
                                    p: 4,
                                    pb: index === loans.length - 1 ? 4 : 0,
                                }}
                            >
                                <Paper
                                    variant="outlined"
                                    sx={{ width: 1, p: 4 }}
                                >
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
