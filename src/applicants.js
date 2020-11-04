import React, { useState, useEffect } from "react";

export default function Applicants() {
    const [applicants, setApplicants] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch("./apllicants.json");
            console.log("response", response);
            if (response.status !== 200) {
                setError(true);
            }
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

    function random_rgba() {
        var o = Math.round,
            r = Math.random,
            s = 255;
        return (
            "rgba(" +
            o(r() * s) +
            "," +
            o(r() * s) +
            "," +
            o(r() * s) +
            "," +
            "0.3" +
            ")"
        );
    }

    var RandomColor = random_rgba();

    return (
        <div>
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
                {error && (
                    <p className="error">
                        An error occured loading data, please try again
                    </p>
                )}
                <p className="appointment">
                    Appointment set ({applicantsWithApp.length})
                </p>
                <div className="cardsSection">
                    {applicants.map((person, idx) => {
                        if (person.status == "appointment") {
                            return (
                                <div key={idx}>
                                    <div className="card">
                                        <div
                                            style={{
                                                backgroundColor: RandomColor,
                                            }}
                                            className="ellipse"
                                        >
                                            <p
                                                style={{
                                                    color: RandomColor,
                                                }}
                                                className="initials"
                                            >
                                                {person.name
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    person.surname
                                                        .charAt(0)
                                                        .toUpperCase()}
                                            </p>
                                        </div>
                                        <p className="name">
                                            {person.name + " " + person.surname}
                                        </p>
                                        <p className="telNumber">
                                            {person.number}
                                        </p>
                                        <p className="email">{person.email}</p>
                                        <div className="appo">
                                            <p>APPOINTMENT 22 JULY 14:00</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <p id="viewed" className="appointment">
                    Property viewed ({applicantsViewed.length})
                </p>
                <div className="cardsSection">
                    {applicants.map((person, idx) => {
                        if (person.status == "viewed") {
                            if (person.bid !== " ") {
                                return (
                                    <div key={idx}>
                                        <div className="card">
                                            <div
                                                style={{
                                                    backgroundColor: RandomColor,
                                                }}
                                                className="ellipse"
                                            >
                                                <p
                                                    style={{
                                                        color: RandomColor,
                                                    }}
                                                    className="initials"
                                                >
                                                    {person.name
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        person.surname
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                </p>
                                            </div>
                                            <p className="name">
                                                {person.name +
                                                    " " +
                                                    person.surname}
                                            </p>
                                            <p className="telNumber">
                                                {person.number}
                                            </p>
                                            <p className="email">
                                                {person.email}
                                            </p>
                                            <div className="appo">
                                                <p>VIEWED 11 JUNE 19:00</p>
                                            </div>
                                            <div className="bid">
                                                <p className="bidP">
                                                    {person.bid}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={idx}>
                                        <div className="card">
                                            <div
                                                style={{
                                                    backgroundColor: RandomColor,
                                                }}
                                                className="ellipse"
                                            >
                                                <p
                                                    style={{
                                                        color: RandomColor,
                                                    }}
                                                    className="initials"
                                                >
                                                    {person.name
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        person.surname
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                </p>
                                            </div>
                                            <p className="name">
                                                {person.name +
                                                    " " +
                                                    person.surname}
                                            </p>
                                            <p className="telNumber">
                                                {person.number}
                                            </p>
                                            <p className="email">
                                                {person.email}
                                            </p>
                                            <div className="appo">
                                                <p>VIEWED 11 JUNE 19:00</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
