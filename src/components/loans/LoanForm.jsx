import React from "react";
import {
	FilledInput,
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	Stack,
} from "@mui/material";

import { calculateLoanEMI } from "../../App";

const LoanForm = (props) => {
	const { loan, loans, setLoans } = props;

	const handlePrincipalChange = (e) => {
		let principal = parseInt(e.target.value);
        (isNaN(principal) || principal < 0) && (principal = 0);

		const emi = calculateLoanEMI(principal, loan.apr, loan.termMonths);
		const loansCopy = [
			...loans.filter((e) => e !== loan),
			{ ...loan, principal: principal, emi: emi },
		];

		setLoans(loansCopy);
	};

    const handleTermMonthsChange = (e) => {
		let termMonths = parseInt(e.target.value);
        (isNaN(termMonths) || termMonths < 0) && (termMonths = 0);
        
        const emi = calculateLoanEMI(loan.principal, loan.apr, termMonths);
		const loansCopy = [
			...loans.filter((e) => e !== loan),
			{ ...loan, termMonths: termMonths, emi: emi },
		];

		setLoans(loansCopy);
	};

	const handleAprChange = (e) => {
		let apr = parseInt(e.target.value);
        (isNaN(apr) || apr < 0) && (apr = 0);

        const emi = calculateLoanEMI(loan.principal, apr, loan.termMonths);
		const loansCopy = [
			...loans.filter((e) => e !== loan),
			{ ...loan, apr: apr, emi: emi },
		];

		setLoans(loansCopy);
	};

	return (
		<Grid item xs={6}>
			<Stack spacing={4}>
				<FormControl variant="filled">
					<InputLabel>Principal</InputLabel>
					<FilledInput
						startAdornment={
							<InputAdornment position="start">$</InputAdornment>
						}
                        value={loan.principal}
						onChange={(e) => {
							handlePrincipalChange(e);
						}}
					/>
				</FormControl>

				<FormControl variant="filled">
					<InputLabel>Months</InputLabel>
					<FilledInput
						endAdornment={
							<InputAdornment position="start">
								months
							</InputAdornment>
						}
                        value={loan.termMonths}
						onChange={(e) => {
							handleTermMonthsChange(e);
						}}
					/>
				</FormControl>

				<FormControl variant="filled">
					<InputLabel>APR</InputLabel>
					<FilledInput
						endAdornment={
							<InputAdornment position="start">%</InputAdornment>
						}
                        value={loan.apr}
						onChange={(e) => {
							handleAprChange(e);
						}}
					/>
				</FormControl>
			</Stack>
		</Grid>
	);
};

export default LoanForm;
