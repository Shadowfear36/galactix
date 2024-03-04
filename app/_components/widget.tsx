import React from 'react'
import widgetIcon from '../../public/wp.png'
import './widget.css';

export default function Widget() {
  return (
    <>
        <a href="https://docs.google.com/document/d/1hevZSWeRvtAU18uLoG005gwuCCefCiIbJ0i9j8gUhjc/edit#heading=h.3at9u9s4e0vp">
            <img src={widgetIcon.src} className="widget"/>
        </a>
    </>
  )
}
