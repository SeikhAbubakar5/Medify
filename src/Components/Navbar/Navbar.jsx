import React from 'react';
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className='info'>
      <p> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
    </div>
    <div className='navContainer'>
            <Link to="/" style={{textDecoration:'none'}}>
            <div className='logo' ><img src={logo} alt='Logo'/>Medify</div>
            </Link>
        
        <div className='navItem'>
            <span>Find Doctors</span>
            <Link to="/bookslot" style={{textDecoration:'none'}}>
            <span>Hospitals</span>
            </Link>
            <span>Medicines</span>
            <span>Surgeries</span>
            <span>Software for Providers</span>
            <span>Facilities</span>
            <Link to="/mybookings">
            <span><button>My Bookings</button></span>
            </Link>
            
        </div>
    </div>
    </>
  );
}

export default Navbar;
