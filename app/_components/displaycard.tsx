import React from 'react'
import './displaycard.css';
import Link from 'next/link';

interface DisplayCardProps {
  title: string;
  imgSrc: string;
  btnTxt: string;
  mainCard: boolean;
  btnSrc: string;
  hash: boolean;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, imgSrc, btnTxt, mainCard, btnSrc, hash }) => {
  return (
    <div className="card-container">
        <h2 className="card-title">{title}</h2>
        <img src={imgSrc} alt={title} className={mainCard ? "cardImgMain" : "cardImg"}/>
        {hash ? <p className="sm:text-[12px] md:text-lg text-center mt-1 mb-1 text-wrap">CaWwcM1TWKLutcyJmd9HekWv<br/>AZRbeJbnrcVKF4dJehjg</p> : null}
        <Link href={btnSrc}>
          <button className="cardBtn">{btnTxt}</button>
        </Link>
    </div>
  );
}

export default DisplayCard;
