import React from "react";
import './App.css';
import './style/styling.css'
import Intro from './component/Intro'
import Skill from './component/Skills'
import Rmfschool from './component/Rmfschool'
import Attendancemap from "./component/Attendancemap"
import Grocerybased from "./component/Grocerybased";
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
          <Attendancemap/>
          <p></p>
          <Grocerybased/>
          <p></p>
          <Teachengl/>
        </div>
        <Contactme/>
        <p></p>
        <hr/>
        <p>
          This website is made with ReactJS. 
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
