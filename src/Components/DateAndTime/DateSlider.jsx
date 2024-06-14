import React, { useState, useEffect } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import './DateSlider.css';

const DateSlider = ({ onDateChange }) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDates, setVisibleDates] = useState([]);

  useEffect(() => {
    const dates = [];
    for (let i = 0; i <7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(formatDate(date));
    }
    setAvailableDates(dates);
    // Display first three dates
    setVisibleDates(dates.slice(0, 3));
  }, []);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  const handleDateClick = (index) => {
    setCurrentIndex(index);
    onDateChange(availableDates[index]);
  };

  const handleNext = () => {
    if (currentIndex < availableDates.length - 3) {
      setCurrentIndex(currentIndex + 1);
      setVisibleDates(availableDates.slice(currentIndex + 1, currentIndex + 4));
      onDateChange(availableDates[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setVisibleDates(availableDates.slice(currentIndex - 1, currentIndex + 2));
      onDateChange(availableDates[currentIndex - 1]);
    }
  };

  return (
    <div className="dateSlider">
      <button onClick={handlePrev} disabled={currentIndex === 0}><ArrowCircleLeftOutlinedIcon/></button>
      <div className="dateDisplay">
        {visibleDates.map((date, index) => (
          <button
            key={index}
            className={`dateItem ${currentIndex % 3 === index ? 'active' : ''}`}
            onClick={() => handleDateClick(currentIndex - (currentIndex % 3) + index)}
          >
            {date}
            <p>10 slots Available</p>
          </button>
        ))}
      </div>
      <button onClick={handleNext} disabled={currentIndex === availableDates.length - 2}><ArrowCircleRightOutlinedIcon/></button>
    </div>
  );
};

export default DateSlider;
