import React from "react";
import Card from "./components/Card"
import About from "./components/About";
import Interests from "./components/Interests";
import SocialIcons from "./components/SocialIcons";

export default function App() {
    return (
        <div className="container">
            <Card />
            <div className="content">
                <About />
                <Interests />
            </div>
            <SocialIcons />
        </div>
    )
}