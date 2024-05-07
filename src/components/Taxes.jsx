import React from "react";
import {
    FormControl,
    FilledInput,
    InputAdornment,
    InputLabel,
    Paper,
} from "@mui/material";

import { calculateTax } from "../App";

const Taxes = (props) => {
    let { salary, setSalary, taxes, setTaxes } = props;

    return (
        <div className="container-fluid">
            <div className="container-row">
                <Paper
                    className="container-col col-2"
                    elevation={3}
                    sx={{ margin: "0vh 1vw" }}
                >
                    <h2>Gross Annual Salary</h2>
                    <FormControl variant="filled">
                        <InputLabel
                            htmlFor="filled-adornment-amount"
                            sx={{ fontSize: "2vmin" }}
                        >
                            Gross Annual Salary
                        </InputLabel>

                        <FilledInput
                            id="filled-adornment-amount"
                            startAdornment={
                                <InputAdornment
                                    position="start"
                                    sx={{ fontSize: "2vmin" }}
                                >
                                    $
                                </InputAdornment>
                            }
                            sx={{ fontSize: "2vmin" }}
                            defaultValue="15000"
                            placeholder="Enter income"
                            onChange={(e) => {
                                const annualSalary = parseInt(e.target.value);
                                setSalary(annualSalary);
                                setTaxes({
                                    federal: calculateTax(annualSalary),
                                });
                            }}
                        />
                    </FormControl>

                    <h2>Taxable Salary</h2>
                    <p>${salary - 13850}</p>

                    <h2>Gross Monthly Salary</h2>
                    <p>${Math.round(salary / 12)}</p>

                    <h2>Annual Federal Tax</h2>
                    <p>${Math.round(taxes.federal)}</p>
                </Paper>

                <Paper
                    className="container-col col-2"
                    elevation={3}
                    sx={{ margin: "0vh 1vw" }}
                >
                    <p>
                        The US implements a progressive tax that steadily takes
                        a larger share of the gross salary as income increases.
                        While many other factors such as filing-status and
                        number of children influence the total federal tax paid,
                        all approximations will be based on a single filing
                        status.
                        <br />
                        <br />
                        Tax rates were calculated using the 2023 tax brackets
                        released by the IRS from{" "}
                        <a href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets">
                            www.irs.gov/filing/federal-income-tax-rates-and-brackets
                        </a>
                        .
                    </p>
                </Paper>
            </div>
        </div>
    );
};

export default Taxes;
