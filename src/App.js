import "./App.css";

import React, { useState } from "react";

// UI
import MenuBar from "./components/menu/MenuBar.jsx";
import SummaryModal from "./components/menu/SummaryModal.jsx";

// Call-to-action
import Banner from "./components/Banner.jsx";

// Taxes
import TaxInfo from "./components/taxes/TaxInfo.jsx";
import TaxForm from "./components/taxes/TaxForm.jsx";
import TaxChart from "./components/taxes/TaxChart.jsx";

// Student Loans
import StudentLoansInfo from "./components/loans/StudentLoansInfo.jsx";
import Loans from "./components/loans/Loans.jsx";

// Retirement
import Retirement from "./components/retirement/Retirement.jsx";

// Housing
import HousingInfo from "./components/housing/HousingInfo.jsx";
import HousingForm from "./components/housing/HousingForm.jsx";

// Health Insurance
import HealthInsuranceInfo from "./components/healthInsurance/HealthInsuranceInfo.jsx";

import Citations from "./components/Citations.jsx";
import Footer from "./components/Footer.jsx";

// JSON resources
const taxBrackets = await (
    await fetch("taxBrackets.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
).json();

const anchorLinks = [
    { name: "Taxes", id: "tax-info" },
    { name: "Student Loans", id: "loan-info" },
    { name: "Retirement", id: "retirement-info" },
    { name: "Housing", id: "housing-info" },
];

const App = () => {
    // $15,000 is the minimum wage salary set by US as of 2023
    const [salary, setSalary] = useState(15000);

    /* Expenditures */
    // California is the most populous US state as of 2023
    const [state, setState] = useState("california");
    const [taxes, setTaxes] = useState({
        federal: calculateTax(salary, "federal"),
        state: calculateTax(salary, state),
        fica: salary * 0.0765,
    });

    // Education
    const [studentLoans, setStudentLoans] = useState([]);

    // Retirement
    const [retirement, setRetirement] = useState(0);

    // Housing
    const [housingType, setHousingType] = useState("rent");
    const [housingCost, setHousingCost] = useState({
        rent: { cost: 0, insurance: 0 },
        mortgage: {
            cost: { principal: 0, termMonths: 360, apr: 0.06, emi: 0 },
            insurance: 0,
        },
        utilities: 0,
    });

    // Misc expenditures
    const [loans, setLoans] = useState([]);

    // Totals
    const expenditures = {
        taxes: (taxes.federal + taxes.state + taxes.fica) / 12,
        studentLoans: studentLoans
            .filter((loan) => isFinite(loan.emi))
            .reduce((sum, loan) => sum + loan.emi, 0),
        retirement,
    };

    /* Summary modal */
    const [summaryOpen, setSummaryOpen] = React.useState(false);
    const handleSummaryOpen = () => setSummaryOpen(true);
    const handleSummaryClose = () => setSummaryOpen(false);

    return (
        <React.Fragment>
            <MenuBar handleSummaryOpen={handleSummaryOpen} />
            <SummaryModal
                salary={salary / 12}
                expenditures={expenditures}
                summaryOpen={summaryOpen}
                handleSummaryClose={handleSummaryClose}
            />

            <Banner />

            <TaxInfo />
            <TaxForm
                salary={salary}
                setSalary={setSalary}
                state={state}
                setState={setState}
                taxes={taxes}
                setTaxes={setTaxes}
            />
            <TaxChart salary={salary} taxes={taxes} />

            <StudentLoansInfo
                studentLoans={studentLoans}
                setStudentLoans={setStudentLoans}
            />
            <Loans loans={studentLoans} setLoans={setStudentLoans} />

            <Retirement
                retirement={retirement}
                setRetirement={setRetirement}
                salary={salary}
            />

            <HousingInfo />
            <HousingForm
                housingType={housingType}
                setHousingType={setHousingType}
                housingCost={housingCost}
                setHousingCost={setHousingCost}
            />

            <Citations />
            <Footer />
        </React.Fragment>
    );
};

const toTitleCase = (string) => {
    // Capitalizes the first character and any characters proceding a non-character
    return string.replace(/(^.)|(\W.)/g, (char) => char.toUpperCase());
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
}).format;

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
export {
    taxBrackets,
    anchorLinks,
    currencyFormatter,
    toTitleCase,
    calculateTax,
    calculateLoanEMI,
};
