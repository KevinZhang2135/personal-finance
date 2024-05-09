import React from "react";
import {
	FormControl,
	FilledInput,
	InputAdornment,
	InputLabel,
	Typography,
} from "@mui/material";

import { calculateTax } from "../../App";

const IncomeForm = (props) => {
	let { salary, setSalary, setTaxes } = props;

	return (
		<div className="container-row">
			<div className="container-col col-2">
				<Typography variant="h3" textAlign="center">
					Gross Annual Salary
				</Typography>
				
				<FormControl variant="filled">
					<InputLabel
						htmlFor="filled-adornment-amount"
						fontSize="2vmin"
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
						defaultValue="15000"
						onChange={(e) => {
							const annualSalary = parseInt(e.target.value);
							setSalary(annualSalary);
							setTaxes({
								federal: calculateTax(annualSalary, "federal"),
								fica: annualSalary * 0.0765,
							});
						}}
						fontSize="2vmin"
					/>
				</FormControl>
			</div>

			<div className="container-col col-2">
				<Typography variant="h3" textAlign="center">
					Gross Monthly Salary
				</Typography>

				<Typography variant="p" textAlign="center">
					${Math.round(salary / 12)}
				</Typography>
			</div>
		</div>
	);
};

export default IncomeForm;
