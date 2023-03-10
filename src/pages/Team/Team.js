import './Team.css'
import scott from '../../assets/scott.jpeg'
import pault from '../../assets/PaulT.jpeg'
import eddie from '../../assets/eddie.jpeg'
import pauls from '../../assets/PaulS.jpeg'
import quentin from '../../assets/quentin.jpeg'

import React, { useState } from 'react'

export default function Team() {
  const [user, setUser] = useState()

  return (
    <main className="TeamContainer">
      <div className="TeamHeader">
        <h1>Team</h1>
      </div>
      <div className="TeamMain">
        <div className="TeamMemberCard">
          <img className="img" src={scott}></img>
          <p>Scott Ankiewicz</p>

          <a href="https://www.linkedin.com/in/scott-ankiewicz/">LinkedIn</a>
        </div>
        <div className="TeamMemberCard">
          <img className="img" src={pault}></img>
          Paul Truitt
          <a href="https://www.linkedin.com/in/paultruittdev/">LinkedIn</a>
        </div>
        <div className="TeamMemberCard">
          <img className="img" src={eddie}></img>
          Eddie Hernandez
          <a href="https://www.linkedin.com/in/edhz/">LinkedIn</a>
        </div>
        <div className="TeamMemberCard">
          <img className="img" src={pauls}></img>
          Paul Seabrook
          <a href="https://www.linkedin.com/in/paulwarrenseabrook/">LinkedIn</a>
        </div>
        <div className="TeamMemberCard">
          <img className="img" src={quentin}></img>
          Quentin Lee
          <a href="https://www.linkedin.com/in/quentinjlee/">LinkedIn</a>
        </div>
      </div>
    </main>
  )
}
