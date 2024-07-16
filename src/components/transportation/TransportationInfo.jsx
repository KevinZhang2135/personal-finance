import React from "react";
import { Box, Typography } from "@mui/material";

import { blue } from "@mui/material/colors";

const TransportationInfo = (props) => {
    return (
        <Box
            id="transportation-info"
            className="content-container"
            bgcolor={blue[50]}
            pt="5vh"
            pb={4}
        >
            <Typography variant="h1" gutterBottom>
                Transportation
            </Typography>
            <Typography variant="p" display="block" mb={4}>
                Due to the American car-centric infrastructure, car ownership is
                almost an necessity for travel and work. Public transportation
                is limited, further favoring automobiles. Consequently, more
                than three-fourths of Americans commuted to work alone via car
                in 2019.
                <sup>11</sup>
            </Typography>

            <Typography variant="h3" gutterBottom>
                Buying a Vehicle
            </Typography>
            <Typography variant="p" display="block" gutterBottom>
                When buying a car, expect to pay the cost of the vehicle through
                lump sum installments as well as an initial down payment.
                Although the buyer assumes full responsibility over maintenance
                of the vehicle, they acquire ownership of the vehicle after
                their loan term ends and no longer have to pay for it.
                <sup>12</sup>
            </Typography>
            <Typography variant="p" display="block" mb={4}>
                However, beware that some dealerships may attempt to reduce the
                monthly payment by extending the loan duration, drastically
                increasing interest paid. Like most other loans, it is best to
                pay off a car loan as fast as affordably possible.<sup>13</sup>
            </Typography>

            <Typography variant="h3" gutterBottom>
                Leasing a Vehicle
            </Typography>
            <Typography variant="p" display="block" gutterBottom>
                Leasing a car is often less expensive compared to loan
                installments and saves on repairs since leased vehicles are
                usually covered under manufacturer's warranty.
            </Typography>
            <Typography variant="p">
                However, unlike purchasing a vehicle, finishing a lease term
                does not grant ownership. Leased vehicles also enforce fees and
                penalties for excessive wear and mileage. Therefore, it is often
                more cost effective over time to buy a vehicle rather than
                leasing one.<sup>12</sup>
            </Typography>
        </Box>
    );
};

export default TransportationInfo;
