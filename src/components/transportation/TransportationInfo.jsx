import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";

const TransportationInfo = (props) => {
    return (
        <Box
            id="transportation-info"
            className="content-container"
            bgcolor={teal[50]}
            py="5vh"
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
                    <Typography variant="p" display="block" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Iaculis eu non diam phasellus vestibulum
                        lorem sed risus ultricies.
                    </Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Iaculis eu non diam phasellus vestibulum
                        lorem sed risus ultricies.
                    </Typography>
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
                                <sup>9</sup>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </Box>
    );
};

export default TransportationInfo;
