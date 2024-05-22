import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

import Loan from "./Loan";

const Loans = (props) => {
	const { loans, setLoans } = props;

	return (
		<Paper elevation={3} sx={{ p: "5vh 3vw", mb: "2vh" }}>
			<Typography variant="h2" mb={4}>
				Loans
			</Typography>

			<Grid container spacing={4} display="flex" flexDirection="row" mb={2}>
				{loans.map((loan, index) => (
					<Loan
						key={loan + index}
						loan={loan}
						loans={loans}
						setLoans={setLoans}
					/>
				))}
			</Grid>

			<Button
				variant="contained"
				startIcon={<AddCircle fontSize="large" />}
				size="large"
				onClick={(e) => {
					const newLoan = {
						principal: 0,
                        termMonths: 60,
						apr: 0.06,
						emi: 0,
					};

					setLoans([...loans, newLoan]);
				}}
			>
				<Typography variant="p">ADD LOAN</Typography>
			</Button>
		</Paper>
	);
};

export default Loans;
