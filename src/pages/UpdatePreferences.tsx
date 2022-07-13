import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { MultiStepForm, Step } from 'react-multi-form';
import Preference from '../components/SignUpSteps/Preference';
import Interests from '../components/SignUpSteps/Interests';
import Allergies from '../components/SignUpSteps/Allergies';
import { useRouter } from 'next/router';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';

const MainContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
`;

const RightFrame = styled.section`
  background-color: #fbfbfb;
  height: 1092px;
`;

const RightContentTitle = styled.h3`
  position: relative;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: DM Serif Display;
  font-style: bold;
  font-weight: 600;
  line-height: 32.9px;
  font-size: 24px;
  margin-left: 32px;
  margin-top: 38px;
`;

const SettingsFrame = styled.div`
  display: flex;
  background: #f8f8f8;
`;

const SettingsTitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 16px;
  text-align: center;
  color: #0f264c;
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
  justify-content: center;
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
  margin-right: 90px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    margin: 10px 0px 24px 0px;
  }
`;

const UpdatePreferences = () => {
  const [active, setActive] = useState(1);

  const router = useRouter();

  const handleNext = () => {
    if (active < 3) {
      setActive(active + 1);
    } else if (active === 3) {
      router.push('/accountSettings');
    }
  };

  return (
    <MainContainer>
      <SideMenu />
      <RightFrame>
        <RightContentTitle> Account Settings {'>'} Update Preferences </RightContentTitle>
        <Container>
          <MultiStepForm accentColor="#FF9916" activeStep={active}>
            <Step label="Preferences">
              <Preference />
            </Step>
            <Step label="Interests">
              <Interests />
            </Step>
            <Step label="Allergies">
              <Allergies />
            </Step>
          </MultiStepForm>
          <BtnContainer>
            <SkipBtn onClick={handleNext}>Skip for now</SkipBtn>
            <span onClick={handleNext}>
              <Button small>Continue</Button>
            </span>
          </BtnContainer>
        </Container>
      </RightFrame>
    </MainContainer>
  );
};

export default UpdatePreferences;
