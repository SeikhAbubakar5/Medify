import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Bookslot.css';
import Navbar from '../../Components/Navbar/Navbar';
import SearchCity from '../../Components/SearchStateCity/SearchCity';
import Icon from "../../assets/icon.PNG";
import Hospital from "../../assets/Hospital.png";
import DateSlider from "../../Components/DateAndTime/DateSlider";
import TimeSelector from '../../Components/DateAndTime/TimeSelector';
import EmailVerificationModal from '../../Components/DateAndTime/Modal';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Footer from '../../Components/Footer/Footer';
import Faq from '../../Components/FAQ/Faq';
import Downloadapp from '../../Components/DownloadApp/Downloadapp';

const Bookslot = () => {
  const location = useLocation();
  const medicalCenters = location.state?.medicalCenters || [];
  const centerCount = medicalCenters.length;
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpandCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setIsModalOpen(true);
  };

  const handleModalSave = (email) => {
    const bookingDetails = {
      email,
      date: selectedDate,
      time: selectedTimeSlot,
      hospital: medicalCenters[expandedCard]
    };

    // Save booking details to local storage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    setIsModalOpen(false);
    alert(`Appointment booked with email ${email} on ${selectedDate} at ${selectedTimeSlot}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const availableSlots = {
    morning: ["11:30 AM","12:30 PM", "01:30 PM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  return (
    <>
      <Navbar />
      <div className='search'>
        <div className='bar'></div>
        <div className='searchInput'>
          <SearchCity />
        </div>

        <div className='results'>
          {centerCount > 0 ? (
            <>
              <h2>{centerCount} medical center available in Fort Collins.</h2>
              <p>Book appointments with minimum wait-time & verified doctor details</p>
              <div className='cards'>
                <div className='cardsContent'>
                  {medicalCenters.map((elem, index) => (
                    <div key={index} className='centerInfo'>
                      <div className='cardHeader'>
                      <div className='image' style={{width: '124px', height: '124px',borderRadius:'50%',alignContent:'center'}}>
                          <img style={{ width: '80px', height: '80px',marginLeft:'20px'}} src={Hospital} alt='hospital' />
                        </div>
                        <div className='text'>
                          <h3 style={{color:'#14BEF0',fontSize:'20px',lineHeight:'28p',fontWeight:'600'}}>{elem['Hospital Name']}</h3>
                          <h4>{elem['City']}, {elem['State']}</h4>
                          <p>Smilessence Center for Advanced Dentistry + 1</p>
                          <p>more</p>
                          <p><span style={{color:'#02A401',fontSize:'14px',fontWeight:'700'}}>FREE-</span><span style={{textDecoration:"line-through"}}>₹500</span> Consultation fee at clinic</p>
                          <h5><ThumbUpIcon style={{color:'#FFFFFF',textAlign:'center',width:'13px',height:'12px'}}/><span style={{color:'#FFFFFF',opacity:'50%',fontSize:'14px',marginInline:'5px'}}>{elem['Hospital overall rating']}</span></h5>
                        </div>
                        <div className='btn'>
                          <h3>Available Today</h3>
                          <button onClick={() => handleExpandCard(index)}>
                            {expandedCard === index ? 'Hide FREE Center Visit' : 'Book FREE Center Visit'}
                          </button>
                        </div>
                      </div>
                      {expandedCard === index && (
                        <div className='expandedContent'>
                          <DateSlider onDateChange={handleDateChange} />
                          <TimeSelector availableTimeSlots={availableSlots} onTimeSlotClick={handleTimeSlotClick} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <img src={Icon} alt='icon' />
              </div>
            </>
          ) : (
            <h2>Please select a state and city</h2>
          )}
        </div>
      </div>
      <EmailVerificationModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onSave={handleModalSave} 
      />
      <Faq/>

      <Downloadapp/>
      
      <Footer/>
    </>
  );
};

export default Bookslot;
