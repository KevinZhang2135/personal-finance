import { createTheme } from "@mui/material";

const Theme = createTheme({
	typography: {
		h1: {
			fontSize: "10vmin",
			fontWeight: 500,
		},

		h2: {
			fontSize: "1.6rem",
			fontWeight: 500,
		},

		h3: {
			fontSize: "1.2rem",
			fontWeight: 400,
		},

		p: {
			fontSize: "rem",
			fontWeight: 400,
		},
	},
});

export default Theme;
