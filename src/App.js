import "./App.css";

import React, { useState } from "react";
import Banner from "./components/Banner.jsx";
import Taxes from "./components/Taxes.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	// $15,000 is the minimum wage salary set by US as of 2023
	let [salary, setSalary] = useState(15000);
	let [taxes, setTaxes] = useState([
		{
			federal: 0,
			state: 0,
			socialSecurityMedicaid: 0,
		},
	]);

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

export default App;
