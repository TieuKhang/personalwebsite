import React from "react";
import '../App.css';
import resume from '../Imgandvid/resume.pdf'
import ach from '../Imgandvid/achievement.pdf'

const Contact = (prop) => {
    return (
        <div className = "Contact">
            <span className = "Contact-name">HI THERE, I'M VINH KHANG TIEU </span>
            <span> <a className = "Contact-navbar edge"  href="#About">ABOUT ME</a></span>
            <span> <a className = "Contact-navbar" href="#Project">PROJECTS </a></span>
            <span> <a className = "Contact-navbar" href="#Contact">CONTACT </a></span>
            <span> <a className = "Contact-navbar" style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer"
                    href={resume}>
                        RESUME 
                    </a>
            </span>
            <span> <a className = "Contact-navbar" style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer"
            href={ach}> ACHIEVEMENTS </a></span>
        </div>
    )
}

export default Contact;