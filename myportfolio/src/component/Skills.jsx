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
                    JavaScript, Java, Kotlin, HTML/CSS, Python, C/C++, PHP
                </p>
                <p> <span className = "Self-category"> Frameworks: </span> 
                    React Native, ReactJS, NodeJS, ExpressJS, Next.js, Vue.js, Cypress, jQuery, Flask, Django
                </p>
                <p> <span className = "Self-category"> Tools: </span> 
                Firebase, Google Cloud Platform, Heroku, AWS, Azure, Jenkin, Datadog, Sonatype, SonarQube, Prisma, MongoDB/Mongoose, SQLite/PostgreSQL, Docker, NumPy, NLTK, PyTorch, OpenCV, Expo, Android Studio, XCode, Git, Linux
                </p>
            </div>
        </div>
    )
}

export default Skill;