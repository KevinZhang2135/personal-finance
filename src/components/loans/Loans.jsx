import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

import { AddCircle } from "@mui/icons-material";

import Loan from "./Loan";

const Loans = (props) => {
	let { loans, setLoans } = props;

	return (
		<Paper elevation={3} sx={{ p: "3vh 3vw", mb: "2vh" }}>
			<Typography variant="h2" pb="3vh">
				Loans
			</Typography>

			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<Loan />
				<Loan />
			</Box>

			<Button
				variant="contained"
				startIcon={<AddCircle fontSize="large" />}
				size="large"
				onClick={() => {}}
			>
				<Typography variant="p">ADD LOAN</Typography>
			</Button>
		</Paper>
	);
};

export default Loans;
