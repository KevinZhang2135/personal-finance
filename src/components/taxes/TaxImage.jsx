import React from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

const TaxImage = () => {
	return (
		<Box
			className="tax-image"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: blue[50],
				px: "10vw",
				py: "5vh",
			}}
		>
			<img
				src={"Personal-Finance/incomeTax.svg"}
				alt="Income tax brackets"
			/>
		</Box>
	);
};

export default TaxImage;
