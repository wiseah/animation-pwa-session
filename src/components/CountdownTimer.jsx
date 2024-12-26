import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DdayBox = styled.div`
  font-size: 48px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem 2rem;
  margin-bottom: 24px;
  border-radius: 10px;
`

const TimerContainer = styled.div`
  display: flex;
  gap: 32px;
  font-size: 28px;
  font-weight: bold;
`;

const TimeBox = styled.div`
  border-radius: 10px;
  text-align: center;
`;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const christmas = new Date(now.getFullYear(), 11, 25); // 12월 25일
      if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }
      const diff = christmas - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24) + 1); // 1을 더해줘야 함
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
        <DdayBox>
            <div>D-{timeLeft.days}</div>
        </DdayBox>
        <TimerContainer>
        <TimeBox>
            <div>{timeLeft.hours}</div>
            <small>Hours</small>
        </TimeBox>
        <TimeBox>
            <div>{timeLeft.minutes}</div>
            <small>Minutes</small>
        </TimeBox>
        <TimeBox>
            <div>{timeLeft.seconds}</div>
            <small>Seconds</small>
        </TimeBox>
        </TimerContainer>
    </>
  );
};

export default CountdownTimer;