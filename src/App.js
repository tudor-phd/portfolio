//import Cards from "./components/cards/cards"
import Sphere from "./components/sphere/sphere"
import BlackHole from "./components/black-hole/blackHole"
import Player from './components/sound/sound';
import ScrollDown from "./components/scroll-down/scrollDown"
import Quote from "./components/quote/quote"
import SideMenu from './components/side-menu/sideMenu'
import sound from './components/sound/mrrobot.mp3';
import './App.css';


function App() {
  return (
    <div className="App">
    <SideMenu/>
     <Player url={sound} />
     <Quote/>
     <ScrollDown/>
      <section className="app-section first-section"><Sphere/><BlackHole/></section>
      {/* <section className="app-section second-section"><Cards/></section> */}

    </div>
  );
}

export default App;
