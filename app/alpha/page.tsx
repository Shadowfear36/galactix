import React from 'react'
import Starfield from 'react-starfield'
import Header from '../_components/header'
import Socials from '../_components/socials'
import Widget from '../_components/widget'
import './alpha.css';

export default function Alpha() {
  return (
    <div className="alpha-page"> 
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

      <div className="alpha-container">
        <h3 className="header-txt2">COMING SOON <br/> ...</h3>
      </div>
    </div>
  )
}
