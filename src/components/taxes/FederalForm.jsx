import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const FederalForm = (props) => {
	const { taxes } = props;

	return (
		<React.Fragment>
			<Grid item xs={6} textAlign="center">
				<Typography variant="h3" >
					Annual Federal Tax
				</Typography>

				<Typography variant="p">
					${Math.round(taxes.federal)}
				</Typography>
			</Grid>

			<Grid item xs={6} textAlign="center">
				<Typography variant="h3">
					Annual FICA Tax
				</Typography>

				<Typography variant="p">
					${Math.round(taxes.fica)}
				</Typography>
			</Grid>
		</React.Fragment>
	);
};

export default FederalForm;
