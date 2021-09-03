import React from "react";

const Skill = (prop) => {
    return (
        <div className = "Wrapper" id = "About">
            <h1 className = "Web-header" > ABOUT ME </h1>
            <div className = "About-me">
                <p>  
                    I'm passionate about the services industry, especially education and finances 
                    and I wish to use technology to have impacts on these industries.
                </p>
                <p> <span className = "Self-category">Achievements: </span> Top 25% Canada Computing Contest,
                    Presidential Scholarship Award,
                    Math Global Scholarship,
                    Honor list of Canadian Senior Math Contest.
                </p>
                <p> <span className = "Self-category"> Programming languages: </span> 
                    HTML/CSS, JavaScript, Python, C/C++, Java
                </p>
                <p> <span className = "Self-category"> Frameworks: </span> 
                    React Native, ReactJS, NodeJS, ExpressJS, jQuery, Flask, Django
                </p>
                <p> <span className = "Self-category"> Tools: </span> 
                    Firebase, Google Cloud Platform, Heroku, MongoDB/Mongoose, SQL/PostgreSQL, AWS S3, Expo, Visual Studio Code, Android Studio, XCode, Simplicity Studio, Git, Linux
                </p>
            </div>
        </div>
    )
}

export default Skill;