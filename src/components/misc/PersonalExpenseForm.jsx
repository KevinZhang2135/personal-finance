import React from "react";
import {
    Box,
    Button,
    Divider,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { blue } from "@mui/material/colors";
import { AddCircle, Clear } from "@mui/icons-material";
import { TransitionGroup } from "react-transition-group";

const PersonalExpenseForm = (props) => {
    const formItemWidth = { xs: 1, lg: 0.33 };

    return (
        <Stack width={1} direction={{ xs: "column", lg: "row" }} spacing={4}>
            <FormControl width={formItemWidth}>
                <InputLabel>Label</InputLabel>
                <OutlinedInput label="Label" />
            </FormControl>

            <FormControl width={formItemWidth}>
                <InputLabel>Monthly Cost</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Monthly Cost"
                    value={"todo"}
                    onChange={() => {}}
                />
            </FormControl>

            <Box width={formItemWidth}>hello</Box>
        </Stack>
    );
};

export default PersonalExpenseForm;
