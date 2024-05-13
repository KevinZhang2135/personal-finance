import React from "react";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import IncomeForm from "./IncomeForm";
import StateForm from "./StateForm";
import FederalForm from "./FederalForm";

const Taxes = (props) => {
    let { salary, setSalary, state, setState, taxes, setTaxes } = props;

    return (
        <Paper elevation={3} sx={{ p: "3vh 3vw", mb: "2vh" }}>
            <Typography variant="h2" pb={6}>
                Taxes
            </Typography>

            <Stack
                spacing="3vw"
                direction={{ xs: "column", lg: "row" }}
                justifyContent="center"
            >
                <Box width={{ xs: "100%", lg: "67%", xl: "75%" }}>
                    <Typography variant="h3">Federal Taxes</Typography>
                    <Typography variant="p">
                        The US federal government implements a progressive tax
                        that steadily takes a larger share of the gross salary
                        as income increases. Hence, to help the impoverished,
                        they deduct $13,850 of the taxable income as a tax break
                        and levy an additional tax of $90 per $10,000 of gross
                        income earned above $200,000.
                    </Typography>

                    <Divider
                        flexItem
                        orientation="horizontal"
                        variant="middle"
                        sx={{ my: 4 }}
                    />

                    <Typography variant="h3">FICA Taxes</Typography>
                    <Typography variant="p">
                        To fund Social Security and Medicaid, the government
                        also automatically deducts a combined flat rate 7.65% of
                        the payroll known as the Federal Insurance Contributions
                        Act.
                    </Typography>

                    <Divider
                        flexItem
                        orientation="horizontal"
                        variant="middle"
                        sx={{ my: 4 }}
                    />

                    <Typography variant="h3">State Taxes</Typography>
                    <Typography variant="p">
                        The separate states of the US also levy an income tax,
                        though it varies from state to state. While some states
                        imitate the federal tax and create progressive brackets
                        on their own, others implement a flat income tax rate or
                        none at all.
                    </Typography>

                    <Divider
                        flexItem
                        orientation="horizontal"
                        variant="middle"
                        sx={{ my: 4 }}
                    />

                    <Grid
                        container
                        spacing={4}
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                    >
                        <IncomeForm
                            salary={salary}
                            setSalary={setSalary}
                            state={state}
                            setTaxes={setTaxes}
                        ></IncomeForm>

                        <FederalForm taxes={taxes}></FederalForm>

                        <StateForm
                            salary={salary}
                            taxes={taxes}
                            state={state}
                            setState={setState}
                            setTaxes={setTaxes}
                        ></StateForm>
                    </Grid>
                </Box>

                <Box
                    display={{ xs: "none", lg: "flex" }}
                    flexDirection="column"
                    alignItems="center"
                    width={{ lg: "33%", xl: "25%" }}
                >
                    <img
                        src="./Personal-Finance/incomeTax.png"
                        alt="income tax"
                        width="300rem"
                        height="auto"
                    />
                </Box>
            </Stack>
        </Paper>
    );
};

export default Taxes;
