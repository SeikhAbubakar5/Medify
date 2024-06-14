import React from 'react';
import "./Downloadapp.css";
import mobileframe from "../../assets/mobileFrame.png";
import mobilepage from "../../assets/mobilepage.png";
import googleIcon from "../../assets/googleplay.png";
import appleIcon from "../../assets/applestore.png";

const Downloadapp = () => {
  return (
    <div className='appContainer'>
      <div className='imageContainers'>
      <div className='imageWrapper1'>
          <img src={mobileframe} alt='mobileframe' className='mobileFrame'/>
          <img src={mobilepage} alt='mobilepage' className='mobilePage'/>
        </div>
        <div className='imageWrapper2'>
          <img src={mobileframe} alt='mobileframe' className='mobileFrame'/>
          <img src={mobilepage} alt='mobilepage' className='mobilePage'/>
        </div>
      </div>

      <div className='downloadSection'>
        <h2>Download the<br /><span style={{color:'#2AA7FF'}}>Medify</span> App</h2>
        <p>Get the link to download the app</p>
        <div className='phoneInput'>
          <label htmlFor='phoneNumber'>+91</label>
          <input type='text' id='phoneNumber' name='phoneNumber' placeholder='Enter phone number' />
          <button type='submit'>Send SMS</button>
        </div>
        <div className='buttonWrappers'>
            <img src={googleIcon} alt='googleIcon'/>
            <img src={appleIcon} alt='appleIcon'/>
        </div>
      </div>
    </div>
  );
}

export default Downloadapp;
