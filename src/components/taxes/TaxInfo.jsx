import React from "react";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

import Theme from "../../Theme";

const TaxInfo = (props) => {
    const infoItemWidth = { xs: 1, lg: 0.33 };

    return (
        <Box
            id="tax-info"
            className="content-container"
            bgcolor="beige.main"
            pt="5vh"
            pb={4}
        >
            <Typography variant="h1" gutterBottom>
                Taxes
            </Typography>

            <Stack
                direction={{ xs: "column", lg: "row" }}
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
                    <Typography variant="h3" gutterBottom>
                        Federal Taxes
                    </Typography>
                    <Typography variant="p">
                        The US federal government implements a progressive tax
                        that steadily takes a larger share of the gross salary
                        as income increases. Hence, to help the impoverished,
                        they deduct $13,850 of the taxable income as a tax break
                        and levy an additional tax of $90 per $10,000 of gross
                        income earned above $200,000.<sup>3</sup>
                    </Typography>
                </Box>

                <Box width={infoItemWidth}>
                    <Typography variant="h3" gutterBottom>
                        FICA Taxes
                    </Typography>
                    <Typography variant="p">
                        To fund Social Security and Medicaid, the government
                        also automatically deducts a combined flat tax rate of
                        7.65% known as the Federal Insurance Contributions Act.
                        <sup>4</sup>
                    </Typography>
                </Box>

                <Box width={infoItemWidth}>
                    <Typography variant="h3" gutterBottom>
                        State Taxes
                    </Typography>
                    <Typography variant="p">
                        The separate states of the US also levy an income tax,
                        though it varies from state to state. While some states
                        imitate the federal tax and create progressive brackets
                        on their own, others implement a flat income tax rate or
                        none at all.<sup>5</sup>
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default TaxInfo;
