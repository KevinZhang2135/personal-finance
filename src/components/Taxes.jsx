import React from "react";

const Taxes = (props) => {
    let { salary, setSalary } = props;

    // const calculateTax = (income) => {brackets};

    return (
        <div className="container-fluid">
            <div className="container-row">
                <div className="container-col col-2">
                    <h2>Gross Annual Salary</h2>
                    {props.salary}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="button khaki-border"
                            type="text"
                            defaultValue="15000"
                            placeholder="Enter income"
                            onChange={(e) => {
                                props.setSalary(parseInt(e.target.value));
                                calculateTax(parseInt(e.target.value) / 12);
                            }}
                        />
                    </form>

                    <h2>Gross Monthly Salary</h2>
                    <p>$lorem ipsum</p>

                    <h2>Monthly Tax Payment</h2>
                    <p>$lorem ipsum</p>
                </div>

                <div className="container-col col-2 khaki-border">
                    <p>
                        The US implements a progressive tax that steadily takes
                        a larger share of the gross salary as income increases.
                        While many other factors such as filing-status and
                        number of children influence the total federal tax paid,
                        all approximations will be based on a single filing status.
                        <br />
                        <br />
                        Tax rates were calculated using the 2023 tax brackets
                        released by the IRS from{" "}
                        <a href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets">
                            www.irs.gov/filing/federal-income-tax-rates-and-brackets
                        </a>
                        .
                    </p>
                </div>
            </div>
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
        182100: 0.22,
        231250: 0.35,
        578125: 0.37,
    };

    let totalTax = 0;
    for (let [key, taxRate] of Object.entries(brackets).reverse()) {
        const bracket = parseInt(key);

        if (annualSalary > bracket) {
            totalTax += (annualSalary - bracket) * taxRate;
            annualSalary -= annualSalary - bracket;
        }

    }
};

export default Taxes;
