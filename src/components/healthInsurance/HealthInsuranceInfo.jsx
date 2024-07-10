import React from "react";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import HealthInsuranceForm from "./HealthInsuranceForm";

const HealthInsuranceInfo = () => {
    return (
        <Box className="content-container" py="5vh">
            <Typography variant="h1" gutterBottom>
                Health Insurance
            </Typography>

            <Stack direction={{ xs: "column", lg: "row" }} spacing={4} mb={4}>
                <Box id="health-insurance-info" width={{ xs: 1, lg: 0.6 }}>
                    <Typography variant="p" display="block" gutterBottom>
                        Injury and illness is inevitable in life. Health
                        insurance helps alleviate some of the burden of paying
                        medical bill which are notoriously expensive in the US.
                        Before subscribing to an insurance plan, it may be
                        astute to become familiar with how such services work.
                    </Typography>

                    <Typography variant="p" display="block" gutterBottom>
                        <b>Premiums</b> are monthly fees paid to insurance in
                        exchange for coverage of potential healthcare costs.
                    </Typography>

                    <Typography variant="p" display="block" gutterBottom>
                        <b>Deductibles</b> are the amount of money subscribers
                        must pay before insurance begins to share a portion of
                        medical fees.
                    </Typography>

                    <Typography variant="p" display="block">
                        <b>Out-of-Pocket Max</b> is the amount of money
                        subscribers are required to pay before insurance covers
                        all healthcare costs.<sup>15</sup>
                    </Typography>
                </Box>

                <CardMedia
                    className="mui-paper-shadow-3"
                    component="img"
                    sx={{
                        width: { xs: 1, lg: 0.4 },
                        height: 200,
                        backgroundImage: `url(${process.env.PUBLIC_URL}/ambulance.jpg)`,
                        borderRadius: 2,
                    }}
                />
            </Stack>
            <HealthInsuranceForm />
        </Box>
    );
};

export default HealthInsuranceInfo;
