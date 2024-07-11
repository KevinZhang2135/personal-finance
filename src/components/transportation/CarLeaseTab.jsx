import React from "react";
import {
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

import { TabPanel } from "@mui/lab";
import { positiveClamp } from "../../App";
import PublicTransitInput from "./PublicTransitInput";

const CarLeaseTab = (props) => {
    const { carCost, setCarCost, publicTransitCost, setPublicTransitCost } =
        props;

    const handleCarLeaseChange = (e) =>
        setCarCost({
            ...carCost,
            lease: { ...carCost.lease, cost: positiveClamp(e.target.value) },
        });

    const handleGasChange = (e) =>
        setCarCost({
            ...carCost,
            lease: { ...carCost.lease, gas: positiveClamp(e.target.value) },
        });

    const handleMaintenanceChange = (e) =>
        setCarCost({
            ...carCost,
            lease: {
                ...carCost.lease,
                maintenance: positiveClamp(e.target.value),
            },
        });

    const handleInsuranceChange = (e) =>
        setCarCost({
            ...carCost,
            lease: {
                ...carCost.lease,
                insurance: positiveClamp(e.target.value),
            },
        });

    return (
        <TabPanel value="lease" sx={{ p: 0 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Lease Payment</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Lease Payment"
                            value={carCost.lease.cost}
                            onChange={handleCarLeaseChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Gas Expenses</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Gas Expenses"
                            value={carCost.lease.gas}
                            onChange={handleGasChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Maintenance Savings</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Maintenance Savings"
                            value={carCost.lease.maintenance}
                            onChange={handleMaintenanceChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Car Insurance Premium</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Car Insurance Premium"
                            value={carCost.lease.insurance}
                            onChange={handleInsuranceChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <PublicTransitInput
                        publicTransitCost={publicTransitCost}
                        setPublicTransitCost={setPublicTransitCost}
                    />
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default CarLeaseTab;
