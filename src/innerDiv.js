import React, { useState, useEffect } from "react";
import Applicants from "./applicants";

export default function OuterDiv() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("apllicants.json");
            const data = await response.json();
            console.log("data from json", data);
            setApplicants(data);
        })();
    }, []);

    let applicantsWithApp = applicants.filter(function (el) {
        return el.status == "appointment";
    });

    let applicantsViewed = applicants.filter(function (el) {
        return el.status == "viewed";
    });

    return (
        <div className="innerDiv">
            <div className="subHeader">
                <div className="LeftSubHeader">
                    <img className="arrow" src="images/back.svg"></img>
                    <p>Applicants</p>
                </div>
                <div className="rightSubHeader">
                    <div>
                        <p className="number">{applicants.length}</p>
                        <p className="word">Total</p>
                    </div>
                    <div>
                        <p className="number">0</p>
                        <p className="word">New</p>
                    </div>
                    <div>
                        <p className="number">{applicantsViewed.length}</p>
                        <p className="word">Viewed</p>
                    </div>
                    <div>
                        <p className="number">{applicantsWithApp.length}</p>
                        <p className="word">Appointment</p>
                    </div>
                    <div id="lastDiv">
                        <p className="number">0</p>
                        <p className="word">Others</p>
                    </div>
                </div>
            </div>
            <Applicants />
        </div>
    );
}
