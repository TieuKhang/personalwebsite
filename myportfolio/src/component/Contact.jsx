import React from "react";
import '../App.css';
const Contact = (prop) => {
    return (
        <div className = "Contact">
            <span className = "Contact-name">HI THERE, I'M VINH KHANG TIEU </span>
            <span> <a className = "Contact-navbar edge"  href="#About">ABOUT ME</a></span>
            <span> <a className = "Contact-navbar" href="#Project">PROJECTS </a></span>
            <span> <a className = "Contact-navbar" href="#Contact">CONTACT ME </a></span>
            <span> <a className = "Contact-navbar" href="#Contact">RESUME </a></span>
            <span> <a className = "Contact-navbar" style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer"
            href="https://tieukhang.github.io/tieukhangresume/">ACHIEVEMENTS </a></span>
        </div>
    )
}

export default Contact;