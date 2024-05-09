import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";

import IncomeForm from "./IncomeForm";
import StateForm from "./StateForm";
import FederalForm from "./FederalForm";

const Taxes = (props) => {
	let { salary, setSalary, state, setState, taxes, setTaxes } = props;
	return (
		<Stack bgcolor="secondary.main" flexDirection="row">
			<Paper elevation={3} sx={{ m: "5vh 2vw", p: "3vh 3vw" }}>
				<Grid
					container
					spacing={4}
					sx={{ display: "flex", flexDirection: "row" }}
				>
					<IncomeForm
						salary={salary}
						setSalary={setSalary}
						state={state}
						setTaxes={setTaxes}
					></IncomeForm>

					<FederalForm taxes={taxes}></FederalForm>

					<StateForm
						salary={salary}
						taxes={taxes}
						state={state}
						setState={setState}
						setTaxes={setTaxes}
					></StateForm>
				</Grid>
			</Paper>

			<Paper elevation={3} sx={{ m: "5vh 2vw", p: "3vh 3vw" }}>
				<Typography variant="p">
					The US implements a progressive tax that steadily takes a
					larger share of the gross salary as income increases. While
					many other factors such as filing-status and number of
					children influence the total federal tax paid, all
					approximations will be based on a single filing status.
				</Typography>
			</Paper>
		</Stack>
	);
};

export default Taxes;
