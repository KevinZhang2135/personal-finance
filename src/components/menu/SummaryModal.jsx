import React from "react";
import {
    Divider,
    IconButton,
    Modal,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { Close } from "@mui/icons-material";
import { currencyFormatter, toTitleCase } from "../../App";

const SummaryModal = (props) => {
    const { salary, expenditures, summaryOpen, handleSummaryClose } = props;

    // Styling
    const scrollGutterWidth = 2;
    const modalBoxSx = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 0.8,
        height: 0.8,
        p: 4,
        pl: 4 + scrollGutterWidth,
    };

    const rowProps = {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const netSalary =
        salary -
        Object.values(expenditures).reduce((sum, cost) => sum + cost, 0);

    const divider = <Divider sx={{ my: 4, mr: scrollGutterWidth }} />;

    return (
        <Modal open={summaryOpen} onClose={handleSummaryClose}>
            <Paper elevation={0} sx={modalBoxSx}>
                <Stack {...rowProps} mb={4}>
                    <Typography variant="h2">Summary</Typography>
                    <IconButton
                        variant="text"
                        size="large"
                        onClick={handleSummaryClose}
                    >
                        <Close fontSize="normal" />
                    </IconButton>
                </Stack>

                <Stack {...rowProps}>
                    <Typography variant="h4">Monthly Salary</Typography>

                    <Typography
                        variant="h4"
                        color="primary"
                        mr={scrollGutterWidth}
                    >
                        {currencyFormatter(salary)}
                    </Typography>
                </Stack>

                {divider}
                <Stack
                    spacing={4}
                    divider={<Divider />}
                    sx={{
                        overflow: "auto",
                        flexGrow: 1,
                        pr: scrollGutterWidth,
                    }}
                >
                    {Object.keys(expenditures).map(
                        (key) =>
                            expenditures[key] !== 0 && (
                                <Stack key={`summary-${key}`} {...rowProps}>
                                    <Typography variant="h4">
                                        {formatTitle(key)}
                                    </Typography>

                                    <Typography variant="h4">
                                        {currencyFormatter(-expenditures[key])}
                                    </Typography>
                                </Stack>
                            )
                    )}
                </Stack>

                {divider}
                <Stack {...rowProps}>
                    <Typography variant="h3">Net</Typography>

                    <Typography
                        variant="h3"
                        color={netSalary >= 0 ? "success.main" : "error.main"}
                        mr={scrollGutterWidth}
                    >
                        {currencyFormatter(netSalary)}
                    </Typography>
                </Stack>
            </Paper>
        </Modal>
    );
};

const formatTitle = (string) => {
    string = toTitleCase(string);
    if (string.length === 1) return string;
    return string.match(/[A-Z][a-z]+/g).join(" ");
};

export default SummaryModal;
