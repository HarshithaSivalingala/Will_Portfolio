import React from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.css";

function About() {
  const p = "Projects/>";
  const h = "<Home";
  return (
    <>
      <div className="anm">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="ltop">
        <Link to="/">{h}</Link>
      </div>
      <div className="rbot">
        <Link to="/projects">{p}</Link>
      </div>
      <div className="about">
        <div className="body">
          <div className="left">
            <div className="my_img">
              <img src="resources/my_img3.jpg" alt="" />
              <div className="outlines">
                <div className="outline1"></div>
                <div className="outline2"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="textzone1">
              <AnimatedLetters
                strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              />
            </div>

            <div className="my_info">
              <div className="info_data">
                <div className="name">
                  <p>Hello! I am</p>
                  <div className="i_name">Harshitha</div>
                </div>
                <p>
                  I am a software engineer, passionate about building excellent
                  software. Working hands on problem solving using data
                  structures and web-development.
                </p>
              </div>

              <form
                method="get"
                action="resources/resume.pdf"
                target="_blank"
                title="harshitha_resume"
              >
                <button className="r_button" type="submit">
                  Resume
                </button>
              </form>

              <div className="textzone_e">
                <AnimatedLetters
                  strArray={[
                    "M",
                    "y",
                    "E",
                    "x",
                    "p",
                    "e",
                    "r",
                    "i",
                    "e",
                    "n",
                    "c",
                    "e",
                  ]}
                />
              </div>
              <div className="exp_data">
                <div className="exp_dat">
                  <div className="round"></div>
                  <p>
                    Interned as a full stack developer for a period of 2 months
                    in Study Owl Education Pvt Ltd.
                  </p>
                </div>
                <div className="exp_dat">
                  <div className="round"></div>
                  <p>
                    Completed Google Cloud Program associated with qwiklabs and
                    earned skill badges.
                  </p>
                </div>
              </div>
              <div className="abt_buttons">
                <div className="s_button">
                  <Link to="/skills_n_qualifications">
                    <button>Know More</button>
                  </Link>
                </div>
                <div className="kmore_button">
                  <Link to="/artexpo">
                    <button>Art Expo</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
