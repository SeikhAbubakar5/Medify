import React from 'react';
import './TimeSelector.css';

const TimeSelector = ({ availableTimeSlots = { morning: [], afternoon: [], evening: [] }, onTimeSlotClick }) => {
  return (
    <div className="timeSelector">
      <div className="timeSlotSection">
        <h5>Morning</h5>
        <div className="timeSlotButtons">
          {availableTimeSlots.morning.map(slot => (
            <button key={slot} onClick={() => onTimeSlotClick(slot)}>{slot}</button>
          ))}
        </div>
      </div>
      <div className="timeSlotSection">
        <h5>Afternoon</h5>
        <div className="timeSlotButtons">
          {availableTimeSlots.afternoon.map(slot => (
            <button key={slot} onClick={() => onTimeSlotClick(slot)}>{slot}</button>
          ))}
        </div>
      </div>
      <div className="timeSlotSection">
        <h5>Evening</h5>
        <div className="timeSlotButtons">
          {availableTimeSlots.evening.map(slot => (
            <button key={slot} onClick={() => onTimeSlotClick(slot)}>{slot}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;
