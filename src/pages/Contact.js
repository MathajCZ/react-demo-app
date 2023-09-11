import React from 'react';
import MainBackImage from "../assets/triangle-pattern.jpg";
import {Link} from "react-router-dom";
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className="contactContainer" style={{backgroundImage: `url(${MainBackImage})`}}>
        <p>If you want to reach out to me please use my <Link to="https://linkedin.com/in/matěj-petráš-771aa3290" className='link'>Linked in profile</Link>.
        </p>
        </div>
    </div>
  );
}

export default Contact