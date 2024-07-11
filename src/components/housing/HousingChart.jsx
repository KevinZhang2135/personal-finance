import React from "react";
import { Box } from "@mui/material";
import { LineChart, axisClasses, chartsGridClasses } from "@mui/x-charts";

import { currencyFormatter } from "../../App";

// Parses CSV resources
const AspusCsv = (
    await (
        await fetch("aspus2019-2023.csv", {
            headers: {
                "Content-Type": "text/csv",
                Accept: "text/csv",
            },
        })
    ).text()
)
    .split("\n")
    .map((line) => line.split(","));

const aspusPoints = {
    x: AspusCsv.map(([x, y]) => new Date(x + "T00:00:00")),
    y: AspusCsv.map(([x, y]) => y),
};

const HousingChart = (props) => {
    return (
        <Box
            id="housing-chart"
            display="flex"
            justifyContent="center"
            width={{ xs: 1, lg: 0.5 }}
        >
            <LineChart
                width={600}
                height={300}
                margin={{ top: 5, right: 10, bottom: 20, left: 80 }}
                xAxis={[
                    {
                        data: aspusPoints.x,
                        scaleType: "time",
                        valueFormatter: dateFormatter,
                    },
                ]}
                yAxis={[{ min: 0 }]}
                series={[
                    {
                        data: aspusPoints.y,
                        scaleType: "linear",
                        valueFormatter: currencyFormatter,
                    },
                ]}
                leftAxis={{ label: "Average Home Sales Price in USD" }}
                grid={{ horizontal: true }}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: "translateX(-40px)",
                    },
                    [`& .${chartsGridClasses.line}`]: {
                        strokeDasharray: "5 3",
                        strokeWidth: 2,
                    },
                }}
            />
        </Box>
    );
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
}).format;

export default HousingChart;
