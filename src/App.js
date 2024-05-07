import "./App.css";
import taxBrackets from "./res/taxBrackets.json";

import React, { useState } from "react";
import Banner from "./components/Banner.jsx";
import Taxes from "./components/taxes/Taxes.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	// $15,000 is the minimum wage salary set by US as of 2023
	let [salary, setSalary] = useState(15000);
	let [taxes, setTaxes] = useState({
		federal: calculateTax(salary, "federal"),
		state: 0,
		socialSecurityMedicaid: 0,
	});

	// let [state, setState] = useState("california");

	return (
		<div>
			<Banner />
			<div className="introduction container-fluid">
				<p>
					According to CNBC and Forbes, more than 60% of Americans
					live paycheck to paycheck in 2023.{" "}
					<em>Let's change that.</em>
				</p>
			</div>

			<div className="calculators">
				<Taxes
					salary={salary}
					setSalary={setSalary}
					taxes={taxes}
					setTaxes={setTaxes}
				/>
			</div>

			<Footer />
		</div>
	);
};

const calculateTax = (annualSalary, type) => {
	// additional tax of $90 per $10,000 of income earned above $200,000
	let totalTax = (Math.max(0, annualSalary - 200000) * 90) / 10000;

	// $13850 is the tax exemption with a single filing status
	annualSalary = Math.max(0, annualSalary - 13850);

	for (let [key, taxRate] of Object.entries(taxBrackets[type]).reverse()) {
		const bracket = parseInt(key);

		if (annualSalary > bracket) {
			totalTax += (annualSalary - bracket) * taxRate;
			annualSalary -= annualSalary - bracket;
		}
	}

	return totalTax;
};

export default App;
export { calculateTax };
