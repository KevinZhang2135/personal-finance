import React from "react";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { blue } from "@mui/material/colors";

import Theme from "../../Theme";

const TaxInfo = (props) => {
	const infoItemWidth = { xs: 1, lg: 0.33 };

	return (
		<Box
			className="tax-info"
			sx={{ bgcolor: blue[50], px: "10vw", pt: "5vh" }}
		>
			<Typography variant="h1" textAlign="center" mb={4}>
				Taxes
			</Typography>

			<Stack
				direction={{ xs: "column", lg: "row" }}
				alignItems="stretch"
				justifyContent="space-between"
				useFlexGap
				divider={
					<Divider
						orientation={
							useMediaQuery(Theme.breakpoints.down("lg"))
								? "horizontal"
								: "vertical"
						}
						flexItem
					/>
				}
				spacing={4}
			>
				<Box width={infoItemWidth}>
					<Typography variant="h3" gutterBottom>
						Federal Taxes
					</Typography>
					<Typography variant="p">
						The US federal government implements a progressive tax
						that steadily takes a larger share of the gross salary
						as income increases. Hence, to help the impoverished,
						they deduct $13,850 of the taxable income as a tax break
						and levy an additional tax of $90 per $10,000 of gross
						income earned above $200,000.
					</Typography>
				</Box>

				<Box width={infoItemWidth}>
					<Typography variant="h3" gutterBottom>
						FICA Taxes
					</Typography>
					<Typography variant="p">
						To fund Social Security and Medicaid, the government
						also automatically deducts a combined flat rate 7.65% of
						the payroll known as the Federal Insurance Contributions
						Act.
					</Typography>
				</Box>

				<Box width={infoItemWidth}>
					<Typography variant="h3" gutterBottom>
						State Taxes
					</Typography>
					<Typography variant="p">
						The separate states of the US also levy an income tax,
						though it varies from state to state. While some states
						imitate the federal tax and create progressive brackets
						on their own, others implement a flat income tax rate or
						none at all.
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
};

export default TaxInfo;
