import React from "react";
import '../App.css';
const Rmfschool = (prop) => {
    return (
        <div className = "Project-container">
            <div className = "Slide-show">
                <h2 className = "Title">Reminder for school</h2>
                <iframe width="993" height="538" src="https://www.youtube.com/embed/pXNjMPbA_5M" frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

            <div className = "Description">
                <h2 className = "Title"> About this project </h2>
                <p> This is a web development project that was in competition for a Hackathon named Shellhack for 2020 September.
                    This website provide users with personalized lists that can be used as reminder.
                    The lists functionality consists of adding and removing items from it 
                    which allows the user to modify the list in their favour.
                </p>
                <p> The website was built based on NodeJs with Express server.
                    The database of this project was enabled by Mongoose and MongoDB.
                    The security/authorization of the website is set up by Passport Local Mongoose with Express session.
                </p>
                <p> 
                    <span className = "Categories">Programming language: </span> <span>Javascript, HTML/CSS</span>
                </p>
                <p> 
                    <span className = "Categories">Tools: </span> <span>NodeJS, Mongoose/MongoDB, EJS</span>
                </p>
            </div>

            <a style={{display: "table-cell"}} className = "Project-link" href = "https://reminder-school-work.herokuapp.com/" 
                target = "_blank" rel = "noopener noreferrer">
                    Click here to view the project
            </a>

            <a style={{display: "table-cell"}} className = "Project-link"
                href = "https://github.com/TieuKhang/Shellhack-Sep-2020-Education-Hack" 
                target = "_blank" rel = "noopener noreferrer">
                    Github opensource of this project
            </a>
        </div>
    )
}

export default Rmfschool;