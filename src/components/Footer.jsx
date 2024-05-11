import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = (props) => {
	return (
		<Box
			sx={{
				bgcolor: "#07020d",
				display: "flex",
				flexDirection: "column",
				height: { xs: "15vh", md: "10vh" },
				justifyContent: "center",
				px: "2%",
			}}
		>
			<Typography variant="p" color="primary.contrast" align="center">
				For the sake of transparency and open-source code, read the
				source code at{" "}
				<Link
					color="primary.contrast"
					target="_blank"
					rel="noopener noreferrer"
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
