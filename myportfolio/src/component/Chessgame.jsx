import React from "react";
import demo1 from '../Imgandvid/chess_game_interface.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';

const Chessgame = (prop) => {
    return (
        <div className = "Project-container">
            <div className = "Slide-show">
                <h2 className = "Title">Chess game</h2>
                    <img
                        src = {demo1}
                        width = "500"
                        height = "500"
                        alt = ""
                    />
            </div>

            <div className = "Description">
                <h2 className = "Title"> About this project </h2>
                <p> Collaborated with a team to develop a multi-level chess game by using C++, Linux for command line purpose, X11 as image rendering tool and UML diagram for project planning
                </p>
                <p> Applied Objected Oriented Programming (OOP) concepts with Observer design pattern for developing game features and utilized shared pointer for memory management</p>
                <p> 
                    <span className = "Categories">Programming language: </span> <span>C++</span>
                </p>
                <p> 
                    <span className = "Categories">Tools: </span> <span>Linux, Object Oriented Programming, Observer design pattern, Shared pointers </span>
                </p>
            </div>

            <a style={{display: "table-cell", borderRadius:8}} className = "Project-link"
                href = "https://github.com/TieuKhang/chess_game" 
                target = "_blank" rel = "noopener noreferrer">
                    Github opensource of this project
            </a>
        </div>
    )
}

export default Chessgame;