import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = (props) => {
	return (
		<Box
			className="header parallax"
			sx={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				justifyContent: "center",
			}}
		>
			<Typography variant="h1">Personal finance done easy.</Typography>
		</Box>
	);
};

export default Banner;
