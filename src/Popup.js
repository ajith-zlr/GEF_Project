import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        {/* Add your popup content here */}
        <p>This is your popup content.</p>
      </div>
    </div>
  );
};

export default Popup;
