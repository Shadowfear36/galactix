import React from 'react'
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import "./socials.css"

function Socials() {
  return (
    <div className="flex flex-col socials">
        <a href="https://discord.gg/2Vq2uz7HEg"><RxDiscordLogo color={"white"} size={40} className="icon"/></a>
        {/* <a><LiaTelegramPlane color={"white"} size={40} className="icon"/></a> */}
        <a href="https://twitter.com/GalactixSol"><RiTwitterXLine color={"white"} size={40} className="icon"/></a>
    </div>
  )
}

export default Socials