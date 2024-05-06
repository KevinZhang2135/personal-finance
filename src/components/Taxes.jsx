import React from "react";

const Taxes = (props) => {
    let { salary, setSalary } = props;

    // const calculateTax = (income) => {brackets};

    return (
        <div className="container">
            <div className="container khaki-border">
                <div className="container">
                    <h2>Income Salary</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {props.salary}
                        <span>$</span>
                        <input
                            className="button khaki-border"
                            type="text"
                            defaultValue="15000"
                            placeholder="Enter income"
                            onChange={(e) => {
                                props.setSalary(e.target.value);
                                calculateTax(e.target.value);
                            }}
                        />
                    </form>
                </div>

                <p>
                    Tax rates were calculated using the 2023 tax brackets
                    released by the IRS from{" "}
                    <a href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets">
                        www.irs.gov/filing/federal-income-tax-rates-and-brackets
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

const calculateTax = (annualSalary) => {
    const brackets = {
        0: 0.1,
        11000: 0.12,
        44725: 0.12,
        95375: 0.24,
        182100: 0.22,
        231250: 0.35,
        578125: 0.37,
    };

    let totalTax = 0;
    for (let [key, taxRate] of Object.entries(brackets).reverse()) {
        console.log(annualSalary);
        const bracket = parseInt(key);
        if (annualSalary > brackets) {
            totalTax += (annualSalary - bracket) * taxRate;
            annualSalary -= annualSalary - bracket;
        }

        //

        // console.log(typeof bracket ,typeof  taxRate)
    }

    //console.log(totalTax);
};

export default Taxes;

/**
24%	$95,376	$182,100
32%	$182,101	$231,250
35%	$231,251	$578,125
37%	$578,126	And up
 */
