import React from "react";
import { Box, Paper } from "@mui/material";
import { BarChart, mangoFusionPalette } from "@mui/x-charts";

import { currencyFormatter } from "../../App";

const TaxChart = (props) => {
    const { salary, taxes } = props;

    const netSalary = salary - taxes.federal - taxes.fica - taxes.state;
    const chartSeries = [
        { data: [taxes.federal / 12], label: "Federal" },
        { data: [taxes.fica / 12], label: "FICA" },
        { data: [taxes.state / 12], label: "State" },
        { data: [netSalary / 12], label: "Net Salary" },
    ];

    return (
        <Box
            className="tax-chart"
            sx={{
                display: { xs: "none", md: "flex" },
                bgcolor: "beige.main",
                px: "10vw",
                pb: "5vh",
            }}
        >
            <Paper elevation={3} sx={{ width: 1, p: 4 }}>
                <BarChart
                    className="salary-breakdown"
                    height={300}
                    series={chartSeries.map((series, i) => ({
                        ...series,
                        stack: "total",
                        valueFormatter: (value) => currencyFormatter(value),
                    }))}
                    layout="horizontal"
                    grid={{ vertical: true }}
                    colors={mangoFusionPalette}
                    xAxis={[{ label: "Monthy Salary Breakdown in USD" }]}
                    yAxis={[
                        {
                            scaleType: "band",
                            data: ["Monthly Salary Breakdown"],
                        },
                    ]}
                    leftAxis={null}
                    mb={4}
                />
            </Paper>
        </Box>
    );
};

export default TaxChart;
