import React, { useState } from "react";
import { Box, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import LoanForm from "../loans/LoanForm";

const HousingForm = (props) => {
    const [housingType, setHousingType] = useState("rent");
    const handleTabChange = (e, newValue) => setHousingType(newValue);

    const [mortgageLoan, setMortageLoan] = useState({
        principal: 0,
        termMonths: 360,
        apr: 0.06,
        emi: 0,
    });

    return (
        <Box id="tax-info" sx={{ px: "10vw", py: "5vh" }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <TabContext value={housingType}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleTabChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Rent" value="rent" />
                            <Tab label="Mortgage" value="mortgage" />
                        </TabList>
                    </Box>

                    <TabPanel value="rent">PAY RENT</TabPanel>
                    <TabPanel value="mortgage">
                        <LoanForm
                            loan={mortgageLoan}
                            setLoan={setMortageLoan}
                            single={true}
                        />
                    </TabPanel>
                </TabContext>
            </Paper>
        </Box>
    );
};

export default HousingForm;
