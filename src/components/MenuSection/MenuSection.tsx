import { title } from "process";
import React, { PropsWithChildren } from "react";
import "./style.css"

export interface Props {
    type?: 'top' | 'bottom' | 'middle';
    title?: string;
}

function Separator(){
    return (
        <div className="menu-separator"></div>
    );
}

function SectionTitle(props: { title: string }){
    return (
        <p className="menu-section-title">{props.title}</p>
    );
}

export default function MenuSection(props: PropsWithChildren<Props>){
    var { type, title } = props;
    if(!type)
        type = 'top'
    return (
        <div className="menu-section">
            {title && <SectionTitle title={title}/>}
            {/* {(type === 'bottom' || type === 'middle') && <Separator/>} */}
            {props.children}
            {(type === 'top' || type === 'middle') && <Separator/>}
        </div>
    );
}