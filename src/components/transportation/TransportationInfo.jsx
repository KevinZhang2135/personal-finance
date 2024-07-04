import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

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

            <Stack
                direction={{ xs: "column", lg: "row" }}
                justifyContent="space-between"
                spacing={4}
            >
                <Box width={{ xs: 1, lg: 0.6 }}>
                    <Typography variant="h3" gutterBottom>
                        Buying a Car
                    </Typography>
                    <Typography variant="p">lorem ipsum</Typography>

                    <Divider sx={{ my: 4 }} />
                    <Typography variant="h3" gutterBottom>
                        Leasing a Car
                    </Typography>
                    <Typography variant="p">lorem ipsum</Typography>
                </Box>

                <Box width={{ xs: 1, lg: 0.4 }}>
                    <Card sx={{ boxShadow: 3 }}>
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
                                With 68.66% of Americans driving to work in
                                2022, commuting to work via car is the most
                                prominent mode of transportation for US adults.
                                <sup>12</sup>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </Box>
    );
};

export default TransportationInfo;
