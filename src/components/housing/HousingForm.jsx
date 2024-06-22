import React, { Fragment, useState } from "react";
import {
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Tab,
    Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import LoanForm from "../loans/LoanForm";
import MortgageTab from "./MortgageTab";
import RentTab from "./RentTab";

const HousingForm = (props) => {
    const { housingType, setHousingType, housingCost, setHousingCost } = props;

    return (
        <Box id="tax-info" sx={{ px: "10vw", pb: "5vh" }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <TabContext value={housingType}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={(e, type) => setHousingType(type)}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Rent" value="rent" />
                            <Tab label="Mortgage" value="mortgage" />
                        </TabList>
                    </Box>

                    <RentTab />
                    <MortgageTab />
                </TabContext>
            </Paper>
        </Box>
    );
};

export default HousingForm;
