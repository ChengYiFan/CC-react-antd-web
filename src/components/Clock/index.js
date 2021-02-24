import React, { useState, useEffect } from 'react';

export default () => {
  const [date, setDate] = useState(new Date());
  let timerId = null;

  useEffect(() => {
    timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};