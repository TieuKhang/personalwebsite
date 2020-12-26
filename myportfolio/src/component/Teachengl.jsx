import React from "react";
import demo from '../Imgandvid/teachengl.gif';
import '../App.css';


const Teachengl = (prop) => {
    return (
        <div className = "Project-container">
            <div className = "Slide-show">
                <h2 className = "Title"> English-tutoring website</h2>
                <img
                    src = {demo}
                    alt = "loading..."
                />
            </div>

            <div className = "Description">
                <h2 className = "Title"> About this project </h2>
                <p> This is a web development project that was made during 
                    my volunteering period at Invictus Institute as an English tutor .
                    This website consists of English lessons and interactive games and quiz that help reviewing the lessons. 
                </p>
                <p> The website lessons was built by HTML/CSS and XML.
                    The interactive games of the webpage was made with Javascript and Jquery.
                </p>
                <p> 
                    <span className = "Categories">Programming language: </span> <span>Javascript, HTML/CSS, XML</span>
                </p>
                <p> 
                    <span className = "Categories">Tools: </span> <span>Jquery</span>
                </p>
            </div>

            <a style={{display: "table-cell"}} className = "Project-link" href = "https://tieukhang.github.io/" 
                target = "_blank" rel = "noopener noreferrer">
                    Click here to view the project
            </a>

            <a style={{display: "table-cell"}} className = "Project-link"
                href = "https://github.com/TieuKhang/TieuKhang.github.io" 
                target = "_blank" rel = "noopener noreferrer">
                    Github opensource of this project
            </a>
        </div>
    )
}

export default Teachengl;