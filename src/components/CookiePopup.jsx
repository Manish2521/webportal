import React, { useState } from 'react';

function CookiePopup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    // Perform actions related to accepting cookies
    setShowPopup(false);
  };

  const handleDecline = () => {
    // Perform actions related to declining cookies
    setShowPopup(false);
  };

  return (
    <div className={`bg-gray-100 ${showPopup ? '' : 'hidden'}`}>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <p className="text-sm text-gray-700">We use cookies to ensure you get the best experience on our website.</p>
          <div className="flex space-x-4">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">Accept</button>
            <button
              onClick={handleDecline}
              className="px-4 py-1.5 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 ease-in-out">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePopup;
