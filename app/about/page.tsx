import React from 'react'
import Starfield from 'react-starfield'
import Header from '../_components/header'
import Socials from '../_components/socials';
import Widget from '../_components/widget';
import SingleCard from '../_components/singleCard';
import "./about.css";
import cardImg from "../../public/sol_superstars.png";

function About() {
    const aboutText = "Galactix is a unique NFT collection aimed at revolutionizing the digital art and collectibles space by offering a blend of exclusive access and utility within a futuristic theme. With a limited supply of 3333 NFTs, Galactix is designed to cater to a community of passionate collectors and enthusiasts who appreciate both aesthetic appeal and functional value.";
    const btnLink = 'https://docs.google.com/document/d/1hevZSWeRvtAU18uLoG005gwuCCefCiIbJ0i9j8gUhjc/edit#heading=h.2gazcsgmxkub'
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