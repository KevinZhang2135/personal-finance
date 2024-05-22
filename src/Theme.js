import { createTheme } from "@mui/material";

const Theme = createTheme({
	typography: {
		h1: {
			fontSize: "2.5rem",
			fontWeight: 400,
			letterSpacing: 2,
		},

		h2: {
			fontSize: "2rem",
			fontWeight: 400,
		},

		h3: {
			fontSize: "1.6rem",
			fontWeight: 400,
		},

		h4: {
			fontSize: "1.4rem",
			fontWeight: 400,
		},

		h5: {
			fontSize: "1.4rem",
			fontWeight: 400,
		},

		p: {
			fontSize: "rem",
			fontWeight: 400,
			lineHeight: 2,
		},
	},
});

export default Theme;
