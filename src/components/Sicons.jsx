import React from 'react'
import "./Sicons.scss";
import {
  SiLeetcode,
} from "react-icons/si";

const Sicons = () => {
  return (
  <div class= "Sicons">
    <a href="https://gitlab.com/harshitha_022" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-gitlab"></i></a>
    <a href="https://www.linkedin.com/in/harshithasivalingala/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://leetcode.com/harshitha_022/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a>
    <a href="https://github.com/HarshithaSivalingala"  target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>


 </div>
  )
}

export {Sicons};