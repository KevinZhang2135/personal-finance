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

    //Styling
    const modalBoxSx = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        width: 0.8,
        height: 0.8,
        p: 4,
    };

    const rowProps = {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    return (
        <Modal open={summaryOpen} onClose={handleSummaryClose}>
            <Paper sx={modalBoxSx}>
                <Stack {...rowProps} mb={4}>
                    <Typography variant="h2">Summary</Typography>
                    <IconButton
                        variant="text"
                        size="large"
                        onClick={handleSummaryClose}
                    >
                        <Close fontSize="large" />
                    </IconButton>
                </Stack>

                <Stack spacing={3} divider={<Divider />}>
                    <Stack {...rowProps}>
                        <Typography variant="h4">Monthly Salary</Typography>

                        <Typography variant="h4" color="primary">
                            {currencyFormatter(salary)}
                        </Typography>
                    </Stack>

                    {Object.keys(expenditures).map((key) => (
                        <Stack key={`summary-${key}`} {...rowProps}>
                            <Typography variant="h4">
                                {formatTitle(key)}
                            </Typography>

                            <Typography variant="h4" color="primary">
                                {currencyFormatter(-expenditures[key])}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Paper>
        </Modal>
    );
};

const formatTitle = (string) => {
    string = toTitleCase(string);
    return string.match(/[A-Z][a-z]+/g).join(" ");
};

export default SummaryModal;
