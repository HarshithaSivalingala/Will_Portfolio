import React from 'react'
import "./Videomodal.css";
import VideoPlayer from 'react-video-js-player';

function Videomodal({ setOpenModal,modalData }) {

  return (
    <div className="mainCont">
    <div className="modalBackground">
       <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >X</button>
        </div>

      <div className="modalContainer">
        {modalData.ved ?
        (<div className="left_modal">
            <VideoPlayer
            className='vid'
              src={modalData.ved}
            />
        </div>)
        :(<div className='left_modal_no'>
          <p>No video :( <br/>
          Go through Git Repo :)</p>
          </div>)}
        <div className="right_modal">
          <p className='desc'>
        {modalData.desc}
          </p>
          <div className='tec'>
          {modalData.tec.map(d=>(
            <span>{d}</span>
          ))}
          </div>
          <div className='p_ved'>

    <a  href={modalData.git}>
      <p>Git repo</p>
      <i className="fa-brands fa-gitlab"></i>
     </a>
   </div>
   
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Videomodal;

