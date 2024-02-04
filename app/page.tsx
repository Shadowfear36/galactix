import Starfield from 'react-starfield';
import Logo from '../public/logo4.png';
import './landing.css';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center p-24">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      <img src={Logo.src} id="logo"/>
      <h1 id="subtext">A new adventure awaits you...</h1>
    </main>
  );
}
