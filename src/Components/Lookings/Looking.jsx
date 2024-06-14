import React from 'react';
import Doctor from "../../assets/Doctors1.png";
import Labs from "../../assets/Labs.png";
import Ambulance from "../../assets/Ambulance.png";
import Hospitals from "../../assets/Hospitals.png";
import MedicalsStore from "../../assets/MedicalStore.png";
import "./Looking.css";

const Looking = () => {
  const items = [
    { image: Doctor, name: "Doctors" },
    { image: Labs, name: "Labs" },
    { image: Hospitals, name: "Hospitals" , active: true },
    { image: MedicalsStore, name: "Medical Stores" },
    { image: Ambulance, name: "Ambulance" },
  ];

  return (
    <>
    <span style={{textAlign:'center',position:'relative',top:'30px'}}><h2>You may looking for</h2></span>
    <div className="container">
      {items.map((item, index) => (
        <div 
            key={index}
            className={`card ${item.active ? 'active' : ''}`}
          >
          <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-name">{item.name}  </div>
        </div>
      ))}
    </div>
    </>
    
  );
};
export default Looking;

