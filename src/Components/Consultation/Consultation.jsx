import React from 'react';
import FrameIcon from "../../assets/Frame.png";
import callIcon from "../../assets/Call.png";
import DoctorsImg from "../../assets/Consultation1.png";
import PatientsImg from "../../assets/Consultation2.png";
import "./Consultation.css"
const Consultation = () => {
  return (
    <div className='mainContainers'>
        <div className='consultation'>
        <button>
            <h3><img src={callIcon} alt='phone' style={{height:'34px', width:'43px'}}/>Free Consultation</h3>
            <p>Consultation with the best</p>
        </button>
            <span className='img1'><img src={DoctorsImg} alt='Doctors'/></span>
            <span className='img2'><img src={PatientsImg} alt='Patients'/></span>
        </div>

        <div className='sub'>
            <div className='subDiscription1'>
                <h6>HELPING PATIENTS FROM AROUND THE GLOBE!!</h6>
                <h2>Patient <span style={{color:'#2AA7FF'}}>Caring</span></h2>
                <p>Our goal is to deliver quality of care in a courteous, respectful, and <br/>compassionate manner. We hope you will allow us to care for you and <br/>strive to be the first and best choice for healthcare.</p>
            </div>
            <div className='subDiscriptions2'>
                <p><img src={FrameIcon} alt='Icon'/>Stay Updated About Your Health</p>
                <p><img src={FrameIcon} alt='Icon'/>Check Your Results Online</p>
                <p><img src={FrameIcon} alt='Icon'/>Manage Your Appointments</p>
            </div>
        </div>
    </div>
  );
}

export default Consultation;
