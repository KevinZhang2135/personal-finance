import React from "react";
import { Alert, Box, Link, Stack, Typography } from "@mui/material";
import HousingChart from "./HousingChart";

const HousingInfo = (props) => {
    return (
        <Box id="housing-info" className="content-container" pt="5vh" pb={4}>
            <Typography variant="h1" gutterBottom>
                Housing
            </Typography>

            <Stack direction={{ xs: "column", lg: "row" }} spacing={4} mb={4}>
                <Box width={{ xs: 1, lg: 0.5 }}>
                    <Typography variant="p">
                        In last couple years, housing prices have skyrocketed,
                        especially after the economic shock during the
                        coronavirus pandemic. The average home sales price in
                        first fiscal quarter of 2023 is an astonishing $505,300,
                        a 35% increase from that of 2019.<sup>9</sup>{" "}
                    </Typography>

                    <Typography variant="p">
                        Similarly, rent costs have also been steadily on the
                        rise after the economic recession. As of January 2023,
                        the average rent is over 19% more than that of January
                        2019, outpacing inflation as measured by the consumer
                        price index (CPI).<sup>10</sup>
                    </Typography>
                </Box>

                <HousingChart />
            </Stack>

            <Alert severity="info">
                For financing furniture, appliances, and household supplies, use
                the{" "}
                <Link href="#misc-info">
                    miscellaneous loans and expenses section.
                </Link>
            </Alert>
        </Box>
    );
};

export default HousingInfo;
