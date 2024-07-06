import React from "react";
import { Box, Stack } from "@mui/material"
import FoodInfo from "./FoodInfo";
import FoodForm from "./FoodForm";

const Food = (props) => {
    const { foodCost, setFoodCost } = props;

    return (
        <Box className="content-container" bgcolor="beige.main" py="5vh">
            <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
                <FoodInfo />
                <FoodForm
                    foodCost={foodCost}
                    setFoodCost={setFoodCost}
                />
            </Stack>
        </Box>
    );
}

export default Food;