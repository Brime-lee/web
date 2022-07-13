import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Button from '../components/Button';
import Places from '../components/Discover/Places';
import People from '../components/Discover/People';

const MainContainer = styled.section`
  display: flex;
  background: #f8f8f8;
  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  position: relative;
  height: 980px;
  width: 480px;

  @media (max-width: 500px) {
    display: block;
    width: 100%;
    height: 420px;
  }
`;

const LeftImg = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

const Right = styled.div`
  width: calc(100vw - 480px);
  background: #f8f8f8;
  @media (max-width: 1008px) {
    width: 100%;
    padding: 0 16px;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const WelcomeContainer = styled.div`
  position: absolute;
  top: 456px;
  left: 16px;
  @media (max-width: 500px) {
    top: 252px;
    left: 15px;
    display: none;
  }
`;

const LeftText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;
  color: #ff9916;
  margin: 0;
`;

const LeftTextTwo = styled.p`
  font-family: montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #f8f8f8;
  margin: 0;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

const Container = styled.div`
  max-width: 900px;
  padding: 0 0 0 40px;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Header = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0.06em;
  color: #0f264c;
  text-align: center;
  margin: 24px 0;
`;

const Recommended = () => {
  return (
    <MainContainer>
      <Left>
        <LeftImg src="/images/siginFormImg.png" />
        <MobileImg src="/images/siginFormImgMobile.png" alt="signInFormImgMobile" />
        <WelcomeContainer>
          <LeftTextTwo>
            Sign up for an Hightable experience Login for an Hightable experienceLogin for an Hightable experience
          </LeftTextTwo>
        </WelcomeContainer>
      </Left>
      <Right>
        <Container>
          <Header>Recommended for you</Header>
          <Places />
          <People />
          <div style={{ width: '250px', margin: '-32px auto 20px auto' }}>
            <Link href="/profileOverview">
              <Button small={false}>Finish</Button>
            </Link>
          </div>
        </Container>
      </Right>
    </MainContainer>
  );
};

export default Recommended;
