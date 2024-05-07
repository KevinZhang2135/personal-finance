import React from "react";
import {
	FormControl,
	FilledInput,
	InputAdornment,
	InputLabel,
} from "@mui/material";

import { calculateTax } from "../../App";

const IncomeForm = (props) => {
	let { salary, setSalary, setTaxes } = props;

	return (
		<div className="container-row">
			<div className="container-col col-2">
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
								federal: calculateTax(annualSalary, "federal"),
							});
						}}
					/>
				</FormControl>
			</div>

			<div className="container-col col-2">
				<h2>Gross Monthly Salary</h2>
				<p>${Math.round(salary / 12)}</p>
			</div>
		</div>
	);
};

export default IncomeForm;