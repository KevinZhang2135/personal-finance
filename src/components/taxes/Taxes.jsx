import React from "react";
import { Paper } from "@mui/material";
import IncomeForm from "./IncomeForm";
import StateForm from "./StateForm";

const Taxes = (props) => {
	let { salary, setSalary, taxes, setTaxes } = props;

	return (
		<div className="container-fluid bg-khaki text-align-center">
			<div className="container-row">
				<Paper
					className="container-col col-2"
					elevation={3}
					sx={{ margin: "0vh 1vw", padding: "0vh 5vw" }}
				>
					<IncomeForm
						salary={salary}
						setSalary={setSalary}
						setTaxes={setTaxes}
					></IncomeForm>

					<div className="container-row col">
						<div className="container-col col-3">
							<h2>Annual Federal Tax</h2>
							<p>${Math.round(taxes.federal)}</p>
						</div>

						<div className="container-col col-3">
							<h2>Annual FICA Tax</h2>
							<p>${Math.round(taxes.fica)}</p>
						</div>
					</div>

					<StateForm
						salary={salary}
						setSalary={setSalary}
						taxes={taxes}
						setTaxes={setTaxes}
					></StateForm>
				</Paper>

				<Paper
					className="container-col col-2"
					elevation={3}
					sx={{ margin: "0vh 1vw" }}
				>
					<p>
						The US implements a progressive tax that steadily takes
						a larger share of the gross salary as income increases.
						While many other factors such as filing-status and
						number of children influence the total federal tax paid,
						all approximations will be based on a single filing
						status.
						<br />
						<br />
						Tax rates were calculated using the 2023 tax brackets
						released by the IRS from{" "}
						<a href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets">
							www.irs.gov/filing/federal-income-tax-rates-and-brackets
						</a>
						.
					</p>
				</Paper>
			</div>
		</div>
	);
};

export default Taxes;
