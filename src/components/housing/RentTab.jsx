import React from "react";
import {
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";

import { TabPanel } from "@mui/lab";

const RentTab = (props) => {
    const {} = props;

    return (
        <TabPanel value="rent">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            Rent Payment
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Rent</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Rent"
                                value={"todo"}
                                onChange={() => {}}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            Renters Insurance
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Insurance Premium</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Insurance Premium"
                                value={"todo"}
                                onChange={() => {}}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            Utilities
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Utilities Fee</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Utilities Fee"
                                value={"todo"}
                                onChange={() => {}}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default RentTab;
