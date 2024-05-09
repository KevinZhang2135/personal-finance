import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import IncomeForm from "./IncomeForm";
import StateForm from "./StateForm";

const Taxes = (props) => {
	let { salary, setSalary, taxes, setTaxes } = props;
	// className="container-row"
	return (
		<Box sx={{ display: "flex", flexDirection: "col" }}>
			<Paper
				className="container-col col-2"
				elevation={3}
				sx={{ m: "0vh 1vw", p: "0vh 5vw" }}
			>
				<IncomeForm
					salary={salary}
					setSalary={setSalary}
					setTaxes={setTaxes}
				></IncomeForm>

				<div className="container-row col">
					<div className="container-col col-3">
						<Typography variant="h3" textAlign="center">
							Annual Federal Tax
						</Typography>

						<Typography variant="p" textAlign="center">
							${Math.round(taxes.federal)}
						</Typography>
					</div>

					<div className="container-col col-3">
						<Typography variant="h3" textAlign="center">
							Annual FICA Tax
						</Typography>

						<Typography variant="p" textAlign="center">
							${Math.round(taxes.fica)}
						</Typography>
					</div>
				</div>

				<StateForm
					salary={salary}
					setSalary={setSalary}
					taxes={taxes}
					setTaxes={setTaxes}
				></StateForm>
			</Paper>

			<Paper
				className="container-col col-2"
				elevation={3}
				sx={{ m: "0vh 1vw", p: "2vh 2vw" }}
			>
				<Typography variant="p">
					The US implements a progressive tax that steadily takes a
					larger share of the gross salary as income increases. While
					many other factors such as filing-status and number of
					children influence the total federal tax paid, all
					approximations will be based on a single filing status.
				</Typography>
			</Paper>
		</Box>
	);
};

export default Taxes;
