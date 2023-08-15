import React from 'react';
import './avatarmodal.css'; 

const AvatarModal = ({ avatarUrl, onClose }) => {
  return (
    <div className="avatar-modal-overlay">
      <div className="avatar-modal">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={avatarUrl} alt="Avatar" className='avatar-modal-image' />
      </div>
    </div>
  );
};

export default AvatarModal;
