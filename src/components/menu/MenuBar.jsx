import React from "react";

import { useMediaQuery } from "@mui/material";
import Theme from "../../Theme";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MenuBar = (props) => {
    return useMediaQuery(Theme.breakpoints.down("md")) ? (
        <MobileMenu />
    ) : (
        <DesktopMenu />
    );
};

export default MenuBar;
