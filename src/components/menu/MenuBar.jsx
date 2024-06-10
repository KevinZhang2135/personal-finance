import React, { Fragment } from "react";

import { useMediaQuery } from "@mui/material";
import Theme from "../../Theme";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SummaryModal from "./SummaryModal";

const MenuBar = (props) => {
    // Summary modal
    const [summaryOpen, setSummaryOpen] = React.useState(false);
    const handleSummaryOpen = () => setSummaryOpen(true);
    const handleSummaryClose = () => setSummaryOpen(false);

    // Menu dynamically changes according to screen size
    const menu = useMediaQuery(Theme.breakpoints.up("md")) ? (
        <DesktopMenu handleSummaryOpen={handleSummaryOpen} />
    ) : (
        <MobileMenu handleSummaryOpen={handleSummaryOpen} />
    );

    return (
        <Fragment>
            {menu}
            <SummaryModal
                summaryOpen={summaryOpen}
                handleSummaryClose={handleSummaryClose}
            />
        </Fragment>
    );
};

export default MenuBar;
