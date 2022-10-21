import React from 'react'
import { BsFacebook, BsFillHeartFill, BsInstagram, BsLinkedin } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-mt">
        <h2>Build with <BsFillHeartFill/> by Harsh</h2>
        <div className="footer-icons">
              <BsInstagram/>
              <BsFacebook/>
              <BsLinkedin/>
        </div>
        <h3>2022</h3>
      </div>
    </div>
  )
}

export default Footer