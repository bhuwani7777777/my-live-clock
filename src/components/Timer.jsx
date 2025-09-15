import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval;
    if (active) interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="timer">
      <h3>Timer</h3>
      <p>{formatTime(seconds)}</p>
      <button onClick={() => setActive(!active)}>{active ? "Pause" : "Start"}</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
};

export default Timer;
