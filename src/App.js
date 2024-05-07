import "./App.css";

import React, { useState } from "react";
import Banner from "./components/Banner.jsx";
import Taxes from "./components/Taxes.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	// $15,000 is the minimum wage salary set by US as of 2023
	let [salary, setSalary] = useState(15000);
	let [taxes, setTaxes] = useState(
		{
			federal: calculateTax(salary),
			state: 0,
			socialSecurityMedicaid: 0,
		},
	);

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

const calculateTax = (annualSalary) => {
    const brackets = {
        // lower bracket: tax rate
        0: 0.1,
        11000: 0.12,
        44725: 0.22,
        95375: 0.24,
        182100: 0.32,
        231250: 0.35,
        578125: 0.37,
    };

    // $13850 is the tax exemption with a single filing status
    annualSalary = Math.max(0, annualSalary - 13850);

    let totalTax = 0;
    for (let [key, taxRate] of Object.entries(brackets).reverse()) {
        const bracket = parseInt(key);

        if (annualSalary > bracket) {
            totalTax += (annualSalary - bracket) * taxRate;
            annualSalary -= annualSalary - bracket;
        }
    }

    return totalTax;
};

export default App;
export {calculateTax};
