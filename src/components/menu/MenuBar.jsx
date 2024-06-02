import React from "react";

import { useMediaQuery } from "@mui/material";
import Theme from "../../Theme";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MenuBar = (props) => {
    const menu = useMediaQuery(Theme.breakpoints.up("md")) ? (
        <DesktopMenu />
    ) : (
        <MobileMenu />
    );

    return <div>{menu}</div>;
};

export default MenuBar;
