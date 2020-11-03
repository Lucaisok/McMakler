import React from "react";

export default function Applicants() {
    return (
        <div>
            <div className="inputSection">
                <input
                    className="inputField"
                    placeholder="    Search for applicant"
                ></input>
                <select className="selector" placeholder="Bid">
                    <option value="0">Bids</option>
                </select>
                <select
                    id="secondSelector"
                    className="selector"
                    placeholder="Status"
                >
                    <option value="0">Status</option>
                </select>
            </div>
            <p className="appointment">Appointment set (3)</p>
            <div className="cardsSection">
                <div className="card">
                    <div className="ellipse">
                        <p className="initials">LT</p>
                    </div>
                    <p className="name">Luca Tomarelli</p>
                    <p className="telNumber">+49 827 276 28826</p>
                    <p className="email">lucatomarelli1@gmail.com</p>
                    <div className="appo">
                        <p>APPOINTMENT 22 JULY 14:00</p>
                    </div>
                </div>
                {/* <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div> */}
            </div>
            <p id="viewed" className="appointment">
                Property viewed (5)
            </p>
            <div className="cardsSection">
                <div className="card">
                    <div className="ellipse">
                        <p className="initials">LT</p>
                    </div>
                    <p className="name">Luca Tomarelli</p>
                    <p className="telNumber">+49 827 276 28826</p>
                    <p className="email">lucatomarelli1@gmail.com</p>
                    <div className="appo">
                        <p>VIEWED 11 JUNE 19:00</p>
                    </div>
                    <div className="bid">
                        <p className="bidP">BID 250.000€</p>
                    </div>
                </div>
                {/* <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div> */}
            </div>
        </div>
    );
}
