import React from "react";
import Applicants from "./applicants";

export default function outerDiv() {
    return (
        <div className="outerDiv">
            <div className="header">
                <div id="leftHeader" className="leftHeader">
                    <img
                        className="hamburgerMenu"
                        src="images/Vector.svg"
                    ></img>
                    <img src="images/logo.svg"></img>
                </div>
                <img
                    id="hamb"
                    className="hamburgerMenu"
                    src="images/Vector.svg"
                ></img>
                <img id="log" src="images/logo.svg"></img>
                <div className="rightHeader">
                    <div id="support" className="support">
                        <img
                            className="headPhones"
                            src="images/headPhones.svg"
                        ></img>
                        <p>Contact Support</p>
                    </div>
                    <div className="rightIcons">
                        <img src="images/active.svg"></img>
                        <img id="man" src="images/ic-user.svg"></img>
                        <img id="on" src="images/power.svg"></img>
                    </div>
                </div>
            </div>
            <Applicants />
            <img className="impressum" src="images/agb.svg"></img>
        </div>
    );
}
