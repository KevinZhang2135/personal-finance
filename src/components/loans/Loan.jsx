import React from "react";
import {
	Button,
	FilledInput,
	FormControl,
	InputAdornment,
	InputLabel,
	Stack,
	Typography,
} from "@mui/material";

import { Clear } from "@mui/icons-material";

const Loan = (props) => {
	return (
		<Stack
			spacing={4}
			direction={{ xs: "column", md: "row" }}
			justifyContent="center"
			alignItems="center"
		>
			<FormControl variant="filled">
				<InputLabel>Principal</InputLabel>
				<FilledInput
					startAdornment={
						<InputAdornment position="start">$</InputAdornment>
					}
					defaultValue="0"
					onChange={(e) => {}}
				/>
			</FormControl>
			<FormControl variant="filled">
				<InputLabel>APR</InputLabel>
				<FilledInput
					endAdornment={
						<InputAdornment position="start">%</InputAdornment>
					}
					defaultValue="6"
					onChange={(e) => {}}
				/>
			</FormControl>
			<FormControl variant="filled">
				<InputLabel>Months</InputLabel>
				<FilledInput
					endAdornment={
						<InputAdornment position="start">months</InputAdornment>
					}
					defaultValue="60"
					onChange={(e) => {}}
				/>
			</FormControl>
			<Button
				variant="contained"
				startIcon={<Clear fontSize="large" />}
				color="error"
				size="large"
				onClick={() => {}}
			>
				<Typography variant="p">REMOVE</Typography>
			</Button>
		</Stack>
	);
};

export default Loan;
