import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Footer = (props) => {
	return (
		<Box
			sx={{
				bgcolor: "#07020d",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				height: { xs: "15vh", md: "10vh" },
				px: 2,
				my: 4,
			}}
		>
			<Typography variant="p" color="whiteSmoke" align="center">
				For the sake of transparency and open-source code, read the
				source code at{" "}
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/KevinZhang2135/Personal-Finance"
					sx={{ color: "whiteSmoke" }}
				>
					github.com/KevinZhang2135/Personal-Finance
				</Link>
				.
			</Typography>
		</Box>
	);
};

export default Footer;
