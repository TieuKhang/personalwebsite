import React from "react";
import demo1 from '../Imgandvid/attendancemap.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';

const Attendancemap = (prop) => {
    return (
        <div className = "Project-container">
            <div className = "Slide-show">
                <h2 className = "Title">Attendance Map</h2>
                    <img
                        src = {demo1}
                        width = "800"
                        height = "500"
                        alt = ""
                    />
            </div>

            <div className = "Description">
                <h2 className = "Title"> About this project </h2>
                <p> This is a website I developed that allows users to mark or remove their attendance 
                    at any location on the provided map 
                    so that every user will be informed of crowds upon looking up any destination.
                </p>
                <p> The website is served with Django backend API.
                    The database of this project was enabled by PostgreSQL.
                    The front-end of the website was built with ReactJS.
                </p>
                <p> 
                    <span className = "Categories">Programming language: </span> <span>Javascript, Python</span>
                </p>
                <p> 
                    <span className = "Categories">Tools: </span> <span>ReactJS, Django, PostgreSQL, Google Map API</span>
                </p>
            </div>

            <a style={{display: "table-cell", borderRadius:8}} className = "Project-link" href = "https://sporthangout.uc.r.appspot.com/" 
                target = "_blank" rel = "noopener noreferrer">
                    Click here to view the project
            </a>

            <a style={{display: "table-cell", borderRadius:8}} className = "Project-link"
                href = "https://github.com/TieuKhang/Attendance-Map" 
                target = "_blank" rel = "noopener noreferrer">
                    Github opensource of this project
            </a>
        </div>
    )
}

export default Attendancemap;