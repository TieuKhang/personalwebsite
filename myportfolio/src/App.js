import React from "react";
import './App.css';
import './style/styling.css'
import Intro from './component/Intro'
import Skill from './component/Skills'
import Rmfschool from './component/Rmfschool'
import Just4u from './component/Just4u'
import Teachengl from './component/Teachengl'
import Contact from './component/Contact'
import Contactme from './component/Contactme'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contact/>
        <Intro/>
        <Skill/>
        <div id = "Project">
          <h1 className = "Web-header"> PROJECTS </h1>
          <Rmfschool/>
          <p></p>
          <Just4u/>
          <p></p>
          <Teachengl/>
        </div>
        <Contactme/>
        <p></p>
        <hr/>
        <p>
          This website is made with ReactJS and Express Server in NodeJs. 
          <span> <a style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer"
                    href='https://github.com/TieuKhang/personalwebsite'>
                        Github code 
               </a>
        </span>   
        </p>
      </div>
    );
  }
}
export default App;
