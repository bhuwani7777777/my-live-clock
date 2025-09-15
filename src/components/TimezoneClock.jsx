import React, { useState, useEffect } from "react";

const TimezoneClock = ({ timezone, label }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000); // update every second
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { timeZone: timezone });
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { timeZone: timezone });

  return (
    <div className="timezone-clock">
      <h3>{label}</h3>
      <p className="time">{formatTime(time)}</p>
      <p className="date">{formatDate(time)}</p>
    </div>
  );
};

export default TimezoneClock;
