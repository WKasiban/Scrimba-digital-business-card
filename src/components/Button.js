import React from "react"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';


export default function Button() {
    return (
        <div className="btn">
            <button href="#" className="email-btn">
                <FaEnvelope /> Email
            </button>
            <button href="#" className="linkedin-btn">
                <FaLinkedin /> LinkedIn
            </button>
        </div>
    )
}