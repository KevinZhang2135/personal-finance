import React from "react";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { brown } from "@mui/material/colors";

import Theme from "../../Theme";

const LoanInfo = (props) => {
	const infoItemWidth = { xs: 1, lg: 0.33 };

	return (
		<Box
			className="loan-info"
			sx={{ bgcolor: brown[400], px: "10vw", pt: "5vh" }}
		>
			
		</Box>
	);
};

export default LoanInfo;
