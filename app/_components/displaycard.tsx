import React from 'react'
import './displaycard.css';
import Link from 'next/link';

interface DisplayCardProps {
  title: string;
  imgSrc: string;
  btnTxt: string;
  mainCard: boolean;
  btnSrc: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, imgSrc, btnTxt, mainCard, btnSrc }) => {
  return (
    <div className="card-container">
        <h2 className="card-title">{title}</h2>
        <img src={imgSrc} alt={title} className={mainCard ? "cardImgMain" : "cardImg"}/>
        <Link href={btnSrc}>
          <button className="cardBtn">{btnTxt}</button>
        </Link>
    </div>
  );
}

export default DisplayCard;
