import React from 'react'
import Logo from '../../public/logo-2.png';
import "./header.css";
import Link from 'next/link';

function Header() {
  return (
    <div className="header">
        <Link href="/">
          <img src={Logo.src} id="logo"/>
        </Link>
        <button className="btn-1">Connect Wallet</button>
    </div>
  )
}

export default Header