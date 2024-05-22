import "./App.css";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Loans from "./components/loans/Loans.jsx";
import TaxInfo from "./components/taxes/TaxInfo.jsx";
import TaxForm from "./components/taxes/TaxForm.jsx";
import TaxImage from "./components/taxes/TaxImage.jsx";

const taxBrackets = await (
	await fetch("taxBrackets.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
).json();

const App = () => {
	// $15,000 is the minimum wage salary set by US as of 2023
	const [salary, setSalary] = useState(15000);

	// California is the most populous US state as of 2023
	const [state, setState] = useState("california");
	const [taxes, setTaxes] = useState({
		federal: calculateTax(salary, "federal"),
		state: calculateTax(salary, state),
		fica: salary * 0.0765,
	});

	const [loans, setLoans] = useState([]);

	return (
		<Box>
			<Banner />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					p: "5vh 10vw",
				}}
			>
				<Typography variant="h2" textAlign="center">
					According to CNBC and Forbes, more than 60% of Americans
					live paycheck to paycheck in 2023.{" "}
					<em>Let's change that.</em>
				</Typography>
			</Box>

			<TaxInfo />
			<TaxForm
				salary={salary}
				setSalary={setSalary}
				state={state}
				setState={setState}
				taxes={taxes}
				setTaxes={setTaxes}
			/>
			<TaxImage />

			<Footer />
		</Box>
	);
};

const toTitleCase = (string) => {
	// Capitalizes the first character and any characters proceding a non-character
	return string.replace(/(^.)|(\W.)/g, (char) => char.toUpperCase());
};

const calculateTax = (annualSalary, type) => {
	// Determines the total taxes for a region with a single filing status
	let totalTax = 0;

	if (type === "federal")
		// Additional federal tax of $90 per $10,000 of income earned above $200,000
		totalTax = (Math.max(0, annualSalary - 200000) * 90) / 10000;

	// Deducts tax exemption
	annualSalary = Math.max(0, annualSalary - taxBrackets[type].deduction);

	// Adds taxes according to brackets
	for (let [key, taxRate] of Object.entries(
		taxBrackets[type].brackets
	).reverse()) {
		const bracket = parseInt(key);

		if (annualSalary > bracket) {
			totalTax += (annualSalary - bracket) * taxRate;
			annualSalary -= annualSalary - bracket;
		}
	}

	// Reduces tax with credits
	return totalTax - taxBrackets[type].credits;
};

const calculateLoanEMI = (principal, apr, termMonths) => {
	// Calculates monthly payment based on the equated monthly installment (EMI) formula

	const frequency = 12; // compounded monthly
	const interestRate = apr / frequency; // monthly interest rate

	return (
		(principal * interestRate * Math.pow(1 + interestRate, termMonths)) /
		(Math.pow(1 + interestRate, termMonths) - 1)
	);
};

export default App;
export { toTitleCase, calculateTax, calculateLoanEMI, taxBrackets };
