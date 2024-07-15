import React from "react";
import { Box, Collapse, Divider, List, ListItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import { TransitionGroup } from "react-transition-group";

import PersonalExpenseForm from "./PersonalExpenseForm";

const PersonalExpenses = (props) => {
    const { miscExpenses } = props;
    const listSx = { bgcolor: "white", borderRadius: 1, boxShadow: 3, p: 0 };

    const divider = <Divider sx={{ m: 4, mt: 0}} />

    return (
        <Box
            className="content-container"
            bgcolor={blue[50]}
            pb={miscExpenses.length > 0 ? "5vh" : 0}
        >
            <List sx={listSx}>
                <TransitionGroup>
                    {miscExpenses.map((expense, index) => (
                        <Collapse key={"misc-expenses-form-" + expense.id}>
                            <ListItem
                                sx={{
                                    p: 4,
                                    pt: index === 0 ? 4 : 0,
                                }}
                            >
                                <PersonalExpenseForm
                                    expense={expense}
                                    {...props}
                                />
                            </ListItem>
                            {index < miscExpenses.length - 1 && divider}
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
};

export default PersonalExpenses;
