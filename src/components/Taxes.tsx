import React from "react";

const Taxes = (props) => {
    const brackets = {
        11000: 0.1,
        44725: 0.12,
        95375: 0.22,
        182100: 0.24,
        231250: 0.32,
        578125: 0.35,
    };
    
    return (
        <div className="tax-calculator container">
            <p>
                Tax rates were calculated using the 2023 tax brackets released
                by the IRS from{" "}
                <a href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets">
                    www.irs.gov/filing/federal-income-tax-rates-and-brackets
                </a>
                .
            </p>
        </div>
    );
};

export default Taxes;

/**
24%	$95,376	$182,100
32%	$182,101	$231,250
35%	$231,251	$578,125
37%	$578,126	And up
 */
