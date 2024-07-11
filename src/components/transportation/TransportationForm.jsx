import React from "react";
import { Alert, Box, Paper, Tab } from "@mui/material";
import { blue } from "@mui/material/colors";

import { Error } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";

import CarLoanTab from "./CarLoanTab";
import CarLeaseTab from "./CarLeaseTab";

const TransportationForm = (props) => {
    const { carPlanType, setCarPlanType } = props;

    return (
        <Box
            id="transportation-form"
            className="content-container"
            bgcolor={blue[50]}
            pb="5vh"
        >
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <TabContext value={carPlanType}>
                    <Box borderBottom={1} borderColor="divider">
                        <TabList onChange={(e, type) => setCarPlanType(type)}>
                            <Tab label="Loan" value="loan" />
                            <Tab label="Lease" value="lease" />
                        </TabList>
                    </Box>

                    <Alert
                        icon={<Error fontSize="inherit" />}
                        severity="warning"
                        sx={{ my: 4 }}
                    >
                        Calculations does not include down payment or any other
                        additional one-time fees such as license fees or sales
                        tax.
                    </Alert>

                    <CarLoanTab {...props} />
                    <CarLeaseTab {...props} />
                </TabContext>
            </Paper>
        </Box>
    );
};

export default TransportationForm;
