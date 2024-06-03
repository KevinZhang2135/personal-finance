import React from "react";
import {
    Box,
    Divider,
    Fade,
    List,
} from "@mui/material";

import { blue } from "@mui/material/colors";
import { TransitionGroup } from "react-transition-group";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans } = props;

    return (
        <Box className="loan-forms" sx={{ bgcolor: blue[50], px: "10vw" }}>
            <List>
                <TransitionGroup>
                    {loans.map((loan, index) => (
                        <Fade key={"loan-form-" + loan.id}>
                            <div>
                                <LoanForm
                                    loan={loan}
                                    loans={loans}
                                    setLoans={setLoans}
                                />

                                {index < loans.length - 1 && (
                                    <Divider variant="inset" component="li" />
                                )}
                            </div>
                        </Fade>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
};

export default Loans;
/**
<LoanForm
                                loan={loan}
                                loans={loans}
                                setLoans={setLoans}
                            />
 */
