import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import "./Contact.scss";
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Contact() {
  const form = useRef()
  const p="<Projects"
const h="Home/>"
const position = [17.361457, 78.474140]

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm(
      'service_d3136kb','template_rb6onjq',form.current,'WlKKuSP6R5ReOsrZx'
    )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
}
  return (
    <>
    <div className="anm">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </div>
    <div className='contact'>
    
      <div className="ltop">
      <Link to ="/projects">{p}</Link>
      </div>
      <div className="rbot">
        <Link to ="/">{h}</Link>
      </div>
      <div className="contact_left">
        
  <div className="textzone">
       <AnimatedLetters
        strArray={['C', 'o', 'n', 't', 'a', 'c', 't','M', 'e']}
       />
   </div> 
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className="half">
          <input type="text" name="name" placeholder="Name" required/>
            </li>
            <li className="half">
          <input type="email" name ="email" placeholder="Email" required/>
            </li>
            <li >
              <input placeholder="Subject" type="text" name="subject" required/>
            </li>
            <li >
          <textarea placeholder='Message' name="message" required></textarea>
          </li>
          <li >
          <input type="submit" className="flat-button" value="SEND"/>
          </li>
          </ul>
          
        </form>
      </div>

<div className='contact_right'>
         India,
         <br/>
        Hyderabad,Telangana
         <span>harshithasivalingala@gmail.com</span>
      </div>
      <div className='map_wrap'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    Hyderabad <br /> SR Nagar.
                </Popup>
                </Marker>
            </MapContainer>
      </div>

    </div>
    </>
   
  )
}

export default Contact
