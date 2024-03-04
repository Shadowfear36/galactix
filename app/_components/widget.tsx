import React from 'react'
import widgetIcon from '../../public/wp.png'
import './widget.css';

export default function Widget() {
  return (
    <>
        <a href="https://docs.google.com/document/d/1OhRfRpByNKDLVQu17syf7EfZ4Xdjp5Y2nqXlK5A7UTk/edit?usp=sharing">
            <img src={widgetIcon.src} className="widget"/>
        </a>
    </>
  )
}
