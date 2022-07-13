import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0px 2px 0 0;
    color: rgba(255, 244, 231, 0.8);
    line-height: 100%;
    font-size: 14px;
    letter-spacing: -0.03em;
    color: skyblue;

    @media (max-width: 900px) {
      font-size: 8px;
    }
  }
  span {
    margin: 0px 8px 0 0;
    color: rgba(255, 244, 231, 0.8);
    line-height: 100%;
    font-size: 14px;
    letter-spacing: -0.03em;
    color: skyblue;

    @media (max-width: 900px) {
      font-size: 8px;
    }
  }
`;

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toString());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <Container>
      <Text>
        <p>{leading0(days)}</p>
        <span>Days</span>
      </Text>
      <Text>
        <p> {leading0(hours)}</p> <span>Hours</span>
      </Text>
      <Text>
        <p> {leading0(minutes)}</p> <span>Minutes</span>
      </Text>
      <Text>
        <p>{leading0(seconds)}</p>
        <span>Seconds</span>
      </Text>
    </Container>
  );
};

export default Clock;
