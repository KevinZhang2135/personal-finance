import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FoodForm from "./FoodForm";

const FoodInfo = (props) => {
    return (
        <Box
            id="food-info"
            className="content-container"
            bgcolor="beige.main"
            spacing={4}
            py="5vh"
        >
            <Typography variant="h1" gutterBottom>
                Food
            </Typography>

            <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
                <Box width={{ xs: 1, lg: 0.5 }}>
                    <Typography variant="p" display="block" gutterBottom>
                        Recently, food costs have inflated due to a variety of
                        disruptions in the food supply chain. Due to animal and
                        plant diseases, weather, the Russo-Ukrainian War, and
                        numerous other factors, food prices in 2023 are 25% higher
                        than that in 2018.<sup>14</sup>
                    </Typography>
                    
                    <Typography variant="p">
                        According, budgeting for food expenses becomes ever more
                        important, especially considering that US consumers spend
                        about 12.8% of their total household expenditures on food in
                        2022.<sup>15</sup>
                    </Typography>
                </Box>

                <FoodForm {...props} />
            </Stack>
        </Box>
    );
};

export default FoodInfo;
