import React from 'react';
import "./Ourfamilies.css"
import Hospitals11 from "../../assets/Hospital00.png";
import Parrents from "../../assets/Parrents.png";
import ExpertDoc from "../../assets/ExpertDoctor.png";
import Drugstore from "../../assets/Drugstore.png";
const Ourfamilies = () => {

  return (
    <div className='parentClasses'>
        <div className='textItem2'>
            <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
            <h2>Our Families</h2>
            <p>We will work with you to develop individualised care plans,<br/> including management of chronic diseases. If we cannot assist,<br/>  we can provide referrals or advice about the type of practitioner <br/> you require. We treat all enquiries sensitively and in the strictest <br/> confidence.</p>
        </div>
        <div className='parentClass3'>
            <div className='subClass1'>
                <div className='Class1'>
                    <img src={Parrents} alt='Parents'/>
                    <h4>5000+</h4>
                    <p>Happy Patients </p>
                </div>
                <div className='Class1'>
                <img src={Drugstore} alt='Drugstore'/>
                    <h4>1000+</h4>
                    <p>Laboratories</p>
                </div>
            </div>
            <div className='subClass2'>
                <div className='Class1'>
                <img src={Hospitals11} alt='Hospitals11'/>
                    <h4>200+</h4>
                    <p>Hospitals</p>
                </div>
                <div className='Class1'>
                <img src={ExpertDoc} alt='ExpertDoc'/>
                    <h4>700+</h4>
                    <p>Expert Doctors</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Ourfamilies;
