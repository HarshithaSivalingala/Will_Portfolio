import React from "react";
import { AnimatedText } from "./AnimatedText";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import {Sicons} from "../Sicons"
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const button=">>"
  const mail="harshithasivalingala@gmail.com"
  return (
    <>
    <div className="anm">
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
    </div>

<div className ="Home">
    <AnimatedText
    // overlayColor="#add8e6"
    overlayColor="#b0e0e6"
    >HARSHITHA<br/>SIVALINGALA
    </AnimatedText>
    <div className="line1"></div>
    <div className="line2">
    </div>
    <div className="Etext">
   <p><Link to="/contact">{mail}</Link></p>
     </div>
   <button className="button_main" onClick={() => navigate("/about")}> {button} </button>
  
  <Sicons/>
  
</div>
    </>
  )
}

export default Home;
