import React from "react";
import {
	Box,
	Divider,
	FilledInput,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Paper,
	Select,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import { toTitleCase, calculateTax, taxBrackets } from "./../../App";
import Theme from "../../Theme";

const TaxForm = (props) => {
	const { salary, setSalary, state, setState, taxes, setTaxes } = props;
	const formItemWidth = { xs: 1, lg: 0.5 };
	const outputProps = {
		direction: "row",
		justifyContent: "space-between",
		alignItems: "center",
	};

	const handleSalaryChange = (e) => {
		let annualSalary = parseInt(e.target.value);
		(isNaN(annualSalary) || annualSalary < 0) && (annualSalary = 0);

		setSalary(annualSalary);
		setTaxes({
			federal: calculateTax(annualSalary, "federal"),
			state: calculateTax(annualSalary, state),
			fica: annualSalary * 0.0765,
		});
	};

	// Gets all states, including D.C, and capitalizes them
	const states = Object.keys(taxBrackets).splice(1);
	const handleStateChange = (e) => {
		setState(e.target.value);
		setTaxes({
			...taxes,
			state: calculateTax(salary, e.target.value),
		});
	};

	return (
		<Box className="tax-form" sx={{ p: "5vh 10vw", bgcolor: blue[50] }}>
			<Paper elevation={1} sx={{ p: 4 }}>
				<Stack
					direction={{ xs: "column", lg: "row" }}
					justifyContent="space-evenly"
					alignItems="flex-start"
					divider={
						<Divider
							orientation={
								useMediaQuery(Theme.breakpoints.down("lg"))
									? "horizontal"
									: "vertical"
							}
							flexItem
						/>
					}
					spacing={4}
				>
					<Stack width={formItemWidth} spacing={4}>
						<FormControl fullWidth>
							<InputLabel htmlFor="annual-salary">
								Gross Annual Salary
							</InputLabel>
							<OutlinedInput
								id="annual-salary"
								startAdornment={
									<InputAdornment position="start">
										$
									</InputAdornment>
								}
								label="Gross Annual Salary"
								value={salary}
								onChange={(e) => handleSalaryChange(e)}
							/>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel>State</InputLabel>
							<Select
								label="State"
								value={state}
								onChange={(e) => {
									handleStateChange(e);
								}}
							>
								{states.map((inputState) => (
									<MenuItem
										key={inputState}
										value={inputState}
									>
										{toTitleCase(inputState)}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
					<Stack
						width={formItemWidth}
						spacing={3}
						divider={<Divider flexItem />}
					>
						<Stack {...outputProps}>
							<Typography variant="h4">
								Gross Monthly Salary
							</Typography>

							<Typography variant="h4" color="primary">
								${Math.round((salary * 100) / 12) / 100}
							</Typography>
						</Stack>

						<Stack {...outputProps}>
							<Typography variant="h4">
								Monthy Federal Tax
							</Typography>

							<Typography variant="h4" color="primary">
								${Math.round((taxes.federal * 100) / 12) / 100}
							</Typography>
						</Stack>

						<Stack {...outputProps}>
							<Typography variant="h4">
								Monthly FICA Tax
							</Typography>

							<Typography variant="h4" color="primary">
								${Math.round((taxes.fica * 100) / 12) / 100}
							</Typography>
						</Stack>

						<Stack {...outputProps}>
							<Typography variant="h4">
								Monthly State Tax
							</Typography>

							<Typography variant="h4" color="primary">
								${Math.round((taxes.state * 100) / 12) / 100}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Paper>
		</Box>
	);
};

export default TaxForm;
