import "./App.css";
import Banner from "./components/Banner.tsx";
import Taxes from "./components/Taxes.tsx";

const App = () => {
    return (
        <body>
            <Banner />
            <div className="introduction container">
                <p>
                    According to CNBC and Forbes, more than <em>60%</em> of
                    Americans live paycheck to paycheck in 2023.
                </p>
            </div>

            <div className="calculators">
                <Taxes />
            </div>
        </body>
    );
};

export default App;
