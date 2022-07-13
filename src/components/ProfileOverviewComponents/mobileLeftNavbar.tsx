import React, { useState } from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { SidebarData } from './SideBarData';
import CustomLink from '../CustomLink';
import Button from '../Button';
import Link from 'next/link';
import SignOutModal from './SignOutModal';
import styles from '../../styles/signup.module.css';

const MobileNavWrapper = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  // border-right: 1px solid #e6e6e6;
  // @media (min-width: 900px) {
  //   display: none;
  // }
`;

const MyAccountFrameTitle = styled.h2`
  width: 100%;
  left: 0px;
  top: 0px;
  color: #000000;
  font-family: montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  white-space: nowrap;
  padding-bottom: 24px;
  border-bottom: 1px solid #e6e6e6;
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavMenuItems = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
`;

const SignOutFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px;
  margin-left: 8px;
  position: relative;
  width: 320px;
  height: 136px;
  left: 0px;
  top: 700px;

  @media (max-width: 900px) {
    left: 0px;
    top: 40px;
    width: 95%;
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

const CancelConainer = styled.div`
  padding: 8px;
  position: absolute;
  right: -54px;
  top: -20px;
  background-color: #fefefe;
`;

const NavMenuContainer = styled.div`
  // height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

function MobileNavbar({ showSidebar, sidebar }) {
  const [show, setShow] = useState(false);

  return (
    // <MobileNavWrapper>
    <nav className={sidebar ? 'mobileNav-menu active' : 'mobileNav-menu'}>
      <NavMenu>
        <NavHeader>
          <MyAccountFrameTitle> My Account</MyAccountFrameTitle>
          <CancelConainer>
            <GrFormClose className={styles.sideBarClose} onClick={showSidebar} />
          </CancelConainer>
        </NavHeader>
        <SignOutModal onClose={() => setShow(false)} show={show} />
        <NavMenuContainer>
          <NavMenuItems>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    <div className={styles.linkContainer}>
                      <a>{item.title}</a>
                    </div>
                  </Link>
                </li>
              );
            })}
          </NavMenuItems>
          <SignOutFooterContainer>
            <Button small criticalAction onClick={() => setShow(true)}>
              Sign Out
            </Button>
          </SignOutFooterContainer>
        </NavMenuContainer>
      </NavMenu>
    </nav>
    // </MobileNavWrapper>
  );
}

export default MobileNavbar;
