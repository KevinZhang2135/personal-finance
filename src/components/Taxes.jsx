import React from "react";
import {
	FormControl,
	FilledInput,
	InputAdornment,
	InputLabel,
} from "@mui/material";

const Taxes = (props) => {
	let { salary, setSalary, taxes, setTaxes } = props;

	return (
		<div className="container-fluid">
			<div className="container-row">
				<div className="container-col col-2">
					<h2>Gross Annual Salary</h2>
					<FormControl variant="filled">
						<InputLabel htmlFor="filled-adornment-amount">
							Gross Annual Salary
						</InputLabel>

						<FilledInput
							id="filled-adornment-amount"
							startAdornment={
								<InputAdornment position="start">
									$
								</InputAdornment>
							}
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

					<h2>Gross Monthly Salary</h2>
					<p>${Math.round(salary / 12)}</p>

					<h2>Annual Federal Tax</h2>
					<p>${Math.round(taxes.federal)}</p>
				</div>

				<div className="container-col col-2 khaki-border">
					<p>
						The US implements a progressive tax that steadily takes
						a larger share of the gross salary as income increases.
						While many other factors such as filing-status and
						number of children influence the total federal tax paid,
						all approximations will be based on a single filing
						status, so $13850 of the annual income is exempt from taxation.
						<br />
						<br />
						Tax rates were calculated using the 2023 tax brackets
						released by the IRS from{" "}
						<a href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets">
							www.irs.gov/filing/federal-income-tax-rates-and-brackets
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

const calculateTax = (annualSalary) => {
	const brackets = {
		// lower bracket: tax rate
		0: 0.1,
		11000: 0.12,
		44725: 0.22,
		95375: 0.24,
		182100: 0.32,
		231250: 0.35,
		578125: 0.37,
	};

    // $13850 is the 
	annualSalary = annualSalary - 13850 > 0 ? annualSalary - 13850 : 0;

	let totalTax = 0;
	for (let [key, taxRate] of Object.entries(brackets).reverse()) {
		const bracket = parseInt(key);

		if (annualSalary > bracket) {
			console.log(annualSalary - bracket, taxRate);
			totalTax += (annualSalary - bracket) * taxRate;
			annualSalary -= annualSalary - bracket;
		}
	}

	return totalTax;
};

export default Taxes;
