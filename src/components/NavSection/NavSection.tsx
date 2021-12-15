import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import themeIcon from "../../icons/Themes 16px .svg"

import "./style.css"

interface Props {
}

function ThemeItem(props: { backgroundColor: string, color: string, name: string }){
    const { backgroundColor, color, name } = props;
    return (
        <div className="theme-item" style={{ background: backgroundColor, color }}>
            {name}
        </div>
    );
}


export default function NavSection(props: Props){

    const renderThemes = ()=>{
        return (
            <div className="nav-section-container">
                <img className="nav-section-menu-icon" src={require("../../icons/Arrow right.png").default} alt=""/>
                <img className="nav-section-menu-icon" src={require("../../icons/Bookmarks.png").default} alt=""/>
                <img className="nav-section-menu-icon" src={require("../../icons/Downloads.png").default} alt=""/>
                <img className="nav-section-menu-icon" src={require("../../icons/Info.png").default} alt=""/>
                <img className="nav-section-menu-icon" src={require("../../icons/Refresh.png").default} alt=""/>
            </div>
        );
    }

    return renderThemes();
}