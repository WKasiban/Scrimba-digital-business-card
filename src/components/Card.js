import React from "react";
import Button from "./Button"
import portail from "../images/lauraPic.jpeg"

export default function Card() {
    return (
        <div className="card">
            <img src={ portail } alt="Laura's pic" className="image" />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <p>Laurasmith.website</p>
            <Button />
        </div>
    )
}