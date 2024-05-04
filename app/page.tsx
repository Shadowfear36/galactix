'use client'
import Starfield from 'react-starfield';
import Header from './_components/header';
import './landing.css';
import Socials from './_components/socials';
import DisplayCard from './_components/displaycard';
import landingGif from '../public/emmy.png';
import alphaImg from '../public/alpha.png';
import labImg from '../public/final_probe.png';
import StakeImg from '../public/starship.png'
import rocketImg from '../public/STEAK.png';
import Widget from './_components/widget';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function Home() {
  return (
    <main className="flex h-full w-full pt-20 flex-col items-center justify-center">
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
      <div className="flex flex-row w-full h-full display-container">
      <Splide options={{ 
        perPage: 3,
        rewind: true,
        gap: '1.5rem',
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
      }}>

        <SplideSlide>
          <DisplayCard 
            title="NFT Collection" 
            imgSrc={landingGif.src} 
            btnTxt="Buy NFT's" 
            mainCard={false}
            btnSrc="https://magiceden.io/marketplace/galactix"
            hash={false}
          />
        </SplideSlide>
        <SplideSlide>
            <DisplayCard 
              title="$PROBE Token" 
              imgSrc={labImg.src}
              btnTxt="Buy $PROBE" 
              mainCard={false}
              btnSrc="https://jup.ag/swap/SOL-CaWwcM1TWKLutcyJmd9HekWvAZRbeJbnrcVKF4dJehjg"
              hash={true}
            />
        </SplideSlide>
        <SplideSlide>
            <DisplayCard 
              title="About Us" 
              imgSrc={StakeImg.src}
              btnTxt="Read More"
              mainCard={false}
              btnSrc="/about"
              hash={false}
            />

        </SplideSlide>
        {/* <SplideSlide>
            <DisplayCard 
              title="Staking" 
              imgSrc={rocketImg.src}
              btnTxt="Stake Your NFT" 
              mainCard={false}
              btnSrc="https://galactix.sololabs.io/"
            />
        </SplideSlide> */}
        <SplideSlide>
            <DisplayCard 
              title="Alpha Chat" 
              imgSrc={alphaImg.src}
              btnTxt="View Alpha" 
              mainCard={false}
              btnSrc="/alpha"
              hash={false}
            />
        </SplideSlide>
      </Splide>
      </div>
    </main>
  );
}
