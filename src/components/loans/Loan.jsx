import React from "react";
import {
    Button,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    Stack,
    Typography,
} from "@mui/material";

import { Clear } from "@mui/icons-material";

const Loan = (props) => {
    const { loan, loans, setLoans } = props;

    const columnWidth = 6;

    return (
        <React.Fragment>
            <Grid item xs={columnWidth * 2} lg={columnWidth}>
                <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    sx={{
                        border: 1,
                        borderColor: "primary.main",
                        borderRadius: 1,
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Grid item xs={6}>
                        <Stack spacing={4}>
                            <FormControl variant="filled">
                                <InputLabel>Principal</InputLabel>
                                <FilledInput
                                    startAdornment={
                                        <InputAdornment position="start">
                                            $
                                        </InputAdornment>
                                    }
                                    defaultValue="0"
                                    onChange={(e) => {}}
                                />
                            </FormControl>
                            <FormControl variant="filled">
                                <InputLabel>APR</InputLabel>
                                <FilledInput
                                    endAdornment={
                                        <InputAdornment position="start">
                                            %
                                        </InputAdornment>
                                    }
                                    defaultValue="6"
                                    onChange={(e) => {}}
                                />
                            </FormControl>
                            <FormControl variant="filled">
                                <InputLabel>Months</InputLabel>
                                <FilledInput
                                    endAdornment={
                                        <InputAdornment position="start">
                                            months
                                        </InputAdornment>
                                    }
                                    defaultValue="60"
                                    onChange={(e) => {}}
                                />
                            </FormControl>
                        </Stack>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        display="flex"
						flexDirection="column"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
						<Typography variant="p">lorem ipsum</Typography>

                        <Button
                            variant="contained"
                            startIcon={<Clear fontSize="large" />}
                            color="error"
                            size="large"
                            onClick={() => {
                                setLoans(loans.filter((e) => e !== loan));
                            }}
                        >
                            <Typography variant="p">REMOVE</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Loan;
