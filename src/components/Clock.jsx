import React, { useState, useEffect } from "react";

function Clock() {
  
  const handleMinute = (d) => {
      if(d.getMinutes() < 10) {
         return '0' + d.getMinutes();
      } else {
         return d.getMinutes();
      }
  }

  const d = new Date();
  const [hour, sethour] = useState(d.getHours());
  const [minute, setminute] = useState(handleMinute(d));
  const [minuteCompleted , setminuteCompleted] = useState(false);

  useEffect(() => {
      const d = new Date();
      sethour(d.getHours());
      setminute(handleMinute(d));
  }, [minuteCompleted]);

  useEffect(() => {
    let interval = setInterval(() => {
      const d = new Date();
      if(d.getSeconds() === 0) {
        setminuteCompleted(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAmPm = (hr) => {
    return hr >= 12 ? "PM" : "AM";
  };

  const getCurrentDate = () => {
    const d = new Date();
    return `${d.toLocaleDateString()}`;
  };

  return (
    <div className="clock-container d-flex align-items-center">
      <div className="clock">
        <span>{hour}</span>:<span>{minute}</span>{" "}
        <span>{handleAmPm(hour)}</span>
      </div>
      <span className="date">{getCurrentDate()}</span>
    </div>
  );
}

export default Clock;
