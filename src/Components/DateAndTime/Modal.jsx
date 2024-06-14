import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

Modal.setAppElement('#root');

const EmailVerificationModal = ({ isOpen, onClose, onSave }) => {
  const [email, setEmail] = useState('');

  const handleSave = () => {
    onSave(email);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Email Verification"
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <h2>Confirm booking</h2>
      <p>Please enter your email to confirm booking for</p>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
      />
      <div className="modalActions">
        <button style={{background:'#14BEF0',color:'#FFFFFF'}} onClick={handleSave}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default EmailVerificationModal;
