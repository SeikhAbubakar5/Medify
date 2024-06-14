
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import heroImg from "../../assets/doctors.png"
import Titik from "../../assets/Titik-titik.png"
import "./Homepage.css";
import SearchCity from '../../Components/SearchStateCity/SearchCity';
import Looking from '../../Components/Lookings/Looking';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Cards from '../../Components/Cards/Cards';
import Specialisation from "../../Components/Specialisation/Specialisation"
import Specialist from '../../Components/Specialist/Specialist';
import Consultation from '../../Components/Consultation/Consultation';
import Newsblogs from '../../Components/Newsblogs/Newsblogs';
import Ourfamilies from '../../Components/Ourfamilies/Ourfamilies';
import Faq from '../../Components/FAQ/Faq';
import Downloadapp from '../../Components/DownloadApp/Downloadapp';



const Homepage = () => {

  return (
    <>
      <div className='main'>
      <Navbar/>
      <div className='container'>
            <div className='findCenter'>
                <h3>Skip the travel! Find Online</h3>
                <h1>Medical <span >Centers</span></h1>
                <p>Connect instantly with a 24x7 specialist or choose to <br/>video visit a particular doctor.</p>
                <Link to="/Bookslot">
                <button>Find Centers</button>
                </Link>
                
            </div>
            <div className='img'>
                <img className='image1' src={heroImg} alt='Heroimage'/>
                <img className='image2' src={Titik} alt='Titik'/>
            </div>
      </div>
      <div className='searchContainer'>
          <SearchCity/>
          <Looking/>
      </div>
      
    </div>
    <Cards/>

    <Specialisation/>

    <Specialist/>

    <Consultation/>

    <Newsblogs/>

    <Ourfamilies/>

    <Faq/>

    <Downloadapp/>
    
    <Footer/>
    
    </>
    
  );
}

export default Homepage;
