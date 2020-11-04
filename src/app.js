import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OuterDiv from "./outerDiv";
import Applicants from "./applicants";

export default function App() {
    return (
        <BrowserRouter>
            <OuterDiv />
            <Applicants />
        </BrowserRouter>
    );
}
