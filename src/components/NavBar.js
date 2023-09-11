import React, {useState} from "react";
import "./NavBar.css"
import Logo from "../assets/BarSpicesLogo.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

function NavBar () {

        const [openLinks, setOpenLinks] = useState(false); 
        const toggleNavBar = () => {
            setOpenLinks(!openLinks);
        };

    return ( 
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="BarSpices bottles" />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/DrinkList">Drink List</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/DrinkList">Drink List</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavBar}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
  }
  
  export default NavBar;