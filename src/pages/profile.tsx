import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { GrShareOption } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

import ProfileReview from '../components/UserProfile/ProfileReview';
import ProfilePhotos from '../components/UserProfile/ProfilePhotos';
import ProfileInterests from '../components/UserProfile/ProfileInterests';
import ProfileActivity from '../components/UserProfile/ProfileActivity';
import styles from '../styles/Home.module.css';
import FollowersModal from '../components/UserProfile/FollowersModal';
import Button from '../components/Button';
import SignOutModal from '../components/ProfileOverviewComponents/SignOutModal';
import guy from '../../public/guy.png';

interface FollowTextProps {
  follow?: boolean;
}
interface ActiveProps {
  active?: boolean;
}

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 25px auto 0 auto;
  display: flex;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 394px;

  padding: 0 10px;
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const RightBox = styled.div`
  width: calc(100% - 394px);
  padding: 0 20px;
  margin: 0 0 0 30px;
  background: #fbfbfb;
  @media (max-width: 980px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
  }
`;
const BoxA = styled.div`
  width: 394px;
  padding: 36px 20px;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  box-shadow: 0px 4px 13px rgba(103, 34, 0, 0.17);
  border-radius: 10px;
  margin: 0 0 24px 0;
  @media (max-width: 980px) {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 28px 0;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  margin-right: 30px;
`;

const DetailsContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  text-transform: capitalize;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 25px;
  color: #000000;
  margin: 0 0 14px 0;
  @media (max-width: 300px) {
    font-size: 20px;
  }
`;

const Handle = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 14px 0;
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;
const Address = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const BtnContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 36px auto;
  position: relative;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;

const BlockDropdown = styled.div`
  width: 143px;
  z-index: 10;
  padding: 5px 0;
  background: #ffffff;
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.15);
  position: absolute;
  right: 0;
  top: 50px;

  button {
    text-transform: capitalize;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 152%;
    background: transparent;
    margin: 0;
    border: none;
    padding: 15px 10px 10px 10px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    color: #000000;

    &:hover {
      background: #fff4e7cc;
    }
    &:active {
      background: #fff4e7cc;
    }
  }
`;

const FollowButton = styled.button<FollowTextProps>`
  width: 120px;
  height: 40px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 980px) {
    margin: 0 20px 0 0;
  }
  color: ${({ follow }) => (follow ? '#0f264c' : '#fff')};
  background: ${({ follow }) => (follow ? '#fff' : '#0f264c')};
`;

const ReservationButton = styled(FollowButton)`
  background: rgba(0, 0, 0, 0.01);
  color: #0f264c;
`;

const Certificate = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  color: #0f264c;
  width: 350px;
  margin: 0 auto 28px auto;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 980px) {
    width: 320px;
    margin: 0 auto;
  }
`;
const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 840px) {
    margin: 0 20px 0 0;
  }
  @media (max-width: 500px) {
    margin: 0 20px 0 0;
  }
`;
const FollowersCount = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #000000;
  margin: 0;
`;
const FollowersText = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin: 0;
  cursor: pointer;
`;

const NavigationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const NavigationButton = styled.button<ActiveProps>`
  border: none;
  padding: 20px 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  background: transparent;
  cursor: pointer;
  color: ${({ active }) => (active ? '#ff9916' : 'rgba(0, 0, 0, 0.6)')};
  border-bottom: ${({ active }) => (active ? '2px solid #ff9916' : 'none')};
  transition: 0.3s;
  &:hover {
    color: #ff9916;
    border-bottom: 2px solid #ff9916;
  }
  &:selected {
    color: #ff9916;
    border-bottom: 2px solid #ff9916;
  }
  @media (max-width: 1170px) {
    font-size: 16px;
    padding: 20px 10px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 10px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    padding: 8px;
  }
  @media (max-width: 300px) {
    font-size: 11px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 33px;
  margin: 30px 0;
  background: rgba(250, 241, 237, 0.7);
`;

const Back = styled(BiArrowBack)`
  font-size: 30px;
  margin-left: 10px;
  width: 50px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scaleX(1.3);
  }
  &:active {
    transform: scaleX(1);
  }
`;

const SignOutFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px;

  @media (max-width: 980px) {
    display: none;
  }
`;

const SignOutMobile = styled(SignOutFooterContainer)`
  display: none;
  @media (max-width: 980px) {
    text-align: center;
    display: block;
    margin-bottom: 20px;
  }
`;

const DpSkeleton = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-right: 20px;
  background: #dadada87;
`;

const NameSkeleton = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  width: 100%;

  div {
    width: 46%;
    height: 30px;
    border-radius: 8px;
    background: #dadada87;
    margin-bottom: 15px;
  }
`;

const HandleSkeleton = styled.div`
  height: 20px;
  width: 50%;
  border-radius: 8px;
  background: #dadada87;
  margin-bottom: 15px;
`;

const AddressSkeleton = styled.div`
  display: flex;
  align-item: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const AddressText = styled.div`
  height: 20px;
  width: 70%;
  border-radius: 8px;
  background: #dadada87;
`;

const AddressPin = styled.div`
  height: 20px;
  width: 10%;
  margin-right: 10px;
  border-radius: 8px;
  background: #dadada87;
`;

const AboutSkeleton = styled.div`
  width: 350px;
  margin: 0 auto 30px auto;

  div {
    height: 10px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #dadada87;
  }
`;

const Instagram = styled(FaInstagram)`
  font-size: 22px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #bc2a8d;
    transform: scale(1.2);
  }
`;

const Twitter = styled(FiTwitter)`
  cursor: pointer;
  font-size: 22px;
  transition: all 0.5s;
  &:hover {
    color: #1da1f2;
    transform: scale(1.2);
  }
`;

const Share = styled(GrShareOption)`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  margin: 18px 0 0 0;
`;

const FollowersSkeleton = styled.div`
  width: 350px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 0 auto 15px auto;

  div {
    height: 40px;
    width: 28%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #dadada87;
  }
  p {
    height: 10px;
    width: 10%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #dadada87;
  }
`;

const FIND_CUSTOMER = gql`
  query findOneCustomer($firstName: String, $lastName: String) {
    findOneCustomer(data: { firstName: $firstName, lastName: $lastName }) {
      _id
      email
      firstName
      username
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

const Profile = () => {
  const [followed, setFollowed] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();
  const { loading, data, error } = useQuery(FIND_CUSTOMER, {
    fetchPolicy: 'network-only',
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <BackContainer>
        <Back onClick={handleBack} />
      </BackContainer>
      <MainWrapper>
        <LeftBox>
          <BoxA>
            <ImageContainer>
              <ProfileContainer>
                {loading || error ? (
                  <DpSkeleton></DpSkeleton>
                ) : (
                  <Image src={guy} width={120} height={120} className={styles.profileImage} alt="profile picture" />
                )}
              </ProfileContainer>
              <DetailsContainer>
                {loading || error ? (
                  <NameSkeleton>
                    <div></div>
                    <div></div>
                  </NameSkeleton>
                ) : (
                  <Name>
                    {data &&
                      data.findOneCustomer.firstName.toLowerCase() + ' ' + data.findOneCustomer.lastName.toLowerCase()}
                  </Name>
                )}
                {loading || error ? (
                  <HandleSkeleton></HandleSkeleton>
                ) : (
                  <Handle>{data.findOneCustomer.username}</Handle>
                )}

                {loading || error ? (
                  <AddressSkeleton>
                    <AddressPin></AddressPin>
                    <AddressText></AddressText>
                  </AddressSkeleton>
                ) : (
                  <Address>
                    <FaMapMarkerAlt style={{ marginRight: '4px' }} />
                    {data.findOneCustomer.address ? data.findOneCustomer.address : 'Your address'}
                  </Address>
                )}
                {loading || error ? (
                  <NameSkeleton>
                    <div></div>
                    <div></div>
                  </NameSkeleton>
                ) : (
                  <SocialsContainer>
                    <Link href={data?.findOneCustomer.twitter ? data?.findOneCustomer.twitter : '#'}>
                      <Twitter />
                    </Link>
                    <Link href={data?.findOneCustomer.instagram ? data?.findOneCustomer.instagram : '#'}>
                      <Instagram />
                    </Link>
                  </SocialsContainer>
                )}
              </DetailsContainer>
            </ImageContainer>
            {loading || error ? (
              <FollowersSkeleton>
                <div></div>
                <div></div>
                <p></p>
              </FollowersSkeleton>
            ) : (
              <BtnContainer>
                <Link href="/profileOverview">
                  <FollowButton> Edit Profile </FollowButton>
                </Link>
                <ReservationButton> Inbox </ReservationButton>
                <Share onClick={() => setDisplayDropdown(!displayDropdown)} />
                {displayDropdown && (
                  <BlockDropdown>
                    <button>Share my profile</button>
                  </BlockDropdown>
                )}
              </BtnContainer>
              // <BtnContainer>
              //   <FollowButton follow={followed ? true : false} onClick={() => setFollowed(!followed)}>
              //     {followed ? ' Followed' : ' Follow'}
              //   </FollowButton>
              //   <ReservationButton> message </ReservationButton>
              //   <HiDotsHorizontal style={{ cursor: 'pointer' }} onClick={() => setDisplayDropdown(!displayDropdown)} />
              //   {displayDropdown && (
              //     <BlockDropdown>
              //       <button>
              //         Block {data.findOneCustomer.firstName && data.findOneCustomer.firstName.toLowerCase()}
              //       </button>
              //       <button>Report User</button>
              //     </BlockDropdown>
              //   )}
              // </BtnContainer>
            )}
            {loading || error ? (
              <AboutSkeleton>
                <div></div>
                <div></div>
                <div></div>
              </AboutSkeleton>
            ) : (
              <Certificate>
                {data.findOneCustomer.about
                  ? data.findOneCustomer.about
                  : 'Update your profile to tell more about yourself'}
              </Certificate>
            )}
            {loading || error ? (
              <FollowersSkeleton>
                <div></div>
                <div></div>
                <div></div>
              </FollowersSkeleton>
            ) : (
              <FollowersContainer>
                <Followers>
                  <FollowersCount>4</FollowersCount>
                  <FollowersText>Reviews</FollowersText>
                </Followers>
                <Followers>
                  <FollowersCount>25</FollowersCount>
                  <FollowersText
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Followers
                  </FollowersText>
                </Followers>
                <Followers>
                  <FollowersCount>3</FollowersCount>
                  <FollowersText>Following</FollowersText>
                </Followers>
              </FollowersContainer>
            )}
          </BoxA>
          <SignOutFooterContainer>
            <Button small criticalAction onClick={() => setShow(true)}>
              Sign Out
            </Button>
          </SignOutFooterContainer>
        </LeftBox>
        <RightBox>
          <NavigationButtonContainer>
            <NavigationButton active={toggleState === 1 ? true : false} onClick={() => toggleTab(1)}>
              Reviews
            </NavigationButton>
            <NavigationButton active={toggleState === 2 ? true : false} onClick={() => toggleTab(2)}>
              Photos
            </NavigationButton>
            <NavigationButton active={toggleState === 3 ? true : false} onClick={() => toggleTab(3)}>
              Interests
            </NavigationButton>
            <NavigationButton active={toggleState === 4 ? true : false} onClick={() => toggleTab(4)}>
              Activities
            </NavigationButton>
          </NavigationButtonContainer>
          <div>
            <div className={toggleState === 1 ? styles.activeContent : styles.content}>
              <ProfileReview />
            </div>
            <div className={toggleState === 2 ? styles.activeContent : styles.content}>
              <ProfilePhotos />
            </div>
            <div className={toggleState === 3 ? styles.activeContent : styles.content}>
              <ProfileInterests />
            </div>
            <div className={toggleState === 4 ? styles.activeContent : styles.content}>
              <ProfileActivity />
            </div>
          </div>
        </RightBox>
      </MainWrapper>
      <Divider />
      <SignOutMobile>
        <Button small criticalAction onClick={() => setShow(true)}>
          Sign Out
        </Button>
      </SignOutMobile>
      <FollowersModal onClose={() => setModal(false)} modal={modal} />
      <SignOutModal onClose={() => setShow(false)} show={show} />
    </>
  );
};
export default Profile;
