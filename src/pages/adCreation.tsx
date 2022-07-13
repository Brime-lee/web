import React, { useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import AdCreationForm from '../components/ProfileOverviewComponents/AdCreationForm';
import MobileNavbar from '../components/ProfileOverviewComponents/mobileLeftNavbar';

const MainContainer = styled.section`
  display: flex;
`;

const RightFrame = styled.div`
  background-color: #fbfbfb;
  width: 100%;
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

const RightContent = styled.div`
  display: flex;

  @media (max-width: 626px) {
    flex-direction: column;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 40px 0px 32px;
  width: 50%;
`;

const Icon = styled.img`
  width: 33px;
  height: 33px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PhoneNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Email = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
`;

const SocialIcon = styled.img`
  width: 33px;
  height: 33px;
`;

const ContactSectionTitle = styled.p`
  margin-left: 8px;
  color: #0f264c;
`;

const AdCreation = () => {
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
      <RightFrame>
        <RightContentTitle> Contact us for AD Creation </RightContentTitle>
        <RightContent>
          <AdCreationForm />
          <ContactDetails>
            <Address>
              <Icon src="/IconLibrary/Location.svg"></Icon>
              <ContactSectionTitle>Hightable Experience Building, Victoria Island, Lagos, Nigeria </ContactSectionTitle>
            </Address>
            <PhoneNumber>
              <Icon src="/IconLibrary/Call.svg"></Icon>
              <ContactSectionTitle>+234 080-1234-5678</ContactSectionTitle>
            </PhoneNumber>
            <Email>
              <Icon src="/IconLibrary/Mail.svg"></Icon>
              <ContactSectionTitle> hello@info.com.ng </ContactSectionTitle>
            </Email>
            <SocialMediaIcons>
              <a>
                <SocialIcon src="/IconLibrary/Youtube.svg"></SocialIcon>
              </a>
              <a>
                <SocialIcon src="/IconLibrary/Instagram.svg"></SocialIcon>
              </a>
              <a>
                <SocialIcon src="/IconLibrary/Facebook.svg"></SocialIcon>
              </a>
              <a>
                <SocialIcon src="/IconLibrary/Twitter.svg"></SocialIcon>
              </a>
            </SocialMediaIcons>
          </ContactDetails>
        </RightContent>
      </RightFrame>
    </MainContainer>
  );
};

export default AdCreation;
