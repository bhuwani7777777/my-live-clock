import React, { useEffect, useRef } from "react";
import "./AnalogClock.css";

const AnalogClock = ({ size = 250 }) => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = now.getHours() % 12 + minutes / 60;

      if (hourRef.current) hourRef.current.style.transform = `rotate(${hours * 30}deg)`;
      if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minutes * 6}deg)`;
      if (secondRef.current) secondRef.current.style.transform = `rotate(${seconds * 6}deg)`;
    };

    const timer = setInterval(updateClock, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="advanced-analog-clock" style={{ width: size, height: size }}>
      <div className="clock-face">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="hour-mark" style={{ transform: `rotate(${i * 30}deg)` }} />
        ))}
        <div ref={hourRef} className="hand hour" />
        <div ref={minuteRef} className="hand minute" />
        <div ref={secondRef} className="hand second" />
        <div className="center-circle" />
      </div>
    </div>
  );
};

export default AnalogClock;
