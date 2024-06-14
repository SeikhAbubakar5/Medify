import React from 'react';
import Dentistry from "../../assets/Dentistry.png";
import PrimaryCare from "../../assets/PrimaryCare.png";
import Cardilogy from "../../assets/Cardilogy.png";
import MRI from "../../assets/MRI.png";
import Bloodsample from "../../assets/BloodSample.png";
import Piscology from "../../assets/Cardilogy.png";
import Laboratory from "../../assets/Laboratory.png";
import Xray from "../../assets/Xray.png";
import "./Specialisation.css";

const Specialisation = () => {
    const images=[  {src: Dentistry, alt: 'Dentistry' },
                    {src: PrimaryCare, alt: 'Primary Care' },
                    { src: Cardilogy, alt: 'Cardiology' },
                    { src: MRI, alt: 'MRI Resonance' },
                    { src: Bloodsample, alt: 'Blood Test' },
                    { src: Piscology, alt: 'Piscologist' },
                    { src: Laboratory, alt: 'Laboratory' },
                    { src: Xray, alt: 'X-Ray' },
                 ]
  return (
    <div className='ContainerItem'>
        <div className='Heading'>
        <p>Find by specialisation</p>
        </div>
        <div className='spIcon'>
            {images.map((img ,index)=>(
                <div key={index} className='wrapper'>
                    <img src={img.src} alt={img.src}/>
                    <p>{img.alt}</p>
                </div>
            ))}
        </div>
        <div className='button1'>
        <button>View All</button>
        </div>
    </div>
  );
}

export default Specialisation;
