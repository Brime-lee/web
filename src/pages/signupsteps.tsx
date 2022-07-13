import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { MultiStepForm, Step } from 'react-multi-form';
import Preference from '../components/SignUpSteps/Preference';
import Interests from '../components/SignUpSteps/Interests';
import Allergies from '../components/SignUpSteps/Allergies';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import sOnboarding from '../../public/sOnboarding.jpg';

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
  height: 650px;
  width: 480px;
  // height: 890px;
  @media (max-width: 1350px) {
    height: 680px;
  }
  @media (max-width: 1300px) {
    height: 800px;
  }
  @media (max-width: 1080px) {
    height: 860px;
  }
  @media (max-width: 1008px) {
    display: none;
  }
  // @media (max-width: 500px) {
  //   display: block;
  //   width: 100%;
  //   height: 420px;
  // }
`;

const LeftImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  height: 100%;
  padding: 10px 40px;
  margin: 40px auto 0 auto;
  @media (max-width: 500px) {
    padding: 10px 20px;
    margin: 20px auto 0 auto;
  }
`;

const BtnContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SkipBtn = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #0f264c;
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  // margin-right: 90px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    margin: 10px 0px 24px 0px;
  }
`;

const SignupStep = () => {
  const [active, setActive] = useState(1);
  const [disable, setDisable] = useState(false);

  const router = useRouter();

  const handleNext = () => {
    if (active < 3) {
      setActive(active + 1);
    } else if (active === 3) {
      router.push('/');
    }
  };

  return (
    <MainContainer>
      <Left>
        <Image src="./sOnboarding.jpg" width={480} height={800} objectFit="cover" />
      </Left>
      <Right>
        <Container>
          <MultiStepForm accentColor="#FF9916" activeStep={active}>
            <Step label="Interests">
              <Interests />
            </Step>
            <Step label="Preferences">
              <Preference />
            </Step>
            <Step label="Allergies">
              <Allergies />
            </Step>
          </MultiStepForm>
          <BtnContainer>
            <span onClick={() => setActive(active - 1)}>
              <Button disabled={active === 1 ? true : false} backTwo>
                Back
              </Button>
            </span>
            <SkipBtn onClick={handleNext}>Skip for now</SkipBtn>
            <span onClick={handleNext}>
              <Button small>Continue</Button>
            </span>
          </BtnContainer>
        </Container>
      </Right>
    </MainContainer>
  );
};

export default SignupStep;
