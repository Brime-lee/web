import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import styled from 'styled-components';
import Button from '../components/Button';
import ToggleSlider from '../components/ToggleSlider';
import MobileNavbar from '../components/ProfileOverviewComponents/mobileLeftNavbar';
import DeleteAccountDataModal from '../components/ProfileOverviewComponents/DeleteAccountDataModal';
import React, { useState } from 'react';
import Link from 'next/link';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const RightFrame = styled.div`
  background-color: #fbfbfb;
  height: 100%;
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
  margin-left: 0px;
  margin-top: 38px;
  padding-left: 32px;
`;

const SettingItem = styled.div`
  margin-right: 32px;
  margin-left: 32px;
  margin-bottom: 40px;
`;

const TitleBox = styled.div`
  position: relative;
  display: flex;
  background: #bbc3c9;
  width: 100%;
  height: 25px;
  align-items: center;
`;

const Title = styled.span`
  padding: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 66, 105, 0.28);
  align-items: center;
  @media (max-width: 415px) {
    flex-direction: column;
  }
`;

const ContentDescription = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const ContentTitle = styled.span`
    margin: 12px
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
`;

const Description = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
`;

const ToggleWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
`;

const ButtonWrapper = styled.div`
  padding: 8px;
`;

const AccountSettings = () => {
  const [showDeleteAccModal, setShowDeleteAccModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    setShowModal(!showModal);
  };

  return (
    <MainContainer>
      <SideMenu />
      <MobileNavbar showSidebar={showSidebar} sidebar={sidebar} />
      <DeleteAccountDataModal onClose={() => setShowDeleteAccModal(false)} showDeleteAccModal={showDeleteAccModal} />
      <RightFrame>
        <RightContentTitle> Account Settings</RightContentTitle>
        <SettingItem>
          <TitleBox>
            <Title> Data and Privacy </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Personalize your Hightable experience</ContentTitle>
              <Description>
                {' '}
                Hightable uses stored cookies to deliver a personalized experience for our users, it allows us keep you
                logged in and also for showing you useful recommendations.{' '}
              </Description>
            </ContentDescription>
            <ToggleWrapper>
              <ToggleSlider />
            </ToggleWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Help Hightable Improve</ContentTitle>
              <Description>
                {' '}
                An understanding of how you use Hightable is how we improve our product and services for you to have a
                better experience{' '}
              </Description>
            </ContentDescription>
            <ToggleWrapper>
              <ToggleSlider />
            </ToggleWrapper>
          </ContentBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title> Alerts </Title>
          </TitleBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title> Update Preferences </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Personalize your Hightable Experience </ContentTitle>
              <Description>
                {' '}
                Help us get to know you better. Select your preferences, interests, and allergies for a personalized
                experience.{' '}
              </Description>
            </ContentDescription>
            <ButtonWrapper>
              <Button ActionButton small>
                {' '}
                Update Preferences{' '}
              </Button>
            </ButtonWrapper>
          </ContentBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title> Your Hightable data </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Account usage data </ContentTitle>
              <Description>
                {' '}
                Hightable uses stored cookies to deliver a personalized experience for our users, deletion request will
                delete your usage data but maintain the personal data{' '}
              </Description>
            </ContentDescription>
            <Link href="/UpdatePreferences">
              <Button ActionButton small>
                Update Preferences
              </Button>
            </Link>
          </ContentBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title> Delete your Account </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Critical Action! </ContentTitle>
              <Description> This will permanently delete your data </Description>
            </ContentDescription>
            <ButtonWrapper>
              <Button criticalAction small onClick={() => setShowDeleteAccModal(true)}>
                {' '}
                Delete Account{' '}
              </Button>
            </ButtonWrapper>
          </ContentBox>
        </SettingItem>
      </RightFrame>
    </MainContainer>
  );
};

export default AccountSettings;
