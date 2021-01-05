import React from "react";
import '../App.css';
import photo from '../Imgandvid/photo.jpg'
const Intro = (prop) => {
    return (
        <header className="App-header">
            <img 
                src={photo} 
                alt=''
                style={{width: 400, height: 400, borderRadius: 400/ 2,margin:20}} 
            />
            <h1> VINH KHANG TIEU </h1>
            <h2> Computer Science Student at Unviersity of Waterloo. </h2>
        </header>
    )
}

export default Intro ;