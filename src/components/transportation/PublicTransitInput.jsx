import React from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";

import { positiveClamp } from "../../App";

const PublicTransitInput = (props) => {
    const { publicTransitCost, setPublicTransitCost } = props;

    return (
        <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h3" mb={4}>
                Public Transportation
            </Typography>
            <FormControl fullWidth>
                <InputLabel>Monthly Public Transit Fee</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Monthly Public Transit Fee"
                    value={publicTransitCost}
                    onChange={(e) =>
                        setPublicTransitCost(positiveClamp(e.target.value))
                    }
                />
            </FormControl>
        </Paper>
    );
};

export default PublicTransitInput;
