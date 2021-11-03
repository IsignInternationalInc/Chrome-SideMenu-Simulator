import React from "react";
import MenuItem, { IMenuItem } from "../MenuItem/MenuItem";
import "./style.css"
import icon from "../../icons/logo.svg";
import MenuSection from "../MenuSection/MenuSection";


interface Props {
    // items?: IMenuItem[];
}

export default function MenuContainer(props: Props){

    return (
        <div className="menu-container">
            <MenuSection type="top">
                <MenuItem icon={icon} name="Item1"/>
                <MenuItem icon={icon} name="Item2"/>
                <MenuItem icon={icon} name="Item3"/>
            </MenuSection>
            <MenuSection type="bottom">
                <MenuItem icon={icon} name="Item1"/>
                <MenuItem icon={icon} name="Item2"/>
                <MenuItem icon={icon} name="Item3"/>
            </MenuSection>
        </div>
    );
}