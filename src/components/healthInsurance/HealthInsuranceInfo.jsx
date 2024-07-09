import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import HealthInsuranceForm from "./HealthInsuranceForm";

const HealthInsuranceInfo = () => {
    return (
        <Box className="content-container" py="5vh">
            <Typography variant="h1" gutterBottom>
                Health Insurance
            </Typography>

            <Stack direction={{ xs: "column", lg: "row" }} spacing={4} mb={4}>
                <Typography
                    id="health-insurance-info"
                    variant="p"
                    width={{ xs: 1, lg: 0.3 }}
                >
                    Healthcare in the US is expensive
                </Typography>

                <CardMedia
                    sx={{
                        width: { xs: 1, lg: 0.3 },
                        height: 200,
                        backgroundImage: `url(${process.env.PUBLIC_URL}/cityTraffic.jpg)`,
                        boxShadow: 3,
                    }}
                />

                <HealthInsuranceForm />
            </Stack>
        </Box>
    );
};

export default HealthInsuranceInfo;
