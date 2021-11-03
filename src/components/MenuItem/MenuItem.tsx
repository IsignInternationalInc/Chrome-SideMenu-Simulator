import React from "react";
import "./style.css"

export interface IMenuItem {
    name: string;
    icon: any;
}

export default function MenuItem(props: IMenuItem){

    return (
        <div className="menu-item">
            <img className="menu-icon" src={props.icon} alt=""/>
            <p className="menu-text">{props.name}</p>
            <div className="menu-toggle" ></div>
        </div>
    );
}