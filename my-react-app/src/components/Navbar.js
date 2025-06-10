import React, { useState, useEffect } from "react";
import Logo from '../assets/mountain-bike-rider.jpg';
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    
  // Auto-close menu when resizing above 600px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && openLinks) {
        setOpenLinks(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openLinks]);
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={Logo} alt="Logo" style={{borderRadius: '10px'}} />
            <div className={`hiddenLinks ${openLinks ? "open" : "close"}`}>
                <Link to="/">Home</Link>
                <Link to="/shop"> Shop </Link>
                <Link to="/gallery"> Shop </Link>
                <Link to="/about"> About </Link>
                <Link to="/support"> Support </Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/shop"> Shop </Link>
            <Link to="/gallery"> Gallery </Link>
            <Link to="/about"> About </Link>
            <Link to="/support"> Support </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar
