import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { blue } from "@mui/material/colors";
import Theme from "../../Theme";

const TransportationInfo = (props) => {
    const cardImageHeight = useMediaQuery(Theme.breakpoints.down("md"))
        ? 200
        : 400;

    return (
        <Stack
            id="transportation-info"
            className="content-container"
            bgcolor={blue[50]}
            direction={{ xs: "column", lg: "row" }}
            spacing={4}
            pt="5vh"
            pb={4}
        >
            <Box
                width={{ xs: 1, lg: 0.5 }}
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h1" gutterBottom>
                    Transportation
                </Typography>

                <Typography variant="h3" gutterBottom>
                    Buying a Vehicle
                </Typography>
                <Typography variant="p" display="block" gutterBottom>
                    When buying a car, expect to pay the cost of the vehicle
                    through lump sum installments as well as an initial down
                    payment. Although the buyer assumes full responsibility over
                    maintenance of the vehicle, they acquire ownership of the
                    vehicle after their loan term ends and no longer have to pay
                    for it.
                    <sup>11</sup>
                </Typography>
                <Typography variant="p" mb={4}>
                    However, beware that some dealerships may attempt to reduce
                    the monthly payment by extending the loan duration,
                    drastically increasing interest paid. Like most other loans,
                    it is best to pay off a car loan as fast as affordably
                    possible.<sup>12</sup>
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
                    does not grant ownership. Leased vehicles also enforce fees
                    and penalties for excessive wear and mileage. Therefore, it
                    is often more cost effective over time to buy a vehicle
                    rather than leasing one.
                    <sup>11</sup>
                </Typography>
            </Box>

            <Card
                sx={{
                    width: { xs: 1, lg: 0.5 },
                    height: "fit-content",
                    boxShadow: 3,
                }}
            >
                <CardMedia
                    component="img"
                    height={cardImageHeight}
                    sx={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/cityTraffic.jpg)`,
                    }}
                />

                <CardContent sx={{ p: "0 !important" }}>
                    <Box p={2}>
                        <Typography variant="h5" gutterBottom>
                            Car Dependency
                        </Typography>
                        <Typography variant="p" color="text.secondary">
                            Due to the American car-centric infrastructure, car
                            ownership is almost an necessity for travel and
                            work. Public transportation is limited, further
                            favoring automobiles. Consequently, more than
                            three-fourths of Americans commuted to work alone
                            via car in 2019.<sup>13</sup>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default TransportationInfo;
