import React from 'react'
import './alphacard.css'

interface AlphaCardInterface {
    mintDate: string,
    link: string,
    briefing: string,
    name: string,
    image: string
}

const AlphaCard: React.FC<AlphaCardInterface> = ({ mintDate, link, briefing, name, image }) => {
  return (
    <div className="alpha-card">
        <div className="left
        ">
            <button className="mint">Mint Date: {mintDate}</button>
            <img src={image} alt={name} className="image"/>
        </div>
        <div className="right">
            <h3 className="title">{name}</h3>
            <p className="brief">{briefing}</p>
            <a href={link}><button className="btn">View Alpha</button></a>
        </div>
    </div>
  );
}

export default AlphaCard;