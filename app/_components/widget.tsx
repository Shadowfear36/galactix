import React from 'react'
import widgetIcon from '../../public/wp.png'
import './widget.css';

export default function Widget() {
  return (
    <>
        <a href="https://galactixsol.gitbook.io/galactix" target="_blank" rel="noopener noreferrer">
            <img src={widgetIcon.src} className="widget"/>
        </a>
    </>
  )
}
