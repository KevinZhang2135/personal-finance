import { createTheme } from "@mui/material";

const Theme = createTheme({
	palette: {
		primary: {
            main: "#0dbf6f",
            contrast: '#f1e9db',
        },
		secondary: { 
            main: "#a39b8b",
            contrast: '#07020d',    
        },
	},

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
			fontWeight: 300,
		},

		em: {
            main: "0dbf6f",
			fontSize: "rem",
			fontWeight: 500,
		},
	},
});

export default Theme;