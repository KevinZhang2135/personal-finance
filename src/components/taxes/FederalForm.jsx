import React from "react";
import { Grid, Typography } from "@mui/material";

const FederalForm = (props) => {
	const { taxes } = props;

	return (
		<React.Fragment>
			<Grid item xs={6} textAlign="center">
				<Typography variant="h3" >
					Monthy Federal Tax
				</Typography>

				<Typography variant="p">
					${Math.round(taxes.federal / 12)}
				</Typography>
			</Grid>

			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">
					Monthly FICA Tax
				</Typography>

				<Typography variant="p">
					${Math.round(taxes.fica / 12)}
				</Typography>
			</Grid>
		</React.Fragment>
	);
};

export default FederalForm;
