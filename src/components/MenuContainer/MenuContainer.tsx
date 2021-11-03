import React from "react";
import MenuItem, { IMenuItem } from "../MenuItem/MenuItem";
import "./style.css"
import icon from "../../icons/logo.svg";
import MenuSection from "../MenuSection/MenuSection";


interface Props {
    // items?: IMenuItem[];
}

export default function MenuContainer(props: Props){

    renderSections = () => {

    }

    return (
        <div className="menu-container">
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/New tab icon.svg").default} name="New tab"/>
                <MenuItem icon={require("../../icons/New window icon.svg").default} name="New window"/>
                <MenuItem icon={require("../../icons/Incognito icon.svg").default} name="New incognito window"/>
            </MenuSection>
            <MenuSection type="top">
                Zoom section
            </MenuSection>
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/Bookmarks icon.svg").default} name="Bookmarks"/>
                <MenuItem icon={require("../../icons/Reading list icon.svg").default} name="Reading list"/>
                <MenuItem icon={require("../../icons/History icon.svg").default} name="History"/>
                <MenuItem icon={require("../../icons/Downloads icon.svg").default} name="Downloads"/>
                <MenuItem icon={require("../../icons/Extensions icon.svg").default} name="Extension"/>
            </MenuSection>
            <MenuSection type="bottom">
                <MenuItem icon={require("../../icons/Print icon.svg").default} name="Print"/>
                <MenuItem icon={require("../../icons/Save page as icon.svg").default} name="Save page as"/>
                <MenuItem icon={require("../../icons/Print icon.svg").default} name="Create shortcut"/>
                <MenuItem icon={require("../../icons/Print icon.svg").default} name="Cast"/>
                <MenuItem icon={require("../../icons/Print icon.svg").default} name="Find in page"/>
            </MenuSection>
        </div>
    );
}