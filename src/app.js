import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OuterDiv from "./outerDiv";
import InnerDiv from "./innerDiv";

export default function App() {
    return (
        <BrowserRouter>
            <OuterDiv />
            <InnerDiv />
        </BrowserRouter>
    );
}
