import React from "react";
import demo1 from '../Imgandvid/just4u/img1.PNG';
import demo2 from '../Imgandvid/just4u/img2.PNG';
import demo3 from '../Imgandvid/just4u/img3.PNG';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';

const img = [demo1,demo2,demo3]

const Just4u = (prop) => {
    return (
        <div className = "Project-container">
            <div className = "Slide-show">
                <h2 className = "Title">Just4U</h2>
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
                <p> This is a web development project that I cooperated with my friends to build it.
                    This website is built to provide information on law-related issues that is specific to a personalized account.
                </p>
                <p> The website was built based on NodeJs with Express server.
                    The database of this project was enabled by Mongoose and MongoDB.
                    The security/authorization of the website is set up by Passport Local Mongoose with Express session.
                    The front-end of the website was built with ReactJS.
                </p>
                <p> 
                    <span className = "Categories">Programming language: </span> <span>Javascript, HTML/CSS</span>
                </p>
                <p> 
                    <span className = "Categories">Tools: </span> <span>NodeJS, Mongoose/MongoDB, ReactJS</span>
                </p>
            </div>

            <a style={{display: "table-cell"}} className = "Project-link" href = "https://protected-earth-76261.herokuapp.com/" 
                target = "_blank" rel = "noopener noreferrer">
                    Click here to view the project
            </a>

            <a style={{display: "table-cell"}} className = "Project-link"
                href = "https://github.com/huancho9802/just4u" 
                target = "_blank" rel = "noopener noreferrer">
                    Github opensource of this project
            </a>
        </div>
    )
}

export default Just4u;