import React from "react";
import demo1 from '../Imgandvid/grocerybased/img3.png';
import demo2 from '../Imgandvid/grocerybased/img1.PNG';
import demo3 from '../Imgandvid/grocerybased/img2.PNG';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';

const img = [demo1,demo2,demo3]

const Grocerybased = (prop) => {
    return (
        <div className = "Project-container">
            <div className = "Slide-show">
                <h2 className = "Title">GroceryBased</h2>
                <Slide autoplay = "true" duration = "1000" >
                    <img
                        src = {img[0]}
                        width = "800"
                        height = "500"
                        alt = ""
                    />
                    <img
                        src = {img[1]}
                        width = "500"
                        height = "500"
                        alt = ""
                    />
                    <img
                        src = {img[2]}
                        width = "500"
                        height = "500"
                        alt = ""
                    />
                </Slide>
            </div>

            <div className = "Description">
                <h2 className = "Title"> About this project </h2>
                <p> This is a project that I developed with a team for the Hack The North 2021 event that 
                    allows users to capture or upload picture of a grocery item and its label will be recognized by the Google Vision API
                    and stored in a list for the users to keep track of and compare their prices. 
                </p>
                <p> The website was built with Python/Flask server.
                    The database in used is SQLAlchemy.
                    The front-end of the website was built with ReactJS.
                </p>
                <p> 
                    <span className = "Categories">Programming language: </span> <span>Javascript, Python</span>
                </p>
                <p> 
                    <span className = "Categories">Tools: </span> <span>ReactJS, Flask, SQLAlchemy</span>
                </p>
            </div>

            <a style={{display: "table-cell", borderRadius:8}} className = "Project-link"
                href = "https://github.com/TieuKhang/web-app-htn" 
                target = "_blank" rel = "noopener noreferrer">
                    Github opensource of this project
            </a>
        </div>
    )
}

export default Grocerybased;