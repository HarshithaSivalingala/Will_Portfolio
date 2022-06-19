import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3Full,
  DiJava
} from "react-icons/di";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
  SiFirebase,
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import "./Skills.css";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();
  const button = "<<";
  return (
    <>
    <div className="anm">
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
    </div>
    <button className="back_button" onClick={() => navigate("/about")}>
          {" "}
          {button}{" "}
        </button>
    <div className="skills">
      <div className="skills_title">
      <AnimatedLetters
        strArray={['S','k','i','l','l','s']}
       />
      </div>
      <div className="tech">
        <CgCPlusPlus className="tech-icons"/>
        <DiJavascript1 className="tech-icons"/>
        <DiNodejs className="tech-icons"/>
        <DiReact className="tech-icons"/>
        <DiMongodb className="tech-icons"/>
        <DiGit className="tech-icons"/>
        <SiFirebase className="tech-icons"/>
        <DiPython className="tech-icons"/>
        <GrMysql className="tech-icons"/>
        <DiJava className="tech-icons"/>
        <DiHtml5 className="tech-icons"/>
        <DiCss3Full className="tech-icons"/>
      </div>
      <div className="qualifications">
        <div className="qua_title">
        <AnimatedLetters
        strArray={['Q', 'u', 'a', 'l', 'i', 'f', 'i','c', 'a','t','i','o','n','s']}
       />
      </div>
        <div className="outer">
        <div className="liner"></div>
          <div className="rounds">
          <ArrowUpwardIcon className="round2" />
          <ArrowDownwardIcon className="round1"/>
          <ArrowUpwardIcon className="round2"/>
          </div>
        </div>
        <div className="m_line">
        </div>
      <div className="qua">
        <div className="data">
          <h3> Schooling</h3>
          <p>
            Hindu Public School(CBSE)
            <br/>
            CGPA:10
            <br/>
            years of study:2011-2017
          </p>
        </div>
        <div className="data">
          <h3> Intermediate</h3>
        <p>
            Narayana Junior College
            <br/>
            percentage:94.7%
            <br/>
            years of study:2017-2019
          </p>
        </div>
        <div className="data">
          <h3> B.Tech-IT</h3>
        <p>
            BVRIT Hyderabad 
            <br/>
            CGPA:7.6
            <br/>
            years of study:2019-2023
          </p>
          </div>
        </div>
      </div>
      
      </div>
    
    </>
  );
}

export default Skills;