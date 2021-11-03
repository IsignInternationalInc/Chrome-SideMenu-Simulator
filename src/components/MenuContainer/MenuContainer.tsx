import React from "react";
import MenuItem, { IMenuItem } from "../MenuItem/MenuItem";
import "./style.css"
import icon from "../../icons/logo.svg";
import MenuSection from "../MenuSection/MenuSection";
import ThemeItem from "../ThemeSection/ThemeSection";


interface Props {
    // items?: IMenuItem[];
}

export default function MenuContainer(props: Props){
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
                <MenuItem icon={require("../../icons/Bookmarks icon.svg").default} name="f-Bookmarks"/>
                <MenuItem icon={require("../../icons/Reading list icon.svg").default} name="Reading list"/>
                <MenuItem icon={require("../../icons/History icon.svg").default} name="f-History"/>
                <MenuItem icon={require("../../icons/Downloads icon.svg").default} name="Downloads"/>
                <MenuItem icon={require("../../icons/Extensions icon.svg").default} name="Extension"/>
            </MenuSection>
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/Print icon.svg").default} name="f-Print"/>
                <MenuItem icon={require("../../icons/Save page as icon.svg").default} name="f-Save page as"/>
                <MenuItem icon={require("../../icons/Shortcut icon.svg").default} name="f-Create shortcut"/>
                <MenuItem icon={require("../../icons/Cast icon.svg").default} name="f-Cast"/>
                <MenuItem icon={require("../../icons/Find on this page icon.svg").default} name="f-Find in page"/>
            </MenuSection>
            <MenuSection title="Default browser">
                Default browser section
            </MenuSection>
            <MenuSection title="Appearance">
                <ThemeItem/>
                <MenuItem icon={require("../../icons/Show bookmarks icon.svg").default} name="f-Show bookmarks bar"/>
                <MenuItem icon={require("../../icons/Home page icon.svg").default} name="f-Show home"/>
            </MenuSection>
            <MenuSection title="Start page">
                <MenuItem icon={require("../../icons/Most visited sites icon.svg").default} name="f-Most visited sites"/>
                <MenuItem icon={require("../../icons/Recent activity icon.svg").default} name="f-Recent activity"/>
                <MenuItem icon={require("../../icons/News icon 1.svg").default} name="f-Show news"/>
            </MenuSection>
            <MenuSection title="Privacy settings">
                <MenuItem icon={require("../../icons/Block ads icon.svg").default} name="f-Block ads"/>
                <MenuItem icon={require("../../icons/Block trackers icon.svg").default} name="f-Block trackers"/>
                <MenuItem icon={require("../../icons/Clear browsing data.svg").default} name="f-Clear browsing data"/>
                <MenuItem icon={require("../../icons/Settings icon.svg").default} name="Settings"/>
            </MenuSection>
            <MenuSection type='bottom'>
                <MenuItem icon={require("../../icons/Wave logo.svg").default} name="About Wave Browser"/>
                <MenuItem icon={require("../../icons/Help icon.svg").default} name="f-Help"/>
                <MenuItem icon={require("../../icons/Exit icon.svg").default} name="Exit"/>
            </MenuSection>
        </div>
    );
}