import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoBookmarksOutline } from 'react-icons/io5';
import styles from '../../styles/Home.module.css';
import StarRating from '../StarRating';
import SkeletonCard from '../Skeleton/Skeleton';
import { restaurantLink } from '../../utils/helpers';

const RecColumn = styled.div`
  float: left;
  width: 33.3%;
  margin: 0 auto;
  padding: 10px 10px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 10px 20px;
  }
`;

const RecCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const RecCardInnerContainer = styled.div`
  margin: 0 0 10px 0;
`;

const RecCardOuterContainer = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px 10px 10px;

  @media (max-width: 800px) {
    height: 140px;
  }

  @media (max-width: 675px) {
    height: 170px;
  }
  @media (max-width: 500px) {
    height: auto;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  background: #4b4b4b;
  width: 40%;
  height: 32px;
  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const LeftTitle = styled.a`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 0;
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

const LeftSubTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin: 12px 0 0 0;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media (max-width: 900px) {
    color: #8a8a8a;
  }
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
  text-transform: capitalize;
  width: 100%;
  margin: 0;
`;

const RightStar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-left: 10px;
`;

const RightReview = styled.p`
  font-weight: normal;
  font-size: 8px;
  color: #ffffff;
  margin: 0 0 0 4px;
`;

const ReviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #4b4b4b;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  position: absolute;
  top: 214px;
`;

const CardImg = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 245px;
  object-fit: cover;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
  @media (max-width: 1100px) {
    margin-bottom: 8px;
  }
`;

const FavTag = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: rgba(248, 248, 248, 0.25);
  backdrop-filter: blur(100px);
  border-radius: 50%;
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

const CardRec = ({ visible, data, loading, error }) => {
  if (loading) return <SkeletonCard />;
  if (error) return <SkeletonCard />;

  return (
    <div>
      {data.findRestaurants.slice(0, visible).map((restaurant) => (
        <RecColumn key={restaurant.name}>
          <RecCard>
            <FavTag>
              <IoBookmarksOutline className={styles.tag} />
            </FavTag>
            <CardImg src={restaurant.logo} alt={restaurant.name} />
            <ReviewTop>
              <RightStar>
                <StarRating
                  count={5}
                  size={20}
                  value={restaurant.rating}
                  activeColor={'#ff9916'}
                  inactiveColor={'#ddd'}
                />
              </RightStar>
            </ReviewTop>
            <RecCardOuterContainer>
              <RecCardInnerContainer>
                <Left>
                  <Link href={restaurantLink(restaurant.name, restaurant.shortId)} passHref>
                    <LeftTitle key={restaurant.shortId}>{restaurant.name.toLowerCase()}</LeftTitle>
                  </Link>
                  <LeftSubTitle>{restaurant.description}</LeftSubTitle>
                </Left>
              </RecCardInnerContainer>
              <LeftLocation>
                <Link href={restaurantLink(restaurant.name, restaurant.shortId)} passHref>
                  <Pin style={{ fill: '#ff9916 !important' }} />
                </Link>
                <Location>{restaurant.address.toLowerCase()}</Location>
              </LeftLocation>
            </RecCardOuterContainer>
          </RecCard>
        </RecColumn>
      ))}
    </div>
  );
};

export default CardRec;
