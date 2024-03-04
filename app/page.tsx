import Starfield from 'react-starfield';
import Header from './_components/header';
import './landing.css';
import Socials from './_components/socials';
import DisplayCard from './_components/displaycard';
import landingGif from '../public/landing.gif';
import upMemeGif from '../public/upMeme.gif';
import solSuperstar from '../public/sol_superstars.png';
import Widget from './_components/widget';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center p-24">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Header/>
      <Socials/>
      <Widget/>
      <h1 className="main-header">GALACTIX</h1>
      <div className="flex flex-row display-container">
      <DisplayCard 
        title="About Us" 
        imgSrc={solSuperstar.src}
        btnTxt="Read More"
        mainCard={false}
        btnSrc="/about"
      />
      <DisplayCard 
        title="NFT Collection" 
        imgSrc={landingGif.src} 
        btnTxt="Coming Soon" 
        mainCard={true}
        btnSrc=""
      />
      <DisplayCard 
        title="Alpha Chat" 
        imgSrc={upMemeGif.src}
        btnTxt="View Alpha" 
        mainCard={false}
        btnSrc="/alpha"
      />
      </div>
    </main>
  );
}
