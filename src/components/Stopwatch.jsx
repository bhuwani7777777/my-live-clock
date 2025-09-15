import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((t) => t + 1), 100);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (t) => {
    const seconds = Math.floor(t / 10) % 60;
    const tenths = t % 10;
    const minutes = Math.floor(t / 600) % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
  };

  return (
    <div className="stopwatch">
      <h3>Stopwatch</h3>
      <p>{formatTime(time)}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Stopwatch;
