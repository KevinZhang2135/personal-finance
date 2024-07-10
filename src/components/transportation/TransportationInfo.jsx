import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { blue } from "@mui/material/colors";
import Theme from "../../Theme";

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

            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={4}
            >
                <Box width={{ xs: 1, lg: 0.33 }}>
                    <Typography variant="h3" gutterBottom>
                        Buying a Vehicle
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom>
                        When buying a car, expect to pay the cost of the vehicle
                        through lump sum installments. An initial down payment
                        which is typically larger than monthly loan payments may
                        also be mandated. Although the buyer assumes the
                        responsibility of maintenance of the vehicle, they
                        acquire ownership of the vehicle after their loan term
                        ends and no longer have to pay for it.<sup>11</sup>
                    </Typography>
                    <Typography variant="p">
                        However, beware that some dealerships may attempt to
                        reduce the monthly payment by extending the loan
                        duration, drastically increasing interest paid.
                        Therefore, it is best to pay off a car loan as fast as
                        affordably.<sup>12</sup>
                    </Typography>
                </Box>

                <Divider
                    orientation={
                        useMediaQuery(Theme.breakpoints.down("lg"))
                            ? "horizontal"
                            : "vertical"
                    }
                    flexItem
                />

                <Box width={{ xs: 1, lg: 0.33 }}>
                    <Typography variant="h3" gutterBottom>
                        Leasing a Vehicle
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom>
                        Leasing a car is often less expensive compared to loan
                        installments and saves on repairs since leased vehicles
                        are usually covered under manufacturer's warranty.
                    </Typography>
                    <Typography variant="p">
                        However, unlike purchasing a vehicle, finishing a lease
                        term does not grant ownership. Leased vehicles also
                        enforce fees and penalties for excessive wear and
                        mileage. Therefore, it is often more cost effective over
                        time to buy a vehicle rather than leasing one.
                        <sup>11</sup>
                    </Typography>
                </Box>

                <Card
                    sx={{
                        width: { xs: 1, lg: 0.4 },
                        height: "fit-content",
                        boxShadow: 3,
                    }}
                >
                    <CardMedia
                        component="img"
                        height="160"
                        sx={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/cityTraffic.jpg)`,
                        }}
                    />

                    <CardContent>
                        <Typography variant="h4" mb={2}>
                            Car Dependency
                        </Typography>
                        <Typography variant="p" color="text.secondary">
                            With 68.66% of Americans driving to work in 2022,
                            commuting to work via car is the most prominent mode
                            of transportation for US adults.
                            <sup>13</sup>
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
};

export default TransportationInfo;
