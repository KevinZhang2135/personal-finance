import React from "react";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

import Theme from "../../Theme";

const HousingInfo = (props) => {
    const infoItemWidth = { xs: 1, lg: 0.33 };

    return (
        <Box id="housing-info" className="content-container" py="5vh">
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
                <Typography variant="p" width={infoItemWidth}>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Iaculis eu non diam phasellus vestibulum lorem sed
                    risus ultricies.
                </Typography>

                <Typography variant="p" width={infoItemWidth}>
                    Sed sed risus pretium quam vulputate dignissim suspendisse
                    in. Lorem ipsum dolor sit amet consectetur adipiscing elit
                    pellentesque habitant. Sit amet luctus venenatis lectus.
                </Typography>

                <Typography variant="p" width={infoItemWidth}>
                    Facilisis mauris sit amet massa vitae tortor. Commodo quis
                    imperdiet massa tincidunt. Velit dignissim sodales ut eu sem
                    integer vitae justo eget.
                </Typography>
            </Stack>
        </Box>
    );
};

export default HousingInfo;
