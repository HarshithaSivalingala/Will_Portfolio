import "./ECskills.css";
import React from 'react'
import { useNavigate } from "react-router-dom";

const ECskills = () => {
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
	<div className="images">
              <img src="images/img1.jpg" alt=""/>
               <img src="images/img7.jpg" alt=""/>
               <img src="images/img5.jpg" alt=""/>
			   <img src="images/img2.jpg" alt=""/>
			   <img src="images/img4.jpg" alt=""/>
			   <img src="images/img8.jpg" alt=""/>
			   <img src="images/img6.jpg" alt=""/>
			   <img src="images/img3.jpg" alt=""/>
			   <img src="images/img10.jpg" alt=""/>
			   <img src="images/img9.jpg" alt=""/>   
	</div>
	  </>
  )
}

export default ECskills


