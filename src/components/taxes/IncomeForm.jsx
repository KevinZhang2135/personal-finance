import React from "react";
import {
	Box,
	FormControl,
	FilledInput,
	Grid,
	InputAdornment,
	InputLabel,
	Typography,
} from "@mui/material";

import { calculateTax } from "../../App";

const IncomeForm = (props) => {
	let { salary, setSalary, setTaxes } = props;

	return (
		<React.Fragment>
			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">
					Gross Annual Salary
				</Typography>

				<FormControl variant="filled">
					<InputLabel htmlFor="filled-adornment-amount">
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
					/>
				</FormControl>
			</Grid>

			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">
					Gross Monthly Salary
				</Typography>

				<Typography variant="p">
					${Math.round(salary / 12)}
				</Typography>
			</Grid>
		</React.Fragment>
	);
};

export default IncomeForm;
