import React from "react";
import MenuSection from "../MenuSection/MenuSection";
import "./style.css"

interface Props {
}

export default function ZoomSection(props: Props) {

    return (
        <MenuSection type="top">
            <div className="zoom-section-container">
                <div style={{ marginLeft: 40 }} >Zoom</div>
                <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly' }}>
                    <div className="zoom-section-separator"></div>
                    <div>-</div>
                    <div>100%</div>
                    <div>+</div>
                    <div className="zoom-section-separator"></div>
                </div>
                <img className="menu-icon" style={{ marginLeft:0, marginRight: 40 }} src={require("../../icons/Expand 16px.svg").default} alt=""/>
            </div>
        </MenuSection>
    );
}