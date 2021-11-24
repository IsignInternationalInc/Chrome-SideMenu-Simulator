import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import themeIcon from "../../icons/Themes 16px .svg"
import "./style.css"

import MenuSection from "../MenuSection/MenuSection";

interface Props {
}

export default function DefaultBrowserSection(props: Props){

    return (
        <MenuSection title="Default browser">
            <p className="menu-section-subtitle">Wave Browser is not currently your defaullt browser.</p>
            <div className="menu-section-button">Make Wave Browser default browser</div>
        </MenuSection>
    );
}