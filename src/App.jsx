import React, { useState } from "react";
import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import TimezoneClock from "./components/TimezoneClock";
import ThemeToggle from "./components/ThemeToggle";
import Alarm from "./components/Alarm";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const timezones = [
    { tz: "Asia/Kathmandu", label: "Nepal" },
    { tz: "America/New_York", label: "New York" },
    { tz: "Europe/London", label: "London" },
    { tz: "Asia/Tokyo", label: "Tokyo" },
  ];

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>🕒 Ultimate Clock Dashboard</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      <main>
        <section className="clocks">
          <DigitalClock />
          <AnalogClock size={250} />
        </section>

        <section className="world-clocks">
          <h2>World Timezones</h2>
          <div className="timezone-container">
            {timezones.map((tz) => (
              <TimezoneClock
                key={tz.tz}
                timezone={tz.tz}
                label={tz.label}
              />
            ))}
          </div>
        </section>

        <section className="utilities">
          <Alarm />
          <Timer />
          <Stopwatch />
        </section>
      </main>

      <footer>Developed by Bhanu | React Ultimate Clock</footer>
    </div>
  );
}

export default App;
