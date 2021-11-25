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


export default function ThemeSection(props: Props){

    const renderThemes = ()=>{
        return (
            <div className="theme-item-container">
                <ThemeItem color="white" name="System" backgroundColor="linear-gradient(-65.79deg, #030303 3.13%, #CBE9FF 68.46%)" />
                <ThemeItem color="black" name="Light" backgroundColor="#D4E7F6" />
                <ThemeItem color="white" name="Dark" backgroundColor="black" />
            </div>
        );
    }

    return renderThemes();
}