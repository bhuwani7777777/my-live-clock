import React, { useState, useEffect } from "react";

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const checkAlarm = setInterval(() => {
      const now = new Date();
      const current = now.toTimeString().slice(0, 5);
      if (active && alarmTime === current) {
        const audio = new Audio("/alarm.mp3");
        audio.play();
        alert("⏰ Alarm Ringing!");
        setActive(false);
      }
    }, 1000);
    return () => clearInterval(checkAlarm);
  }, [alarmTime, active]);

  return (
    <div className="alarm">
      <h3>Set Alarm</h3>
      <input type="time" value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)} />
      <button onClick={() => setActive(true)}>Set Alarm</button>
    </div>
  );
};

export default Alarm;
