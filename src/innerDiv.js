import React from "react";

export default function OuterDiv() {
    return (
        <div className="innerDiv">
            <div className="subHeader">
                <div className="LeftSubHeader">
                    <img className="arrow" src="images/back.svg"></img>
                    <p>Applicants</p>
                </div>
                <div className="rightSubHeader">
                    <div>
                        <p className="number">25</p>
                        <p className="word">Total</p>
                    </div>
                    <div>
                        <p className="number">10</p>
                        <p className="word">New</p>
                    </div>
                    <div>
                        <p className="number">5</p>
                        <p className="word">Viewed</p>
                    </div>
                    <div>
                        <p className="number">3</p>
                        <p className="word">Appointment</p>
                    </div>
                    <div id="lastDiv">
                        <p className="number">6</p>
                        <p className="word">Others</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
