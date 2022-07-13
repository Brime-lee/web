import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import Button from '../Button';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { RESTAURANTS_LIST_QUERY } from '../../graphQL/queries';
import { restaurantLink } from '../../utils/helpers';

const HeroSection = styled.section`
  background-color: #fff;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LeftHero = styled.div`
  // width: 55%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 120px;

  @media (min-width: 1300px) {
    padding-left: 100px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-top: 32px;
    padding-bottom: 10px;
  }

  @media (min-width: 1500px) {
    padding-left: 175px;
  }
`;

const RightHero = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 900px) {
    display: none;
  }
`;

const HeroPrimaryTitle = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 62px;
  line-height: 120%;
  color: #1a1a1a;
  margin: 0 0 24px;
  width: 820px;

  z-index: 4;
  @media (max-width: 900px) {
    width: 100%;
    font-size: 40px;
  }
`;

const HeroSecondaryTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 140%;
  color: #000000;
  margin: 0 0 44px;
  width: 620px;
  z-index: 4;

  @media (max-width: 900px) {
    width: 100%;
    font-size: 18px;
  }
`;

const HeroPlacesButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 4;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;

const HeroLocationContainer = styled.div`
display: none;
z-index: 4;

@media (max-width: 900px) {
  display: flex
  align-items: flex-start;
  justify-content: space-between;
border: 1px solid #BBC3C9;
box-sizing: border-box;
  padding: 16px;
  width: 343px;
  height: 128px;
 }

`;
const InpuContainer = styled.div`
  position: relative;
`;
const SearchDropdown = styled.div`
  max-height: 180px;
  width: 602px;
  overflow-y: scroll;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  position: absolute;
  z-index: 100;
  top: 57px;
  left: 0;
  padding: 10px;
  border: 1px solid #ff991645;
  border-radius: 8px;
  background-color: #fffaf3;

  @media (max-width: 640px) {
    width: 90vw;
  }
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
    height: 100px;
    width: 100%;
    padding: 10px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
    @media (max-width: 500px) {
      height: auto;
    }
  }
  div {
    height: 100%;
  }
`;

const LeftTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 0 0 10px 0;
  cursor: pointer;
  transition: 0.3s;
  text-transform: capitalize;

  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.25px;
  }
`;

const SearchImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50px;
  margin-right: 30px;
`;

const LeftLocation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Location = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #666670;
  width: 100%;
  margin: 0;
`;

const Pin = styled(FaMapMarkerAlt)`
  fill: #ff9916 !important;
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }
`;

const NoResultContainer = styled.li`
  justify-content: center;
`;

const NoResult = styled.p`
  font-weight: normal;
  font-size: 20px;
  text-align: center;
`;

const RESTAURANTS_SEARCH_QUERY = gql`
  query searchRestaurants($term: String!) {
    searchRestaurants(term: $term) {
      _id
      shortId
      name
      email
      telephone
      password
      address
      logo
      description
      location {
        latitude
        longitude
      }
      url
      rating
      verified
      verifiedAt
      meta {
        active
        activatedAt
        deactivatedAt
        createdAt
        updatedAt
      }
    }
  }
`;

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [getSearchItem, { data: searchData, loading: searchLoading }] = useLazyQuery(RESTAURANTS_SEARCH_QUERY, {
    fetchPolicy: 'cache-and-network',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      getSearchItem({ variables: { term: searchTerm } });
      setSearchResults(searchData?.searchRestaurants);
      setVisible(true);
    } else setVisible(false);
  };

  return (
    <HeroSection onClick={() => setVisible(false)}>
      <LeftHero>
        <div style={{ zIndex: '4' }}>
          <HeroPrimaryTitle>
            Welcome To The <span style={{ color: '#FF9916' }}>HighTable </span> Side Of Life
          </HeroPrimaryTitle>
          <HeroSecondaryTitle>
            Explore great location options for your next outing experience through other peoples experience and reviews
            on the app
          </HeroSecondaryTitle>
        </div>
        <form onSubmit={handleSearch} className={styles.heroForm} action="">
          <InpuContainer>
            <input
              className={styles.heroSearch}
              type="text"
              placeholder="Search i.e restaurants, location, dishes"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {visible ? (
              <SearchDropdown>
                <ul>
                  {searchData?.searchRestaurants?.length > 0 ? (
                    searchData?.searchRestaurants?.map((item) => (
                      <Link href={restaurantLink(item.name, item.shortId)} passHref>
                        <li key={item._id}>
                          <Link href={restaurantLink(item.name, item.shortId)} passHref>
                            <SearchImg src={item.logo} alt={item.logo} />
                          </Link>
                          <div>
                            <Link href={restaurantLink(item.name, item.shortId)} passHref>
                              <LeftTitle>{item.name.toLowerCase()}</LeftTitle>
                            </Link>
                            <LeftLocation>
                              <Link href={restaurantLink(item.name, item.shortId)} passHref>
                                <Pin style={{ fill: '#ff9916 !important' }} />
                              </Link>
                              <Location>{item.address}</Location>
                            </LeftLocation>
                          </div>
                        </li>
                      </Link>
                    ))
                  ) : searchLoading ? (
                    <NoResultContainer>
                      <NoResult>Loading...</NoResult>
                    </NoResultContainer>
                  ) : (
                    <NoResultContainer>
                      <NoResult>No Results Found</NoResult>
                    </NoResultContainer>
                  )}
                </ul>
              </SearchDropdown>
            ) : null}
          </InpuContainer>
          <Button type="submit" small>
            Search
          </Button>
        </form>
        {/* <HeroLocationContainer>
          <div className={styles.heroLocationInnerContainer}>
            <select className={styles.heroPin} name="select">
              <option value="valor1" selected>
                Country
              </option>
              <option value="valor2" selected>
                Country
              </option>
              <option value="valor3">Country</option>
            </select>
            <select className={styles.heroCalender} name="select">
              <option value="valor1">From</option>
              <option value="valor2" selected>
                From
              </option>
              <option value="valor3">From</option>
            </select>
          </div>
          <div className={styles.heroLocationInnerContainer}>
            <select className={styles.heroPin} name="select">
              <option value="valor1">City</option>
              <option value="valor2" selected>
                City
              </option>
              <option value="valor3">City</option>
            </select>
            <select className={styles.heroCalender} name="select">
              <option value="valor1">To</option>
              <option value="valor2" selected>
                To
              </option>
              <option value="valor3">To</option>
            </select>
          </div>
        </HeroLocationContainer> */}
        {/* <div className={styles.heroPlacesContainer}>
          <Link href="restaurantDetails">
            <HeroPlacesButton>
              <img src="/images/restaurant.png" alt="restaurant" />
              <p style={{ marginLeft: '5px' }}> Restaurants</p>
            </HeroPlacesButton>
          </Link>
          <HeroPlacesButton>
            <img src="/images/hotel.png" alt="hotel" />
            <p style={{ marginLeft: '5px' }}> Hotels</p>
          </HeroPlacesButton>
          <HeroPlacesButton>
            <img src="/images/activity.png" alt="activity" />
            <p style={{ marginLeft: '5px' }}> Activities</p>
          </HeroPlacesButton>
          <HeroPlacesButton>
            <img src="/images/event.png" alt="event" />
            <p style={{ marginLeft: '5px' }}> Events</p>
          </HeroPlacesButton>
        </div> */}
      </LeftHero>
      <RightHero>
        <div className={styles.rightImagesContainer}>
          <img className={styles.heroImage2} src="/images/heroImage2.png" alt="heroImage" />
          <img className={styles.heroImage1} src="/images/heroImage1.png" alt="heroImage" />
        </div>
      </RightHero>
    </HeroSection>
  );
};

export default Hero;
