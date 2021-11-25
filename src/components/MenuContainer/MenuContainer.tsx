import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./style.css"
import MenuSection from "../MenuSection/MenuSection";
import ThemeItem from "../ThemeSection/ThemeSection";
import DefaultBrowserSection from "../DefaultBrowserSection/DefaultBrowserSection";
import ZoomSection from "../ZoomSection/ZoomSection";


interface Props {
    // items?: IMenuItem[];
}

export default function MenuContainer(props: Props){
    return (
        <div className="menu-container">
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/New tab 16px.svg").default} name="New tab"/>
                <MenuItem icon={require("../../icons/New window icon 16px.svg").default} name="New window"/>
                <MenuItem icon={require("../../icons/Incognito icon 16px.svg").default} name="New incognito window"/>
            </MenuSection>
            <ZoomSection />
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/Bookmarks 16px.svg").default} name="Bookmarks"/>
                <MenuItem icon={require("../../icons/Reading list 16px.svg").default} name="Reading list"/>
                <MenuItem icon={require("../../icons/History 16px.svg").default} name="History"/>
                <MenuItem icon={require("../../icons/Downloads 16px.svg").default} name="Downloads"/>
                <MenuItem icon={require("../../icons/Extensions 16px.svg").default} name="Extension"/>
            </MenuSection>
            <MenuSection type="top">
                <MenuItem icon={require("../../icons/Print page 16px.svg").default} name="Print"/>
                <MenuItem icon={require("../../icons/Save page 16px.svg").default} name="Save page as"/>
                <MenuItem icon={require("../../icons/Create shortcut 16px.svg").default} name="Create shortcut"/>
                <MenuItem icon={require("../../icons/Cast 16 px.svg").default} name="Cast"/>
                <MenuItem iconStyle={{ marginLeft: 41 }} icon={require("../../icons/Find on this page icon 16px.svg").default} name="Find in page"/>
            </MenuSection>
            <DefaultBrowserSection />
            <MenuSection title="Appearance">
                <ThemeItem/>
                <MenuItem icon={require("../../icons/Show bookrmarks bar 16 px.svg").default} name="Show bookmarks bar"/>
                <MenuItem icon={require("../../icons/Home 16px.svg").default} name="Show home"/>
            </MenuSection>
            <MenuSection title="Start page">
                <MenuItem icon={require("../../icons/Most visited sites 16px.svg").default} name="Most visited sites"/>
                <MenuItem icon={require("../../icons/Recent activity 16px.svg").default} name="Recent activity"/>
                <MenuItem icon={require("../../icons/Show news icon 16px.svg").default} name="Show news"/>
            </MenuSection>
            <MenuSection title="Privacy settings">
                <MenuItem icon={require("../../icons/Block ads 16 px.svg").default} name="Block ads"/>
                <MenuItem icon={require("../../icons/Block trackers 16px.svg").default} name="Block trackers"/>
                <MenuItem icon={require("../../icons/Clear browsing data 16px.svg").default} name="Clear browsing data"/>
                <MenuItem icon={require("../../icons/Settings 16px.svg").default} name="Settings"/>
            </MenuSection>
            <MenuSection type='bottom'>
                <MenuItem icon={require("../../icons/Wave logo black 16px.svg").default} name="About Wave Browser"/>
                <MenuItem icon={require("../../icons/Help 16px.svg").default} name="Help"/>
                <MenuItem icon={require("../../icons/Exit icon 16px.svg").default} name="Exit"/>
            </MenuSection>
        </div>
    );
}