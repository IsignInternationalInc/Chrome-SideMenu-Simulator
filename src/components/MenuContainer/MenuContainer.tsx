import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./style.css"
import MenuSection from "../MenuSection/MenuSection";
import ThemeItem from "../NavSection/NavSection";
import DefaultBrowserSection from "../DefaultBrowserSection/DefaultBrowserSection";
import ZoomSection from "../ZoomSection/ZoomSection";
import NavSection from "../NavSection/NavSection";


interface Props {
    // items?: IMenuItem[];
}

export default function MenuContainer(props: Props){
    return (
        <div className="menu-container">
            <MenuSection type="top">
                <NavSection />
                <MenuItem icon={require("../../icons/New tab.png").default} name="New tab"/>
                <MenuItem icon={require("../../icons/Incognito.png").default} name="New incognito tab"/>
            </MenuSection>
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/Bookmarks.png").default} name="Bookmarks"/>
                <MenuItem icon={require("../../icons/Reading list.png").default} name="Reading list"/>
                <MenuItem icon={require("../../icons/History.png").default} name="History"/>
            </MenuSection>
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/Downloads.png").default} name="Downloads"/>
                <MenuItem icon={require("../../icons/Share.png").default} name="Share"/>
                <MenuItem icon={require("../../icons/Find on this page.png").default} name="Find in page"/>
            </MenuSection>
            <MenuSection type='bottom'>
                <MenuItem icon={require("../../icons/Desktop site.png").default} name="Desktop site"/>
                <MenuItem icon={require("../../icons/Settings.png").default} name="Settings"/>
                <MenuItem icon={require("../../icons/Help.png").default} name="Help"/>
                <MenuItem icon={require("../../icons/Wave logo.png").default} name="About Wave Browser"/>
            </MenuSection>
        </div>
    );
}