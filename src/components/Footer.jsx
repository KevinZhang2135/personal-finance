import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = (props) => {
	return (
		<Box
			sx={{
				bgcolor: "#07020d",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				p: "5vh 10vw",
			}}
		>
			<Typography variant="p" color="whiteSmoke" align="center">
				For the sake of transparency and open-source code, read the
				source code at{" "}
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.github.com/KevinZhang2135/Personal-Finance"
					sx={{ color: "whiteSmoke" }}
				>
					https://www.github.com/KevinZhang2135/Personal-Finance
				</Link>
				.
			</Typography>
		</Box>
	);
};

export default Footer;
