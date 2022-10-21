import React from 'react'
import Me from "./imges/xym.jpg"
import { BsFillChatDotsFill } from "react-icons/bs"
const About = () => {
  return (
    <div className='about'>
        <div className="about-main">
            <div className="about-img">
            <img src={Me} alt="xyz" />
            </div>
            <div className="about-card">
                <h2>I'm Harsh Singh</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias, accusamus iusto sapiente aliquam officia in culpa maiores illum iste, veritatis eius suscipit laborum eaque repellat perspiciatis exercitationem ullam? Fugit.
                </p>
                <p>Have Something to say ?</p>

                <span>Lets Chat <BsFillChatDotsFill/></span>
            </div>
        </div>
    </div>
  )
}

export default About