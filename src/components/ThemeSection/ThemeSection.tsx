import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import themeIcon from "../../icons/Themes 16px .svg"

import "./style.css"

interface Props {
}

function ThemeItem(props: { color: string, name: string }){
    return (
        <div className="">

        </div>
    );
}


export default function ThemeSection(props: Props){

    const renderThemes = ()=>{
        return (
            <div className="theme-item-container">

            </div>
        );
    }

    return (
        <MenuItem
            name="Theme"
            icon={themeIcon}
            bottomComponent={renderThemes()}
        />
    );
}