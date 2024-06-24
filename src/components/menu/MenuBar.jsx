import React from "react";

import { useMediaQuery } from "@mui/material";

import Theme from "../../Theme";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MenuBar = (props) => {
    const { handleSummaryOpen } = props;

    // Menu dynamically changes according to screen size
    return useMediaQuery(Theme.breakpoints.up("md")) ? (
        <DesktopMenu handleSummaryOpen={handleSummaryOpen} />
    ) : (
        <MobileMenu handleSummaryOpen={handleSummaryOpen} />
    );
};

export default MenuBar;
