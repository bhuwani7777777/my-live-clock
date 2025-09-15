import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <p>{time.toLocaleTimeString()}</p>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
};

export default DigitalClock;
