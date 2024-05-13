import React from "react";
import {
    Box,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

const Loans = (props) => {
    let { apr, setApr, termMonths, setTermMonths, loans, setLoans } = props;

    return (
        <Paper elevation={3} sx={{ p: "3vh 3vw", mb: "2vh" }}>
            <Typography variant="h2" pb="3vh">
                Student Loans
            </Typography>

            <Stack direction={{ xs: "column", lg: "row" }} spacing="3vw">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width={{ xs: "100%", lg: "50%"}}
                >
                    <Stack
                        spacing={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormControl variant="filled">
                            <InputLabel>Gross Annual Salary</InputLabel>
                            <FilledInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                defaultValue="15000"
                                onChange={(e) => {}}
                            />
                        </FormControl>

                        <FormControl variant="filled">
                            <InputLabel>Gross Annual Salary</InputLabel>
                            <FilledInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                defaultValue="15000"
                                onChange={(e) => {}}
                            />
                        </FormControl>

                        <FormControl variant="filled">
                            <InputLabel>Gross Annual Salary</InputLabel>
                            <FilledInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                defaultValue="15000"
                                onChange={(e) => {}}
                            />
                        </FormControl>
                    </Stack>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    width={{ xs: "100%", lg: "50%"}}
                >
                    <Stack
                        spacing={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        lorem ipsum
                    </Stack>
                </Box>
            </Stack>
        </Paper>
    );
};

export default Loans;
