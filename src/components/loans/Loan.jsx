import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import { Clear } from "@mui/icons-material";
import LoanForm from "./LoanForm";

const Loan = (props) => {
	const { loan, loans, setLoans } = props;
	const columnWidth = 6;

	return (
		<Grid item xs={columnWidth * 2} lg={columnWidth}>
			<Grid
				container
				display="flex"
				flexDirection="row"
				sx={{
					border: 2,
					borderColor: "primary.main",
					borderRadius: 1,
					p: 2,
					mb: 2,
				}}
			>
				<LoanForm loan={loan} loans={loans} setLoans={setLoans} />
				<Grid
					container
					item
					xs={6}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="flex-start"
				>
					<Grid item>
						{" "}
						<Typography variant="h3">Monthly payment</Typography>
						<Typography variant="p">
							$ {Math.round(loan.emi * 100) / 100}
						</Typography>
					</Grid>

					<Grid item>
						<Button
							variant="contained"
							startIcon={<Clear fontSize="large" />}
							color="error"
							size="large"
							onClick={() => {
								setLoans(loans.filter((e) => e !== loan));
							}}
						>
							<Typography variant="p">REMOVE</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Loan;
