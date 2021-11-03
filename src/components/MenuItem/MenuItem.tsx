import React, { ReactNode } from "react";

import "./style.css"

export interface IMenuItem {
    name: string;
    icon: any;
    sideComponent?: ReactNode;
    bottomComponent?: ReactNode
}

export default function MenuItem(props: IMenuItem){

    return (
        <div className="menu-item-container">
            <div className="menu-item">
                <img className="menu-icon" src={props.icon} alt=""/>
                <p className="menu-text">{props.name}</p>
                <div className="menu-toggle" ></div>
                {props.sideComponent}
            </div>
            <div className="menu-item-bottom-component-container">
                {props.bottomComponent}
            </div>
        </div>
    );
}