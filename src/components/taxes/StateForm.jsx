import React from "react";
import {
    Box,
	FormControl,
	FilledInput,
	InputAdornment,
	InputLabel,
	Typography,
} from "@mui/material";

import { calculateTax } from "../../App";

const StateForm = (props) => {
	let { salary, setSalary, taxes, setTaxes } = props;

	return (
		<Box sx={{ display: "flex", flexDirection: "col" }}>
            <Box>
				<Typography variant="h3" textAlign="center">
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
			</Box>

			<Box>
				<Typography variant="h3" textAlign="center">
					Annual State Tax
				</Typography>

				<Typography variant="p" textAlign="center">
					${Math.round(taxes.state)}
				</Typography>
            </Box>
		</Box>
	);
};

export default StateForm;
