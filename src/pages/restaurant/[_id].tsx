
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Faq from '../../components/RestaurantDetails/Faq';
import RestaurantsReview from '../../components/RestaurantDetails/RestaurantsReview';
import RestaurantAbout from '../../components/RestaurantDetails/RestaurantAbout';
import Menu from '../../components/RestaurantDetails/Menu';
import Photos from '../../components/RestaurantDetails/Photos';
import { gql, useQuery } from '@apollo/client';
import { client } from '../_app';
import styles from '../../styles/Home.module.css';
import StarRating from '../../components/StarRating';
import SimilarPlacesSlider from '../../components/SimilarPlacesSlider';
import { BiArrowBack } from 'react-icons/bi';
import { getRestaurantId } from '../../utils/helpers';

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
  justify-content: space-between;
  margin: 0 0 28px 0;
  @media (max-width: 980px) {
    justify-content: center;
`;
const ProfileContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;
const Verified = styled.img`
  position: absolute;
  top: 6px;
  right: 0px;
`;
const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h3`
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
const LocationIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 36px 0;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;
const Open = styled.img`
  cursor: pointer;
  // @media (max-width: 840px) {
  //   display: none;
  // }
`;

const FollowButton = styled.button<FollowTextProps>`
  font-family: 'Arial Rounded MT';
  width: 140px;
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
const TourButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 36%;
  background: rgba(0, 0, 0, 0.01);
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;
  }
`;

const TourButtonRight = styled.button`
  position: absolute;
  bottom: 50%;
  right: 30%;
  background: rgba(0, 0, 0, 0.01);
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 225px;
  margin: 36px;
  @media (max-width: 980px) {
    margin: 36px auto;
  }
`;
const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Rating = styled.h6`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 25px;
  color: #0f264c;
  margin: 0;
`;
const RatingCount = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #0f264c;
  margin: 0;
`;
const Certificate = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #0f264c;
  margin: 0 0 28px 0;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 216px;
  @media (max-width: 840px) {
    width: 100%;
    justify-content: center;
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
`;

const BoxB = styled.div`
  width: 390px;
  height: 392px;
  border-radius: 10px 10px 0px 0px;
`;

const InnerBoxB = styled.div`
  width: 160px;
  padding: 8px 12px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const PlaceImg = styled.img`
  margin-right: 10px;
`;

const Place = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  color: #007aff;
  margin: 0;
`;

const BottomBox = styled.div`
  width: 390px;
  position: relative;
  @media (max-width: 980px) {
    display: none;
  }
`;

const BoxB1 = styled.div`
  padding: 12px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(103, 34, 0, 0.17);
  border-radius: 10px;
`;

const BoxB1Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #0f264c;
  margin: 0;
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
const RestaurantImg = styled.img`
  width: 390px;
  height: 610px;
  object-fit: cover;
  position: relative;
  @media (max-width: 980px) {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 146px;
    margin-bottom: 32px;
  }
`;

const RestaurantImgContainer = styled.div`
  position: relative;
  @media (max-width: 980px) {
    display: none;
  }
`;

const RestaurantImgContainerRight = styled.div`
  position: relative;
  display: none;
  @media (max-width: 840px) {
    display: block;
    margin: 0 auto;
    width: 90%;
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

const RESTAURANT_DETAIL_QUERY = gql`
  query findRestaurantById($_id: ID!) {
    findRestaurantById(_id: $_id) {
      _id
      shortId
      email
      name
      rating
      telephone
      logo
      address
      url
      description
      verified
      verifiedAt
      location {
        latitude
        longitude
      }
      meta {
        active
        createdAt
        activatedAt
        deactivatedAt
        updatedAt
      }
    }
  }
`;

const SIMILAR_PLACES_QUERY = gql`
  query findSimilarRestaurants($id: ID!) {
    findSimilarRestaurants(id: $id) {
      _id
      shortId
      name
      email
      telephone
      address
      password
      logo
      description
      location {
        latitude
        longitude
      }
      url
      rating
      verified
      meta {
        active
        activatedAt
        createdAt
        deactivatedAt
        updatedAt
      }
    }
  }
`;

const RestaurantDetails = ({ data }) => {
  const [followed, setFollowed] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const router = useRouter();

  const { data: similarData } = useQuery(SIMILAR_PLACES_QUERY, {
    variables: { id: data.findRestaurantById._id },
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleBack = () => {
    router.back();
  };

  const { latitude, longitude } = data.findRestaurantById.location;

  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{
          lat: latitude,
          lng: longitude,
        }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

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
                {data.findRestaurantById.verified ? <Verified src="/images/verified.png" /> : null}
                <ProfileImg src={data.findRestaurantById.logo} />
              </ProfileContainer>
              <DetailsContainer>
                <Name>{data.findRestaurantById.name}</Name>
                <Handle>@{data.findRestaurantById.name.toLowerCase()}</Handle>
                <Address>
                  <LocationIcon src="/images/eventsLocation.png" />
                  {data.findRestaurantById.address}
                </Address>
              </DetailsContainer>
            </ImageContainer>
            {/* <BtnContainer>
              <FollowButton follow={followed ? true : false} onClick={() => setFollowed(!followed)}>
                {followed ? ' Followed' : ' Follow'}
              </FollowButton>
              <ReservationButton> Reservations </ReservationButton>
              <Open src="/images/openFaq.png" />
            </BtnContainer> */}
            <RatingsContainer>
              <Rating>{data.findRestaurantById.rating}.0</Rating>
              <StarContainer>
                <StarRating
                  count={5}
                  size={20}
                  value={data.findRestaurantById.rating}
                  activeColor={'#0F264C'}
                  inactiveColor={'#ddd'}
                />
              </StarContainer>
            </RatingsContainer>
            {/* <Certificate>Certificate of Excellence 2017, 2019 Winner</Certificate> */}
            {/* <FollowersContainer>
              <Followers>
                <FollowersCount>2500</FollowersCount>
                <FollowersText>Followers</FollowersText>
              </Followers>
              <Followers>
                <FollowersCount>3</FollowersCount>
                <FollowersText>Following</FollowersText>
              </Followers>
            </FollowersContainer> */}
          </BoxA>
          {toggleState === 4 ? (
            <RestaurantImgContainer>
              <RestaurantImg src={data.findRestaurantById.logo} />
              {/* <TourButton>Take a tour</TourButton> */}
            </RestaurantImgContainer>
          ) : (
            <BottomBox>
              <BoxB>
                {/* <InnerBoxB>
                  <PlaceImg src="/images/flightSign.png" />
                  <Place> Victoria Island, Lagos</Place>
                </InnerBoxB> */}
                <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBJd1J66Va54MYVKcz_oRnxFdPG-EsoVMQ`}
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '100%' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </BoxB>
              <BoxB1>
                {/* <BoxB1Text>You are 1 hour, 15 minutes away from {data.findRestaurantById.name}</BoxB1Text> */}
              </BoxB1>
            </BottomBox>
          )}
        </LeftBox>
        <RightBox>
          <NavigationButtonContainer>
            <NavigationButton active={toggleState === 1 ? true : false} onClick={() => toggleTab(1)}>
              Menu
            </NavigationButton>
            <NavigationButton active={toggleState === 2 ? true : false} onClick={() => toggleTab(2)}>
              Photos
            </NavigationButton>
            <NavigationButton active={toggleState === 3 ? true : false} onClick={() => toggleTab(3)}>
              Reviews
            </NavigationButton>
            <NavigationButton active={toggleState === 4 ? true : false} onClick={() => toggleTab(4)}>
              About
            </NavigationButton>
            <NavigationButton active={toggleState === 5 ? true : false} onClick={() => toggleTab(5)}>
              FAQ
            </NavigationButton>
          </NavigationButtonContainer>
          <div>
            <div className={toggleState === 1 ? styles.activeContent : styles.content}>
              <Menu menuData={data} />
            </div>
            <div className={toggleState === 2 ? styles.activeContent : styles.content}>
              <Photos photosData={data} />
            </div>
            <div className={toggleState === 3 ? styles.activeContent : styles.content}>
              <RestaurantsReview data={data} />
            </div>
            <div className={toggleState === 4 ? styles.activeContent : styles.content}>
              <RestaurantAbout data={data} />
            </div>
            <div className={toggleState === 5 ? styles.activeContent : styles.content}>
              <Faq data={data} />
            </div>
          </div>
        </RightBox>
      </MainWrapper>
      <Divider />
      <SimilarPlacesSlider similarData={similarData} />
    </>
  );
};

export default RestaurantDetails;

export async function getServerSideProps({ query }) {
  const { _id } = query;

  // TODO handle errors here
  const { data } = await client.query({
    query: RESTAURANT_DETAIL_QUERY,
    variables: { _id: getRestaurantId(_id) },
  });

  return {
    props: {
      data,
    },
  };
}


