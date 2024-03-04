import React from 'react'
import Starfield from 'react-starfield'
import Header from '../_components/header'
import Socials from '../_components/socials';
import Widget from '../_components/widget';
import SingleCard from '../_components/singleCard';
import "./about.css";
import cardImg from "../../public/sol_superstars.png";

function About() {
    const aboutText = "Only Up: A community built on collaboration and support, rallying around the tagline \"If everyone moves in one direction, there's no stopping us.\" Our strength lies in collective effort, working together towards shared goals and milestones. Meme tokens are in a frenzy this 2024 season in crypto. Which is exciting, but there’s problems below the surface. Getting hacked, being rugged, not receiving your presale, presale dumpers etc. the list goes on & on. On top of that there’s projects launching every single day. Through our combined efforts in the ecosystem we can keep Solana a safe place. Only Up is sculpting and creating a hub that can help keep you protected during the 2024 bull run.";
    const btnLink = 'https://docs.google.com/document/d/1OhRfRpByNKDLVQu17syf7EfZ4Xdjp5Y2nqXlK5A7UTk/edit?usp=sharing'
  return (
    <div className="flex flex-col abt-container"> 
    <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Header/>
      <Socials/>
      <Widget/>
      <h1 className="header-txt">GALACTIX</h1>
      <div className="about-body">
            <SingleCard title="About Us" imgSrc={cardImg.src} btnTxt="White Paper" text={aboutText} btnSrc={btnLink}/>
      </div>
    </div>
  )
}

export default About