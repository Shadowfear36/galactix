import React from 'react'
import './singleCard.css'
import Link from 'next/link';

interface SingleCardProps {
    title: string;
    imgSrc: string;
    btnTxt: string;
    text: string;
    btnSrc: string;
  }

const SingleCard: React.FC<SingleCardProps> = ({ title, imgSrc, btnTxt, text, btnSrc }) => {
  return (
    <div className="cardContainer">
        <h2 className="titleCard">{title}</h2>
        <img className="cardImg" src={imgSrc}/>
        <p>
            {text}
        </p>
        <a href={btnSrc} target="_blank" rel="noopener noreferrer">
        <button className="cardBtn">{btnTxt}</button>
        </a>
    </div>
  )
}

export default SingleCard
