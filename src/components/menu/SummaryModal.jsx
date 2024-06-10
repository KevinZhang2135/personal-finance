import React from "react";
import { Box, Modal, Paper } from "@mui/material";
import { DescriptionIcon } from "@mui/icons-material";

const SummaryModal = (props) => {
    const { summaryOpen, handleSummaryClose } = props;

    //Styling
    const modalBoxSx = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        width: 0.8,
        height: 0.8,
    };

    return (
        <Modal open={summaryOpen} onClose={handleSummaryClose}>
            <Paper sx={modalBoxSx}>Summary</Paper>
        </Modal>
    );
};

export default SummaryModal;
