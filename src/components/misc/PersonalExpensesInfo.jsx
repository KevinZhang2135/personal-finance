import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { blue } from "@mui/material/colors";
import PersonalExpensesForm from "./PersonalExpensesForm";
import PersonalLoansForm from "./PersonalLoansForm";

import Theme from "../../Theme";

const PersonalExpensesInfo = (props) => {
    const infoItemWidth = useMediaQuery(Theme.breakpoints.down("lg"))
        ? "100%"
        : "50%";

    return (
        <Box
            id="misc-info"
            className="content-container"
            bgcolor={blue[50]}
            py="5vh"
            pb={4}
        >
            <Typography variant="h1" gutterBottom>
                Personal Expenses
            </Typography>

            <Stack direction={{ xs: "column", lg: "row" }} spacing={4} mb={4}>
                <Box width={infoItemWidth}>
                    <Typography
                        className="misc-expense-form"
                        variant="h3"
                        gutterBottom
                    >
                        Other Expenses
                    </Typography>
                    <Typography variant="p" display="block">
                        After managing living expenses and paying necessities,
                        there may be some money left for personal expenses.
                        Discretionary income can be used for assortment of
                        everyday items and non-essentials:
                        <li>Apparel</li>
                        <li>Cell Service</li>
                        <li>Electronics</li>
                        <li>Furniture</li>
                        <li>Gifts</li>
                        <li>Hygiene products</li>
                        <li>Internet</li>
                        <li>Entertainment</li>
                    </Typography>
                </Box>

                <img
                    className="mui-paper-shadow-3"
                    src={`${process.env.PUBLIC_URL}/clothes.jpg`}
                    alt="ambulance"
                    style={{
                        width: infoItemWidth,
                        height: 300,
                        objectFit: "cover",
                        borderRadius: 4,
                    }}
                />
            </Stack>
            <PersonalExpensesForm />

            <Typography className="misc-expense-form" variant="h3" gutterBottom>
                Additional Loans
            </Typography>
            <Typography variant="p" display="block" mb={4}>
                Unfortunately, not all expenses can be covered in the web app.
                For financing unenumerated purchases, savings, and loans,
                additional space and forms are provided below.
            </Typography>
        </Box>
    );
};

export default PersonalExpensesInfo;
