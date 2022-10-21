import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { SiCplusplus, SiCss3, SiMaterialui, SiMysql, SiRedux } from 'react-icons/si'
import { DiBootstrap, DiGithubBadge, DiHtml5, DiJava, DiJavascript1} from 'react-icons/di'
const Skills = () => {
  return (
    <div className="skill-main">
        <h1 className='xyg'>Skills</h1>
        <div className="skill-head">
            <div className="skill-left">
                <h3>Professional Skills</h3>
                <p>Skilled in MERN Stack, C++,Bootstrap and Mysql and basic of Android Development Having a strong hold on data structure and algorithms</p>
                <div className="skills-info">
                    <div className="skillitem"><span><GrReactjs/></span>React-JS</div>
                    <div className="skillitem"><span><SiRedux/></span>Redux</div>
                    <div className="skillitem"><span><DiJavascript1/></span>JavaScript</div>
                    <div className="skillitem"><span><DiJava/></span>Java</div>
                    <div className="skillitem"><span><DiBootstrap/></span>Bootstrap</div>
                    <div className="skillitem"><span><SiCplusplus/></span>C++</div>
                    <div className="skillitem"><span><SiMaterialui/></span>Material UI</div>
                    <div className="skillitem"><span><SiMysql/></span>SQL</div>
                    <div className="skillitem"><span><DiHtml5/></span>HTML</div>
                    <div className="skillitem"><span><SiCss3/></span>CSS</div>
                    <div className="skillitem"><span><DiGithubBadge/></span>GIT</div>
                </div>
            </div>
            <div className="skill-right">
                <div className="skill-right-img">
                <img src='https://sarbajitmohanty.me/assets/img/skills1.svg' alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills