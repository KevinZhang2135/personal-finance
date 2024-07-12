import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FoodForm from "./FoodForm";

const FoodInfo = (props) => {
    return (
        <Stack
            id="food-info"
            className="content-container"
            bgcolor="beige.main"
            direction={{ xs: "column", lg: "row" }}
            spacing={4}
            py="5vh"
        >
            <Box width={{ xs: 1, lg: 0.6 }}>
                <Typography variant="h1" gutterBottom>
                    Food
                </Typography>

                <Typography variant="p">
                    Recently, food costs have inflated due to a variety of
                    disruptions in the food supply chain such as animal and
                    plant diseases and the Russo-Ukrainian War.<sup>14</sup>{" "}
                    According, budgeting for food expenses becomes ever more
                    important, especially considering that US consumers spend
                    about 12.8% of their total household expenditures on food in
                    2022.<sup>15</sup>
                </Typography>
            </Box>
            <FoodForm {...props} />
        </Stack>
    );
};

export default FoodInfo;
