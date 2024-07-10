import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
        black: {
            light: "#5a565e",
            main: "#47444b",
            dark: "#2a272e",
            contrastText: "#fff",
        },

        beige: { main: "#f9f6f0" },
    },

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
            fontSize: "1.2rem",
            fontWeight: 400,
        },

        h6: {
            fontSize: "0.8rem",
            fontWeight: 400,
        },

        p: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.8,
        },
    },
});

export default Theme;
