import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import MainBackImage from "../assets/triangle-pattern.jpg";



function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{backgroundImage: `url(${MainBackImage})`}}>
        <h1>Drink list</h1>
        <p>Drinks of your desire</p>
        <Link to="/DrinkList">
          <button>See drink recipes</button>
        </Link>
      </div>
    </div>
    
  );
}

export default Home