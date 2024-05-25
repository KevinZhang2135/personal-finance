import React from "react";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { brown } from "@mui/material/colors";

import Theme from "../../Theme";

const LoanInfo = (props) => {
	const infoItemWidth = { xs: 1, lg: 0.33 };

	return (
		<Stack
			className="loan-info"
			direction="row"
			sx={{
				justifyContent: "space-between",
				alignItems: "center",
				bgcolor: brown[400],
				pt: "5vh",
			}}
		>
			<Box sx={{ width: 0.5, display: "flex", bgcolor: "whitesmoke" }}>
			</Box>

			<Box sx={{ width: 0.5, display: "flex", bgcolor: "black" }}>
			</Box>
		</Stack>
	);
};

export default LoanInfo;
