import React from "react";
import { Box, Typography } from "@mui/material";
import HealthInsuranceForm from "./HealthInsuranceForm";

const HealthInsuranceInfo = (props) => {
    return (
        <Box
            id="health-insurance-info"
            className="content-container"
            pt="5vh"
            pb={4}
        >
            <Typography variant="h1" gutterBottom>
                Health Insurance
            </Typography>
            <Typography variant="p" display="block" gutterBottom>
                Injuries and illnesses are inevitable in life. Health insurance
                helps alleviate some of the burden of paying medical bill which
                are notoriously expensive in the US. Before subscribing to an
                insurance plan, it may be astute to become familiar with how
                such services work.
            </Typography>

            <Typography variant="p" display="block" gutterBottom>
                <b>Premiums</b> are monthly fees paid to insurance in exchange
                for coverage of potential healthcare costs.
            </Typography>
            <Typography variant="p" display="block" gutterBottom>
                <b>Deductibles</b> are the amount of money subscribers must pay
                before insurance begins to share a portion of medical fees.
            </Typography>
            <Typography variant="p" display="block" gutterBottom>
                <b>Out-of-Pocket Max</b> is the amount of money subscribers are
                required to pay before insurance covers all healthcare costs.
            </Typography>

            <Typography variant="p" display="block" gutterBottom>
                Oftentimes, insurance plans with low premiums have higher
                deductible thresholds to compensate. Thus, it may be preferable
                for those who are healthy and do not expect to visit the doctor
                frequently.
            </Typography>
            <Typography variant="p" display="block" mb={4}>
                Conversely, other plans may charge relatively higher premiums
                for lower deductibles which is favorable for older adults or
                those who use medical services regularly.
                <sup>16</sup>
            </Typography>

            <HealthInsuranceForm {...props} />
        </Box>
    );
};

export default HealthInsuranceInfo;
