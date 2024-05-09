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

const StateForm = (props) => {
	let { salary, setSalary, taxes, setTaxes } = props;

	return (
		<React.Fragment>
			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">
					State
				</Typography>
				<FormControl variant="filled">
					<InputLabel
						htmlFor="filled-adornment-amount"
						fontSize="2vmin"
					>
						State
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
						placeholder="Select state"
						fontSize="2vmin"
						onChange={(e) => {}}
					/>
				</FormControl>
			</Grid>

			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">
					Annual State Tax
				</Typography>

				<Typography variant="p">
					${Math.round(taxes.state)}
				</Typography>
			</Grid>
		</React.Fragment>
	);
};

export default StateForm;
