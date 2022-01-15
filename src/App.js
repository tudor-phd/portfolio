import React from 'react'
import Progress from "./components/progress/progress"
import About from "./components/about/about"
import Work from "./components/work/work"
import Sphere from "./components/sphere/sphere"
import BlackHole from "./components/black-hole/blackHole"
import Player from './components/sound/sound';
import ScrollDown from "./components/scroll-down/scrollDown"
import Quote from "./components/quote/quote"
// import SideMenu from './components/side-menu/sideMenu'
import Navigation from "./components/navigation/navigation"
import sound from './components/sound/mrrobot.mp3';
import './App.css';
import magicMouse from 'magicmouse.js'

const options = {
  "cursorOuter": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options);

function App() {
  return (
    <div className="App">
    <Navigation/>
     <Player url={sound} />
     <Quote/>
     <ScrollDown/>
     <Progress/>
      <section className="app-section first-section"><Sphere/><BlackHole/></section>
      <section className="app-section second-section"><span className="section-title">ABOUT</span><About/></section>
      <section className="app-section third-section"><span className="section-title">WORK</span><Work/></section>

    </div>
  );
}

export default App;
