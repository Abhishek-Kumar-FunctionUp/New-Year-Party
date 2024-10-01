import React, { useState, useEffect } from "react";
import "./Countdown.css"; 

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown">
      <h2>Countdown to Event</h2>
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time">{timeRemaining.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span className="time">{timeRemaining.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time">{timeRemaining.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time">{timeRemaining.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
