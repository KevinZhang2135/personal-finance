import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = (props) => {
	return (
		<Box
			sx={{
				bgcolor: "#07020d",
				minHeight: "2.5vmin",
				justifyContent: "center",
			}}
		>
            hello
			<Typography
				variant="p"
                color="secondary.contrastText"
				sx={{
					textAlign: "center",
					justifyContent: "center",
				}}
			>
				For the sake of transparency and open-source code, read the
				source code at{" "}
				<Link href="https://github.com/KevinZhang2135/Personal-Finance">
					github.com/KevinZhang2135/Personal-Finance
				</Link>
				.
			</Typography>
		</Box>
	);
};

export default Footer;
