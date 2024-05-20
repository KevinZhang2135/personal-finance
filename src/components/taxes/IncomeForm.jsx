import React from "react";
import {
	FormControl,
	FilledInput,
	Grid,
	InputAdornment,
	InputLabel,
	Typography,
} from "@mui/material";

import { calculateTax } from "./../../App";

const IncomeForm = (props) => {
	const { salary, setSalary, state, setTaxes } = props;

	const handleSalaryChange = (e) => {
		const annualSalary = parseInt(e.target.value);

		setSalary(annualSalary);
		setTaxes({
			federal: calculateTax(annualSalary, "federal"),
			state: calculateTax(annualSalary, state),
			fica: annualSalary * 0.0765,
		});
	};

	return (
		<React.Fragment>
			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">Gross Annual Salary</Typography>

				<FormControl variant="filled">
					<InputLabel>Gross Annual Salary</InputLabel>
					<FilledInput
						startAdornment={
							<InputAdornment position="start">$</InputAdornment>
						}
						defaultValue="15000"
						onChange={(e) => handleSalaryChange(e)}
					/>
				</FormControl>
			</Grid>

			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">Gross Monthly Salary</Typography>

				<Typography variant="p">${Math.round(salary / 12)}</Typography>
			</Grid>
		</React.Fragment>
	);
};

export default IncomeForm;
