import React from "react";
import {
	FormControl,
	FilledInput,
	InputAdornment,
	InputLabel,
} from "@mui/material";

import { calculateTax } from "../../App";

const StateForm = (props) => {
	let { salary, setSalary, taxes, setTaxes } = props;

	return (
		<div className="container-row">
			<div className="container-col col-2">
				<h2>State</h2>
				<FormControl variant="filled">
					<InputLabel
						htmlFor="filled-adornment-amount"
						sx={{ fontSize: "2vmin" }}
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
						sx={{ fontSize: "2vmin" }}
						defaultValue="15000"
						placeholder="Select state"
						onChange={(e) => { }}
					/>
				</FormControl>
			</div>

			<div className="container-col col-2">
				<h2>Annual State Tax</h2>
				<p>${Math.round(taxes.state)}</p>
			</div>
		</div>
	);
};

export default StateForm;