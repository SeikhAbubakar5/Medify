import React from 'react';
import "./Footer.css"
import Logo from "../../assets/Logo.svg"
import FaceBook  from "../../assets/FbIcon.png";
import  Twitter from "../../assets/TwitterIcon.png"
import Youtube  from "../../assets/YoutubrIcon.png"
import Pintrest from "../../assets/PintrestIcon.png"
import RightArrow from './RightArrow';
const Footer = () => {

  return (
    <div className='FContainer'>
        <div className='containerLogo'>
            <div className='logos'><img src={Logo} alt='Logo'/><p>Medify</p></div>
            <div className='Icons'>
                <img src={FaceBook} alt='FaceBook'/>
                <img src={Twitter} alt='Twitter'/>
                <img src={Youtube} alt='Youtube'/>
                <img src={Pintrest} alt='Pintrest'/>
            </div>
        </div>
        <div className='containerText'>
            <div className='footerItem'>
                <RightArrow element="About Us"/>
                <RightArrow element="Our Pricing"/>
                <RightArrow element="Our Gallery"/>
                <RightArrow element="Appointment"/>
                <RightArrow element="Privacy Policy"/>
            </div>
        </div>
        <div className='containerText'>
            <div className='footerItem'>
                <RightArrow element="Orthology"/>
                <RightArrow element="Neurology"/>
                <RightArrow element="Dental Care"/>
                <RightArrow element="Opthalmology"/>
                <RightArrow element="Cardiology"/>
            </div>
            
        </div>
        <div className='containerText'>
            <div className='footerItem'>
                <RightArrow element="About Us"/>
                <RightArrow element="Our Pricing"/>
                <RightArrow element="Our Gallery"/>
                <RightArrow element="Appointment"/>
                <RightArrow element="Privacy Policy"/>
            </div>
        </div>
        <div className='copyRight'>
            <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
