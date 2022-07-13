import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';

const MainWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 10px 10px 30px;
`;

const TopNav = styled.div`
  background-color: #0f264c;
  color: #fff;
  height: 40px;
  width: 100%;
`;

const NavTitle = styled.span`
  color: rgba(255, 244, 231, 0.8);
  line-height: 100%;
  font-size: 14px;
  letter-spacing: -0.03em;
  width: max-content;

  @media (max-width: 900px) {
    font-size: 8px;
    line-height: 8px;
    padding: 0px;
  }
`;

const TopHeader = () => {
  let deadline = 'march, 31, 2022';

  return (
    <TopNav>
      <MainWrapper>
        <NavTitle>HIGHTABLE NOTICE: We go live in</NavTitle>
        <Clock deadline={deadline} />
      </MainWrapper>
    </TopNav>
  );
};

export default TopHeader;
