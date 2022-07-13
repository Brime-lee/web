import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Button from '../Button';
import SignOutModal from './SignOutModal';
import React, { useState } from 'react';

const LeftNav = styled.div`
  width: auto;
  height: auto;
  background: #ffffff;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MyAccountFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 250px;
  height: auto;
  left: 0px;
  top: 56px;
`;

const MyAccountFrameTitle = styled.h2`
  width: 170px;
  height: 44px;
  left: 0px;
  top: 0px;
  color: #000000;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 376px) {
    font-size: 24px;
    line-height: 32.9px;
    font-weight: 400px;
  }
`;

const MyAccountItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: 56px;
  padding: 0px;
  position: static;
  width: auto;
  height: auto;
  left: 0px;
  top: 76px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  width: 320px;
  height: 44px;
  a {
    color: #000000;
    text-decoration: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    width: 100%;
    height: 100%;

    // &[aria-current] {
    //   background-color: #fff7e7;
    //   color: #000000;
    //   height: 100%;
    // }
  }

  &:hover {
    background-color: #fff7e7;
  }
  @media (max-width: 900px) {
    a {
      font-size: 14px;
      line-height: 17px;
    }
`;

const SignOutFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-left: 40px;
  position: relative;
  width: 320px;
  height: 136px;
  left: 0px;
  top: 700px;

  @media (max-width: 900px) {
    left: 0px;
    top: 550px;
    width: 150px;
  }
`;

const SignOutTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const SignOutText = styled.span`
  padding: 4px 0px 4px 0px;
`;

const SideMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <LeftNav>
      <SignOutModal onClose={() => setShow(false)} show={show} />
      <MyAccountFrame>
        <MyAccountItemsContainer>
          <MyAccountFrameTitle> My Account </MyAccountFrameTitle>
          <LinkContainer>
            <CustomLink href="/profileOverview">
              <a> Profile </a>
            </CustomLink>
          </LinkContainer>

          {/* <LinkContainer>
            <CustomLink href="#">
              <a> Favourites </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="#">
              <a> Reservations </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="#">
              <a> Food Orders </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="/profileOverviewReviews">
              <a> My Reviews </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="/accountSettings">
              <a> Account Settings </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="/notificationSettings">
              <a> Notification Settings </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="/paymentPreference">
              <a> Payment Preference </a>
            </CustomLink>
          </LinkContainer> */}

          {/* <LinkContainer>
            <CustomLink href="/adCreation">
              <a> Create Ads </a>
            </CustomLink>
          </LinkContainer> */}
        </MyAccountItemsContainer>
      </MyAccountFrame>
      <SignOutFooterContainer>
        {/* <SignOutTitle> Sign You Out Of Your Account </SignOutTitle>
        <SignOutText> This action will sign you out of your account. </SignOutText> */}
        <Button small criticalAction onClick={() => setShow(true)}>
          Sign Out
        </Button>
      </SignOutFooterContainer>
    </LeftNav>
  );
};

export default SideMenu;
