
import React from "react";
import {isMobile} from 'react-device-detect';
import GlassCard from "../glass-card/glassCard"
//import ParticlesAnimation from "../particles/particles"
import jitsi from "./images/jitsi.jpeg";
import annai from "./images/annai.png";
import octant from "./images/octant.png";
import timetex from "./images/timetex.png"
import braun from "./images/braun.png"
import './work.css';

const cards = [
  {
    style: {
      top: "7.05vh",
      left: "6.94vw",
    },
    id: 1,
    title: 'Jitsi',
    work: 'Front-end Dev.',
    text:"Jitsi is a set of open-source projects that allows you to easily build and deploy secure video conferencing solutions. Jitsi are Jitsi Videobridge and Jitsi Meet, which let you have conferences on the internet, while other projects in the community enable other features such as audio, dial-in, recording, and simulcasting.",
    image: jitsi,
    tags:['JavaScript', 'HTML', 'CSS', 'React.js']
  },
  {
    style: {
      top: "7.05vh",
      left: "76.38vw",
    },
    id: 3,
    title: 'TimeTex',
    work: 'Front-end Dev.',
    text: "The new TimeTEX Web App School Planner for all smart phones, tablets, PCs and Macs - and for all operating systems. The web app is based online and can therefore be used on all devices with an Internet connection - even in combination with each other. The app offers you extensive flexibility in all areas, both the timetable and the pupil rating can be adjusted freely. In addition, you do not need a good internet connection, as the app can also be used offline.",
    image: timetex,
    tags:['JavaScript', 'HTML', 'CSS', 'React.js']
  },
  {
    style: {
      top: "56.41vh",
      left: "76.38vw",
    },
    id: 4,
    title: 'Annai Systems',
    work: 'Front-end Dev.',
    text: "Annai Systems is a leading genomic data analysis company committed to developing cost-reducing innovations that accelerate discovery.",
    image: annai,
    tags:['JavaScript', 'HTML', 'CSS', 'React.js']
  },
  {
    style: {
      top: "56.41vh",
      left: "6.94vw",
    },
    id: 5,
    title: 'OctantAI',
    work: 'FullStack Dev.',
    text: 'Octant AI is an Artificial Intelligence platform which drives better project outcome performance. Emerging from a collaboration at University of Oxford, the technology delivers more accurate and much earlier insights into project performance across a range of different key result areas, including time, cost, revenue, and other critical factors. Calibrated on thousands of projects, Octant AI is progressively tuned to user organisations’ unique circumstances, and continuously improves with use. It can be applied to any undertaking that is delivered in the form of a project, programme, or portfolio.',
    image: octant,
    tags:['JavaScript', 'HTML', 'CSS', 'React.js']
  },
  {
    style: {
      top: "56.41vh",
      left: "6.94vw",
    },
    id: 6,
    title: ' Braun 100 years anniversary',
    work: 'FullStack Dev.',
    text: '100 years ago, Max Braun opened his appliances workshop in Germany which marked the birth of the brand Braun. Join us for a year of celebrations and exploration on what ‘good design’ means today and how ’good design’ can positively impact future. For more details click <a target="_blank" href="https://ca.braun.com/en-ca/design-culture/timeline">here</a>',
    image: braun,
    tags:['JavaScript', 'HTML', 'CSS', 'React.js']
  }
]
const Work = () => {
  return (
    <>
    <div className ={isMobile ? 'cards-container-mobile' : 'cards-container'}>
    {/* <ParticlesAnimation/> */}
    {cards.map(item => <div className="card-item"><GlassCard key={item.id} title={item.title} work={item.work} image={item.image} text={item.text} tags={item.tags}/></div>)}
    </div>
    </>
  )
}

export default Work