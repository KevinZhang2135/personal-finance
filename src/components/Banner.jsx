import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = (props) => {
	return (
		<Box className="banner parallax">
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
				<Typography
					sx={{
						textAlign: "center",
						color: "white",
						fontSize: "10vmin",
						fontWeight: 500,
					}}
				>
					Personal finance done easy.
				</Typography>
			</Box>
		</Box>
	);
};
export default Banner;
