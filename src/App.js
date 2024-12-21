import "./App.css";

import React, { useState } from "react";
import { blue } from "@mui/material/colors";

// UI
import MenuBar from "./components/menu/MenuBar.jsx";
import SummaryModal from "./components/menu/SummaryModal.jsx";

// Call-to-action
import Banner from "./components/Banner.jsx";

// Taxes
import TaxInfo from "./components/taxes/TaxInfo.jsx";
import TaxForm from "./components/taxes/TaxForm.jsx";

// Student Loans
import StudentLoansInfo from "./components/studentLoans/StudentLoansInfo.jsx";
import Loans from "./components/loans/Loans.jsx";

// Retirement
import RetirementInfo from "./components/retirement/RetirementInfo.jsx";

// Housing
import HousingInfo from "./components/housing/HousingInfo.jsx";
import HousingForm from "./components/housing/HousingForm.jsx";

// Transportation
import TransportationInfo from "./components/transportation/TransportationInfo.jsx";
import TransportationForm from "./components/transportation/TransportationForm.jsx";

// Food
import FoodInfo from "./components/food/FoodInfo.jsx";

// Health Insurance
import HealthInsuranceInfo from "./components/healthInsurance/HealthInsuranceInfo.jsx";

// Misc
import PersonalExpensesInfo from "./components/misc/PersonalExpensesInfo.jsx";
import PersonalExpenses from "./components/misc/PersonalExpenses.jsx";

import Citations from "./components/Citations.jsx";
import Footer from "./components/Footer.jsx";
import PersonalLoansInfo from "./components/misc/PersonalLoansInfo.jsx";

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
    { name: "Transportation", id: "transportation-info" },
    { name: "Food", id: "food-info" },
    { name: "Health Insurance", id: "health-insurance-info" },
    { name: "Misc", id: "misc-info" },
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
        rent: { cost: 0, insurance: 0, utilities: 0 },
        mortgage: {
            cost: { principal: 0, termMonths: 360, apr: 0.06, emi: 0 },
            insurance: 0,
            utilities: 0,
        },
    });

    // Transportation
    const [carPlanType, setCarPlanType] = useState("loan");
    const [carCost, setCarCost] = useState({
        loan: {
            cost: { principal: 0, termMonths: 60, apr: 0.06, emi: 0 },
            gas: 0,
            maintenance: 0,
            insurance: 0,
        },
        lease: {
            cost: 0,
            gas: 0,
            maintenance: 0,
            insurance: 0,
        },
    });

    const [publicTransitCost, setPublicTransitCost] = useState(0);

    // Food
    const [foodCost, setFoodCost] = useState({
        groceries: 0,
        eatingOut: 0,
    });

    // Health Insurance
    const [healthInsuranceCost, setHealthInsuranceCost] = useState({
        premium: 0,
        deductibleSavings: 0,
    });

    // Misc expenditures
    const [miscExpenses, setMiscExpenses] = useState([]);
    const [miscLoans, setMiscLoans] = useState([]);

    // Totals
    const expenditures = {
        taxes: (taxes.federal + taxes.state + taxes.fica) / 12,
        studentLoans: studentLoans
            .filter((loan) => isFinite(loan.emi))
            .reduce((sum, loan) => sum + loan.emi, 0),
        retirement,
        housing:
            (housingType === "rent"
                ? housingCost.rent.cost
                : housingCost.mortgage.cost.emi) +
            housingCost[housingType].insurance +
            housingCost[housingType].utilities,
        transportation:
            (carPlanType === "loan"
                ? carCost.loan.cost.emi
                : carCost.lease.cost) +
            carCost[carPlanType].gas +
            carCost[carPlanType].maintenance +
            carCost[carPlanType].insurance +
            publicTransitCost,
        food: foodCost.groceries + foodCost.eatingOut,
        healthInsurance:
            healthInsuranceCost.premium + healthInsuranceCost.deductibleSavings,
        personalExpenses:
            miscExpenses.reduce((sum, expense) => sum + expense.amount, 0) +
            miscLoans
                .filter((loan) => isFinite(loan.emi))
                .reduce((sum, loan) => sum + loan.emi, 0),
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

            <StudentLoansInfo
                studentLoans={studentLoans}
                setStudentLoans={setStudentLoans}
            />
            <Loans loans={studentLoans} setLoans={setStudentLoans} />

            <RetirementInfo
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

            <TransportationInfo />
            <TransportationForm
                carPlanType={carPlanType}
                setCarPlanType={setCarPlanType}
                carCost={carCost}
                setCarCost={setCarCost}
                publicTransitCost={publicTransitCost}
                setPublicTransitCost={setPublicTransitCost}
            />

            <FoodInfo foodCost={foodCost} setFoodCost={setFoodCost} />

            <HealthInsuranceInfo
                healthInsuranceCost={healthInsuranceCost}
                setHealthInsuranceCost={setHealthInsuranceCost}
            />

            <PersonalExpensesInfo
                miscExpenses={miscExpenses}
                setMiscExpenses={setMiscExpenses}
            />
            <PersonalExpenses
                miscExpenses={miscExpenses}
                setMiscExpenses={setMiscExpenses}
            />
            <PersonalLoansInfo
                miscLoans={miscLoans}
                setMiscLoans={setMiscLoans}
            />
            <Loans
                loans={miscLoans}
                setLoans={setMiscLoans}
                bgcolor={blue[50]}
            />

            <Citations />
            <Footer />
        </React.Fragment>
    );
};

/**
 * Capitalizes the first character and any characters proceding a non-character
 * in the specified string.
 * @param {string} string The specified string
 * @returns A string with words capitalized
 */
const toTitleCase = (string) => {
    return string
        .toLowerCase()
        .replace(/(^.)|(\W.)/g, (char) => char.toUpperCase());
};

/**
 * Formats the specified float into a string in US currency.
 * @param {number} float The specified float
 * @returns A string representing the float in US currency
 */
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
}).format;

/**
 * Returns the specified number if it is greater or equal to zero; zero
 * otherwise.
 * @param {number} value The specified number
 * @returns the specified number if it is greater or equal to zero; zero
 *     otherwise
 */
const positiveClamp = (value) => {
    const clampedInteger = Math.min(
        Math.max(0, value),
        Number.MAX_SAFE_INTEGER
    );

    return Number.isNaN(clampedInteger) ? 0 : clampedInteger;
};

/**
 * Returns the total annual tax for the specified salary according to the region
 * of taxation with a single filing status.
 * @param {number} annualSalary The specified annual salary
 * @param {string} region The region of taxation which is either specified as
 *     "federal" or the state name
 * @returns The total annual tax for the specified salary according to the
 *     region of taxation.
 */
const calculateTax = (annualSalary, region) => {
    let totalTax = 0;
    if (region === "federal")
        // Additional federal tax of $90 per $10,000 of income earned above $200,000
        totalTax = (Math.max(0, annualSalary - 200000) * 90) / 10000;

    // Deducts tax exemption
    annualSalary = Math.max(0, annualSalary - taxBrackets[region].deduction);

    // Adds taxes according to brackets
    for (let [key, taxRate] of Object.entries(
        taxBrackets[region].brackets
    ).reverse()) {
        const bracket = parseInt(key);

        if (annualSalary > bracket) {
            totalTax += (annualSalary - bracket) * taxRate;
            annualSalary -= annualSalary - bracket;
        }
    }

    // Reduces tax with credits
    return totalTax - taxBrackets[region].credits;
};

/**
 * Returns the monthly loan payment based on Equated Monthy Installment (EMI).
 * @param {number} principal The specified principal or initial loan amount
 * @param {number} apr The specified annual percentage rate for interest
 * @param {number} termMonths The number of months used to pay back the loan
 * @returns
 */
const calculateLoanEMI = (principal, apr, termMonths) => {
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
    toTitleCase,
    currencyFormatter,
    positiveClamp,
    calculateTax,
    calculateLoanEMI,
};
