import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Icon from "../../assets/icon.PNG";
import Hospital from "../../assets/Hospital.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Mybookings.css';
import Footer from '../../Components/Footer/Footer';
import Faq from '../../Components/FAQ/Faq';
import Downloadapp from '../../Components/DownloadApp/Downloadapp';

const Mybookings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);
  
  const bookings = useMemo(() => {
    return JSON.parse(localStorage.getItem('bookings')) || [];
  }, []);

  const handleSearch = () => {
    const filtered = bookings.filter(booking =>
      booking.hospital['Hospital Name'].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBookings(filtered);
  };

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <>
      <Navbar />
      <div className='bar'>
        <h1>My Bookings</h1>
        <div className='searchHospital'>
        <input
          type="text"
          placeholder="Search by hospital"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='searchInput'
        />
        <button onClick={handleSearch} className='searchButton'>Search</button>
      </div>
      </div>
      
      <div className='results'>
        {filteredBookings.length > 0 ? (
          <div className='cards'>
            <div className='cardsContent'>
              {filteredBookings.map((booking, index) => (
                <div key={index} className='centerInfo'>
                  <div className='cardHeader'>
                    <div className='image' style={{width: '124px', height: '124px', borderRadius: '50%', alignContent: 'center'}}>
                      <img style={{width: '80px', height: '80px', marginLeft: '20px'}} src={Hospital} alt='hospital' />
                    </div>
                    <div className='text'>
                      <h3 style={{color:'#14BEF0', fontSize:'20px', lineHeight:'28p', fontWeight:'600'}}>{booking.hospital['Hospital Name']}</h3>
                      <h4>{booking.hospital['City']}, {booking.hospital['State']}</h4>
                      <p>Smilessence Center for Advanced Dentistry + 1</p>
                      <p>more</p>
                      <p><span style={{color:'#02A401', fontSize:'14px', fontWeight:'700'}}>FREE-</span><span style={{textDecoration:"line-through"}}>₹500</span> Consultation fee at clinic</p>
                      <h5><ThumbUpIcon style={{color:'#FFFFFF', textAlign:'center', width:'13px', height:'12px'}}/><span style={{color:'#FFFFFF', opacity:'50%', fontSize:'14px', marginInline:'5px'}}>{booking.hospital['Hospital overall rating']}</span></h5>
                    </div>
                    <div className='timeDate'>
                      <p style={{color:'#2AA7FF',border:'1px solid',fontWeight:"400"}}>{booking.time}</p>
                      <p style={{color:'#00A500',border:'1px solid',fontWeight:"700"}}>{booking.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <img src={Icon} alt='icon' />
          </div>
        ) : (
          <h2>No bookings found.</h2>
        )}
      </div>
      <Faq/>

      <Downloadapp/>
      
      <Footer/>
    </>
  );
}

export default Mybookings;
