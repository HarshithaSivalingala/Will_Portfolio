import React from "react";
import "./Projects.scss";
import Videomodal from "./Videomodal.jsx";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const data = [
    {
      id: 1,
      img: "resources/goats_and_tigers.jpg",
      title: "Goats and Tigers",
      ved: "resources/videos/goats_and_tigers.mp4",
      desc: "It is an ancient board game where the goats are captured by tigers,while goats try to block tigers.The coins on the board are moved based on the input given by the user from the text box.The project includes music and  GUI.",
      tec: ["Python", "PyGame", "PyCharm"],
      git: "https://gitlab.com/pratyusha05/goats-and-tiger",
    },
    {
      id: 2,
      img: "resources/pose_estimation.png",
      title: "Pose Estimation",
      ved: "resources/videos/pose_estimation.mp4",
      desc: "Devised a deep neural network model to superimpose the pose estimation on the real-time feed.Human pose estimation is defined as localization of human joints in video or images.Developed a fitness application using human pose estimation by capturing movement of the user while one exercise and keeps track of the count.",
      tec: ["PyCharm", "MediaPipe", "Library: OpenCV"],
      git: "https://gitlab.com/balu_022/pose_estimation",
    },
    {
      id: 3,
      img: "resources/konnekt.jpg",
      title: "Konnekt",
      desc: "Konnekt is a business communication platform where in the users work together.These chat rooms are segregated into public and private rooms. There can also be one on one chat between the users.",
      tec: ["React", "Redux", "Firebase"],
      git: "https://gitlab.com/sritulasi/konnekt",
    },
    {
      id: 4,
      img: "resources/E-commerce.png",
      title: "SchoolShop",
      ved: "resources/videos/E-commerce.mp4",
      desc: " SchoolShop is a full-stack E-commerce application.This application is fully functional with different views for user and admin.",
      tec: ["React", "Redux", "Mongodb", "Node"],
      git: "https://github.com/HarshithaSivalingala/ProShop.git",
    },
  ];

  const a = "<About";
  const c = "Contact/>";

  return (
    <>
      <div className="anm">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className={!openModal ? "projects" : "active"} id="projets">
        <div className="ltop">
          <Link to="/about">{a}</Link>
        </div>
        <div className="rbot">
          <Link to="/contact">{c}</Link>
        </div>
        <div className="textzone2">
          <AnimatedLetters
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
          />
        </div>

        <div className="container">
          <Carousel breakPoints={breakPoints}>
            {data.map((d) => (
              <div className="card">
                <div className="center">
                  <img src={d.img} alt="" />
                </div>
                <div className="tit">{d.title}</div>
                <div className="bottom">
                  <div className="items">
                    <div>
                      <button
                        className="btn-primary"
                        onClick={() => {
                          setOpenModal(true);
                          setModalData(d);
                        }}
                      >
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {openModal && (
        <Videomodal setOpenModal={setOpenModal} modalData={modalData} />
      )}
    </>
  );
}

export default Projects;
