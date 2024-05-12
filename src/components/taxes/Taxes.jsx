import React from "react";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import IncomeForm from "./IncomeForm";
import StateForm from "./StateForm";
import FederalForm from "./FederalForm";

const Taxes = (props) => {
    let { salary, setSalary, state, setState, taxes, setTaxes } = props;

    return (
        <Paper elevation={3} sx={{ p: "3vh 3vw", mb: "2vh" }}>
            <Stack
                direction={{ md: "column", lg: "row" }}
                spacing={"3vw"}
                justifyContent="center"
            >
                <Box width="100%">
                    <Typography variant="h2" pb={"3vh"}>
                        Taxes
                    </Typography>

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
                        sx={{ my: "2vh" }}
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
                        sx={{ my: "2vh" }}
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
                        sx={{ my: "2vh" }}
                    />

                    <Grid
                        container
                        spacing={4}
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        width="100%"
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
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    width={"50%"}
                    height={"auto"}
                >
                    <img
                        src="./Personal-Finance/incomeTax.png"
                        alt="income tax"
                        width={"100%"}
                        height={"auto"}
                    />
                </Box>
            </Stack>
        </Paper>
    );
};

export default Taxes;
