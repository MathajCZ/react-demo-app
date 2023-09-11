import React from 'react';
import "./About.css";
import MainBackImage from "../assets/triangle-pattern.jpg";
import {Link} from "react-router-dom";


function About() {
  return (
    <div className='about'>
      <div className="aboutContainer" style={{backgroundImage: `url(${MainBackImage})`}}>
        <p>This project was made to represent my skills in React, JS, HTML and CSS. <br></br>
         I used <Link to="https://www.canva.com/" className='link'>Canva</Link> to create favicon. <br></br>
         All pictures I used are from <Link to="https://pixabay.com/" className='link'>Pixabay</Link>.
        </p>
        
      </div>
    </div>
  );
}

export default About

