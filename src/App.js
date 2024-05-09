import "./App.css";
import taxBrackets from "./res/taxBrackets.json";

import React, { useState } from "react";
import Banner from "./components/Banner.jsx";
import Taxes from "./components/taxes/Taxes.jsx";
import Footer from "./components/Footer.jsx";

import { Box, Typography } from "@mui/material";

const App = () => {
	// $15,000 is the minimum wage salary set by US as of 2023
	let [salary, setSalary] = useState(15000);
	let [state, setState] = useState("california");

	let [taxes, setTaxes] = useState({
		federal: calculateTax(salary, "federal"),
		state: calculateTax(salary, state),
		fica: salary * 0.0765,
	});

	return (
		<Box>
			<Banner />
			<div className="introduction container-fluid">
				<Typography variant="h2" textAlign="center">
					According to CNBC and Forbes, more than 60% of Americans
					live paycheck to paycheck in 2023. <>Let's change that.</>
				</Typography>
			</div>

			
			<Taxes
				salary={salary}
				setSalary={setSalary}
				taxes={taxes}
				setTaxes={setTaxes}
			/>
			

			<Footer />
		</Box>
	);
};

const calculateTax = (annualSalary, type) => {
	let totalTax = 0;

	if (type === "federal")
		// additional tax of $90 per $10,000 of income earned above $200,000
		totalTax = (Math.max(0, annualSalary - 200000) * 90) / 10000;

	// deducts tax exemption with a single filing status
	annualSalary = Math.max(0, annualSalary - taxBrackets[type].deduction);

	for (let [key, taxRate] of Object.entries(
		taxBrackets[type].brackets
	).reverse()) {
		const bracket = parseInt(key);

		if (annualSalary > bracket) {
			totalTax += (annualSalary - bracket) * taxRate;
			annualSalary -= annualSalary - bracket;
		}
	}

	// reduces tax with credits with a single filing status
	return totalTax - taxBrackets[type].credits;
};

export default App;
export { calculateTax };
