import React from "react";
import '../App.css';
const Contactme = (prop) => {
    return (
        <div className = "Wrapper" id = "Contact">
            <h1 className = "Web-header" > CONTACT </h1>
            <p> Feel free to reach out to me through: </p>
            <p> University email: k4tieu@uwaterloo.ca </p>
            <p> Phone number: 437 929 7617 </p>
            <p> My projects code is available on Github : 
                <a style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer"
                   href = "https://github.com/TieuKhang">
                    https://github.com/TieuKhang 
                </a> 
            </p>
            <p> My Linkedin: 
                <a style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer"
                   href = "https://www.linkedin.com/in/khang-tieu-773636191/">
                    https://www.linkedin.com/in/khang-tieu-773636191/
                </a>
            </p>
        </div>
    )
}

export default Contactme;