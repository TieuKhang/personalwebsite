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
          <h1 className = "Web-header"> FEATURED PROJECTS </h1>
          <Rmfschool/>
          <p></p>
          <Just4u/>
          <p></p>
          <Teachengl/>
        </div>
        <Contactme/>
      </div>
    );
  }
}
export default App;
