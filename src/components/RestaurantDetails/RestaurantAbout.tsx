import React from 'react';
import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import styles from '../../styles/Home.module.css';

const InnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 1170px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fbfbfb;
    padding: 30px 16px;
  }
`;

const BoxC = styled.div`
  width: 310px;
  height: auto;
  align-items: center;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1170px) {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  @media (max-width: 980px) {
    margin: 30px 40px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #212121;
    margin: 0 0 24px 0;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

const BoxD = styled.div`
  width: 370px;
  background: #fff;
  padding: 20px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  @media (max-width: 1170px) {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  @media (max-width: 980px) {
    margin: 10px 10px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 95%;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #212121;
  }
`;
const BoxDMapContainer = styled.div`
  width: 100%;
  height: 140px;
  @media (max-width: 350px) {
    height: auto;
  }
`;

const Button = styled.button`
  font-family: 'Arial Rounded MT';
  width: 140px;
  height: 40px;
  color: #fff;
  margin-left: 18px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  background: #0f264c;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
   cursor: pointer;
  outline: none;    
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

`;

const OtherButtons = styled(Button)`
  background: rgba(0, 0, 0, 0.01);
  color: #091c2e;
  font-size: 16px;
  line-height: 120%;
`;

const WebImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const InfoContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 26px;
  @media (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WebContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 350px) {
    margin-bottom: 10px;
  }
`;

const WebText = styled.a`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666670;
  margin: 0;
  &:hover {
    text-decoration: underline;
    color: #2323db;
  }
`;

const WebTextLink = styled.a`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666670;
  margin: 0;
  &:hover {
    text-decoration: underline;
    color: #2323db;
  }
`;

const OpenDays = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666670;
  margin: 0;
`;

const BottomHeader = styled.p`
  font-size: 25px;
  line-height: 14px;
  color: #212121;
  text-align: center;
  margin: 0 0 40px 0;
`;

const AboutContainer = styled.div`
  @media (max-width: 500px) {
    background: #fbfbfb;
    // padding: 0 0 80px 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 0 18px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    background: #fbfbfb;
  }
`;

const FoodImageContainer = styled.div`
  width: 340px;
  height: 340px;
  @media (max-width: 1170px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 114px;
    height: 114px;
  }
`;

const FoodImage = styled.img`
  width: 90%;
  height: 90%;
`;

const BottomRightContainer = styled.div`
  width: 310px;
  height: 310px;
  @media (max-width: 1170px) {
    width: 100%;
  }
`;

const TextHeader = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 14px;
  color: #212121;
  margin: 0 0 20px 0;
`;

const TextDetails = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  margin: 0 0 20px 0;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

const RestaurantAbout = ({ data }) => {
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
    <AboutContainer>
      <InnerBox>
        <BoxC>
          <div className={styles.boxContent}>
            <h4 className={styles.h4Text}>Details & Contact</h4>
            <p>{data.findRestaurantById.description}</p>
            <InfoContainer>
              <WebContainer>
                <WebImg src="/images/website.png" />
                <WebTextLink target="_blank" href={data.findRestaurantById.url}>
                  {data.findRestaurantById.url}
                </WebTextLink>
              </WebContainer>
              <WebContainer>
                <WebImg src="/images/aboutPhone.png" />
                <WebText href={`tel:${data.findRestaurantById.telephone}`}>{data.findRestaurantById.telephone}</WebText>
              </WebContainer>
            </InfoContainer>
            <OpenDays> Open Sun - Fridays (7:00am - 11:00pm) </OpenDays>
          </div>
          {/* <div className={styles.boxContent}>
            <h4 className={styles.h4Text}>Special Diets</h4>
            <p>Vegatarian options, Diabetic options, Customizable orders, Fast food.</p>
          </div> */}
        </BoxC>
        <BoxD>
          <div className={styles.boxdContent}>
            <h4 className={styles.h4Text}>Location </h4>
            {/* <BoxDImg src="/images/mapView.png" /> */}
            <BoxDMapContainer>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBJd1J66Va54MYVKcz_oRnxFdPG-EsoVMQ`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </BoxDMapContainer>
            <p>{data.findRestaurantById.address}</p>
          </div>
        </BoxD>
      </InnerBox>
      <BottomHeader>Highlights</BottomHeader>
      <BottomContainer>
        <FoodImageContainer>
          <FoodImage src="/images/foodVeg.png" />
        </FoodImageContainer>
        <BottomRightContainer>
          <TextHeader>Best Food In The Country</TextHeader>
          <TextDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br />
            <br />
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </TextDetails>
          <div>
            <BtnContainer>
              <OtherButtons> Free delivery </OtherButtons>
              <OtherButtons> Easy payments </OtherButtons>
            </BtnContainer>
            <OtherButtons> 24/7 Service </OtherButtons>
          </div>
        </BottomRightContainer>
      </BottomContainer>
    </AboutContainer>
  );
};

export default RestaurantAbout;
