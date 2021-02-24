import React, { useState, useEffect } from 'react';

const WithTimer = (WrappedComponent) => {
  return (props) => {
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
    return <WrappedComponent time={date} {...props} />;
  };
};

export default WithTimer;