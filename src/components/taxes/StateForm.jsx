import React from "react";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";

import { toTitleCase, calculateTax, taxBrackets } from "./../../App";

const StateForm = (props) => {
    const { salary, state, setState, taxes, setTaxes } = props;

    // Gets all states, including D.C, and capitalizes them
    const states = Object.keys(taxBrackets).splice(1);
    const handleStateChange = (e) => {
        const inputState = e.target.value;
        setState(inputState);
        setTaxes({
            ...taxes,
            state: calculateTax(salary, inputState),
        });
    };

    return (
        <React.Fragment>
            <Grid item xs={6} textAlign="center">
                <Typography variant="h3">State</Typography>
                <FormControl variant="filled">
                    <InputLabel>State</InputLabel>
                    <Select
                        value={state}
                        label="State"
                        onChange={(e) => {
                            handleStateChange(e);
                        }}
                    >
                        {states.map((inputState) => (
                            <MenuItem key={inputState} value={inputState}>
                                {toTitleCase(inputState)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} textAlign="center">
                <Typography variant="h3">Monthly State Tax</Typography>

                <Typography variant="p">
                    ${Math.round(taxes.state / 12)}
                </Typography>
            </Grid>
        </React.Fragment>
    );
};

export default StateForm;
