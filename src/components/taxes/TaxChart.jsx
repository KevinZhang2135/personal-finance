import React from "react";
import { Box } from "@mui/material";
import { PieChart, mangoFusionPalette } from "@mui/x-charts";

import { currencyFormatter } from "../../App";

const TaxChart = (props) => {
    const { salary, taxes } = props;

    const netSalary = salary - taxes.federal - taxes.fica - taxes.state;
    const data = [
        { value: taxes.federal / 12, label: "Federal" },
        { value: taxes.fica / 12, label: "FICA" },
        { value: taxes.state / 12, label: "State" },
        { value: netSalary / 12, label: "Net Salary" },
    ];

    return (
        <Box display={{xs: "none", md:"flex"}} justifyContent="center">
            <PieChart
                colors={mangoFusionPalette}
                series={[
                    {
                        data,
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 0.5,
                        cornerRadius: 5,
                        valueFormatter: ({ value }) => currencyFormatter(value),
                    },
                ]}
                width={400}
                height={200}
            />
        </Box>
    );
};

export default TaxChart;
