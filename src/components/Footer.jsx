import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = (props) => {
	return (
		<Box
			sx={{
				bgcolor: "#07020d",
				display: "flex",
				flexDirection: "column",
				height: "10vh",
				textAlign: "center",
				justifyContent: "center",
			}}
		>
			<Typography variant="p" color="secondary.contrastText" >
				For the sake of transparency and open-source code, read the
				source code at{" "}
				<Link
					color="secondary.contrastText"
					href="https://github.com/KevinZhang2135/Personal-Finance"
				>
					github.com/KevinZhang2135/Personal-Finance
				</Link>
				.
			</Typography>
		</Box>
	);
};

export default Footer;
