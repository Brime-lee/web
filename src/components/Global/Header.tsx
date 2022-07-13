//@ts-nocheck
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';
import Button from '../Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AUTH_TOKEN } from '../constants';
import { gql, useMutation, useQuery } from '@apollo/client';
import { BsCart } from 'react-icons/bs';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import SignOutModal from '../ProfileOverviewComponents/SignOutModal';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Nav = styled.header`
  background-color: #fff;
  color: black;
  width: 100%;
  height: 100px;
  z-index: 10;
  padding: 10px 0;
  margin: 0px 0px;
`;

const NavButton = styled.a`
  // background-color: #fff;
  // border: 1px solid #fff;
  font-weight: 600;
  color: rgba(40, 40, 40, 0.63);
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  white-space: nowrap;
  transition: 0.4s;
  z-index: 100;

  &:hover {
    color: #0f264c;
    transform: scale(1.1);
  }
`;

const JoinUsButton = styled(NavButton)`
  padding: 0;
  @media (min-width: 900px) {
    display: none;
  }
`;

const NavProfileContainer = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const CartWrapper = styled.button`
  border-radius: 50%;
  background: #ffffff;
  color: #333333;
  border: none;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CounterBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: orange;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: block;

  // @media (max-width: 900px) {
  //   display: none;
  // }
`;

const Avatar = styled(FaUserCircle)`
  width: 40px;
  height: 40px;
  margin-left: 16px;
  border-radius: 50%;
  cursor: pointer;
  color: gray;
`;

const Logo = styled.img`
  z-index: 10;
`;

const DesktopButton = styled(Button)`
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;
const MobileButton = styled(Button)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const HeaderEmailInitial = styled.div`
  background-color: #0f264c;
  color: #fff;
  font-family: montserrat;
  font-weight: 700;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-right: 1rem;
  text-transform: uppercase;
`;

const FIND_CUSTOMER = gql`
  query findOneCustomer($firstName: String, $lastName: String) {
    findOneCustomer(data: { firstName: $firstName, lastName: $lastName }) {
      _id
      email
      firstName
      lastName
      username
      gender
      dob
      twitter
      instagram
      address
      about
      verified
      meta {
        active
        createdAt
        activatedAt
        deactivatedAt
      }
    }
  }
`;

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const [show, setShow] = useState(false);

  const getItemsCount = () => {
    const quantity = cart.item?.reduce((accumulator, product) => accumulator + product.count, 0);
    return quantity;
  };

  if (typeof window !== 'undefined') {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const { loading, data, error } = useQuery(FIND_CUSTOMER, {
      fetchPolicy: 'network-only',
    });
    return (
      <Nav>
        <SignOutModal onClose={() => setShow(false)} show={show} />
        <MainWrapper>
          <div className={styles.navContainer}>
            <div className={styles.headerLogo}>
              <a href="/">
                <Logo src="/images/logo.png" alt="logo" className={styles.logo} />
              </a>
            </div>
            <div className={styles.navRightContainer}>
              <div className={styles.navButtonsContainer}>
                <Link href="/" passhref>
                  <NavButton className={styles.navButton}>Home</NavButton>
                </Link>
                {/* <NavButton href="/discover" className={styles.navnavButton}>
                  Discover
                </NavButton> */}

                <Link href="/about" passhref>
                  <NavButton className={styles.navButton}>About</NavButton>
                </Link>
                {/* <NavButton href="/route" className={styles.navButton}>
                  HT Route
                </NavButton> */}

                {authToken ? null : (
                  <Link href="/login" passhref>
                    <NavButton className={styles.navButtonSignup}>Sign in</NavButton>
                  </Link>
                )}
              </div>
              {/* <div className={styles.navNotificationInnerContainer}>
                <BsCart size="28px" style={{ color: '#212121', cursor: 'pointer' }} />
              </div>
               */}

              {authToken ? null : (
                <Link href="/signup" passhref>
                  <BtnContainer>
                    <DesktopButton join>Join HighTable</DesktopButton>
                    <MobileButton join>Join Us</MobileButton>
                  </BtnContainer>
                </Link>
              )}
              {/* {router.pathname === '/about' ? (
                <div>
                  <NavProfileContainer>
                    <div className={styles.navNotificationsContainer}> */}
              {/* <div className={styles.navSearchContainer}>
                      <AiOutlineSearch className={styles.navSearch} size="28px" />
                    </div>

                  </NavProfileContainer>
                </div>
              ) : (
                <div className={styles.navNotificationsContainer}>
                  <div className={styles.navSearchContainer}>
                    <AiOutlineSearch className={styles.navSearch} size="28px" />
                  </div>
                  {/* <div className={styles.navNotificationInnerContainer}>
                    <MdOutlineNotificationsActive size="28px" style={{ color: '#212121', cursor: 'pointer' }} />
                  </div> */}
              {/* </div>
                  </NavProfileContainer>
                </div>
              ) : (
                <div className={styles.navNotificationsContainer}> */}
              {/* <div className={styles.navSearchContainer}>
                  <AiOutlineSearch className={styles.navSearch} size="28px" />
                </div>
                <div className={styles.navNotificationInnerContainer}>
                  <MdOutlineNotificationsActive size="28px" style={{ color: '#212121', cursor: 'pointer' }} />
                </div> */}
              {/* {authToken ? null : (
                    <JoinUsButton href="/signup" className={styles.navButton}>
                      Join Us
                    </JoinUsButton>
                  )}

                  <div className={styles.navNotificationInnerContainer}>
                    <CartWrapper>
                      <Link href="/cart">
                        <BsCart size="20px" style={{ color: '#212121', cursor: 'pointer' }} />
                      </Link>
                      {getItemsCount(cart) > 0 ? <CounterBadge> {getItemsCount()} </CounterBadge> : null}
                    </CartWrapper>
                  </div>
                )} */}
              {authToken ? (
                <Link href="/profile">
                  <HeaderEmailInitial>{data?.findOneCustomer?.email[0]}</HeaderEmailInitial>
                </Link>
              ) : null}
              {/* </div> */}
            </div>
          </div>
        </MainWrapper>
      </Nav>
    );
  }
};
export default Header;
