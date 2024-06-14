import React from 'react';
import "./Newsblogs.css"
import Detoximg from "../../assets/Detox.png";
import Rebecca from "../../assets/RebeccaLee.png"
const Newsblogs = () => {
  return (
    <div className='newsContainer'>
        <div className='newsHeader'>
            <p>Blog & News</p>
            <h2>Read Our Latest News</h2>
        </div>
        <div className='cardsHeader'>
            <div className='img1'>
                <img src={Detoximg} alt=''/>
                <p> <span>Medical</span> <span>March 31, 2022</span></p> 
               <h5>6 Tips To Protect Your Mental Health When You’re Sick</h5>
               <h4><img src={Rebecca} alt='Rebecca'/>Rebecca Lee</h4>
            </div>
            <div className='img1'>
                <img src={Detoximg} alt=''/>
                <p> <span>Medical</span> <span>March 31, 2022</span></p> 
               <h5>6 Tips To Protect Your Mental Health When You’re Sick</h5>
               <h4><img src={Rebecca} alt='Rebecca'/>Rebecca Lee</h4>
            </div>
            <div className='img1'>
                <img src={Detoximg} alt=''/>
                <p> <span>Medical</span> <span>March 31, 2022</span></p> 
               <h5>6 Tips To Protect Your Mental Health When You’re Sick</h5>
               <h4><img src={Rebecca} alt='Rebecca'/>Rebecca Lee</h4>
            </div>
        </div>
    </div>
  );
}

export default Newsblogs;
