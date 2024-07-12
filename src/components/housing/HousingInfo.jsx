import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HousingChart from "./HousingChart";

const HousingInfo = (props) => {
    return (
        <Stack
            id="housing-info"
            className="content-container"
            direction={{ xs: "column", lg: "row" }}
            spacing={4}
            pt="5vh"
            pb={4}
        >
            <Box width={{ xs: 1, lg: 0.5 }}>
                <Typography variant="h1" gutterBottom>
                    Housing
                </Typography>
                <Typography variant="p" display="block" gutterBottom>
                    In last couple years, housing prices have skyrocketed,
                    especially after the economic shock during the COVID-19
                    pandemic. The average home sales price in first fiscal
                    quarter of 2023 is an astonishing $505,300, a 35% increase
                    from that of 2019.<sup>9</sup>{" "}
                </Typography>

                <Typography variant="p">
                    Similarly, rent costs have also been steadily on the rise
                    after the economic recession. As of January 2023, the
                    average rent is over 19% more than that of January 2019,
                    outpacing inflation as measured by the consumer price index
                    (CPI).<sup>10</sup>
                </Typography>
            </Box>

            <HousingChart />
        </Stack>
    );
};

export default HousingInfo;
