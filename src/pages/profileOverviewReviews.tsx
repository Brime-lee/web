import React, { useState } from 'react';
import styled from 'styled-components';
import CardRev from '../components/Home/CardRev';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import NoReviews from '../components/ProfileOverviewComponents/NoReviews';
import MobileNavbar from './../components/ProfileOverviewComponents/mobileLeftNavbar';

const MainContainer = styled.section`
  display: flex;
`;

const RightContent = styled.div`
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

const RevRow = styled.div`
  background-color: #ffffff;

  &:after {
    background-color: #ffffff;
    content: '';
    display: table;
    clear: both;
  }
`;

const ProfileOverviewReviews = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    setShowModal(!showModal);
  };
  return (
    <>
      <MainContainer>
        <MobileNavbar showSidebar={showSidebar} sidebar={sidebar} />
        <SideMenu />
        <RightContent>
          <RightContentTitle>My Reviews</RightContentTitle>
          {/* {reviews ? api.map((...reviewProps) => {return(<Reviews />)}) : <NoReviews />} */}
          <RevRow>
            <CardRev />
            <CardRev />
            <CardRev />
            <CardRev />
            <CardRev />
            <CardRev />
          </RevRow>
        </RightContent>
      </MainContainer>
    </>
  );
};

export default ProfileOverviewReviews;
