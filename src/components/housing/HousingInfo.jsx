import React from "react";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

import Theme from "../../Theme";

const HousingInfo = (props) => {
    const infoItemWidth = { xs: 1, lg: 0.33 };

    return (
        <Box id="housing-info" sx={{ pl: "10vw", pr:"calc(10vw - 8px)", py: "5vh" }}>
            <Typography variant="h1" gutterBottom>
                Housing
            </Typography>

            <Stack
                direction={{ xs: "column", lg: "row" }}
                justifyContent="space-between"
                divider={
                    <Divider
                        orientation={
                            useMediaQuery(Theme.breakpoints.down("lg"))
                                ? "horizontal"
                                : "vertical"
                        }
                        flexItem
                    />
                }
                spacing={4}
            >
                <Box width={infoItemWidth}>
                    <Typography variant="p">
                        orem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Iaculis eu non diam phasellus vestibulum
                        lorem sed risus ultricies.
                    </Typography>
                </Box>

                <Box width={infoItemWidth}>
                    <Typography variant="p">
                        Sed sed risus pretium quam vulputate dignissim
                        suspendisse in. Lorem ipsum dolor sit amet consectetur
                        adipiscing elit pellentesque habitant. Sit amet luctus
                        venenatis lectus.
                    </Typography>
                </Box>

                <Box width={infoItemWidth}>
                    <Typography variant="p">
                        Facilisis mauris sit amet massa vitae tortor. Commodo
                        quis imperdiet massa tincidunt. Velit dignissim sodales
                        ut eu sem integer vitae justo eget.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default HousingInfo;
