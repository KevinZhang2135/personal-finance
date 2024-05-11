import React from "react";
import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import IncomeForm from "./IncomeForm";
import StateForm from "./StateForm";
import FederalForm from "./FederalForm";

const Taxes = (props) => {
    let { salary, setSalary, state, setState, taxes, setTaxes } = props;

    const papersx = { width: { md: "90vw", lg: "40vw" }, p: "3vh 3vw" };

    return (
        <Stack
            bgcolor="secondary.main"
            direction={{ md: "column", lg: "row" }}
            spacing={"3vw"}
            sx={{ justifyContent: "center", p: "2vh 2vw"}}
        >
            <Stack
                direction={{ md: "column", lg: "column" }}
                spacing={"3vw"}
                sx={{ justifyContent: "center"}}
            >
                <Paper elevation={3} sx={papersx}>
                    <Typography variant="h3">Federal Taxes</Typography>
                    <Typography variant="p">
                        The US federal government implements a progressive tax
                        that steadily takes a larger share of the gross salary
                        as income increases.
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
                        the payroll.
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
                        though it varies from state to state. While so states
                        imitate the federal tax and create progressive brackets
                        on their own, others implement a flat income tax rate or
                        none at all.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={papersx}>
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            p: "3vh 3vw",
                        }}
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
                </Paper>
            </Stack>

            <Paper
                elevation={3}
                sx={{
                    width: { md: "90vw", lg: "20vw" },
                    height: "100%",
					p: "3vh 3vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <img
                    src="./Personal-Finance/incomeTax.png"
                    alt="income tax"
                    width={"100%"}
                    height={"auto"}
                />
            </Paper>
        </Stack>
    );
};

export default Taxes;
