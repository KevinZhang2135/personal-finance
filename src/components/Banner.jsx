import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = (props) => {
	return (
		<Box className="header parallax">
			<Box
				className="overlay"
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					bgcolor: "rgba(0, 0, 0, 0.4)",
				}}
			>
				<Typography variant="h1" color="white" align="center">
					Personal finance done easy.
				</Typography>
			</Box>
		</Box>
	);
};
export default Banner;
