import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Date: {currentDateTime.toLocaleDateString()}</p>
      <p>Time: {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTimeDisplay;
