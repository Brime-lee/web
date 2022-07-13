import React, { useState } from 'react';
import styled from 'styled-components';
import StarRatings from '../StarRatings'

interface FollowTextProps {
  follow?: boolean;
}

const CardPlacesContainer = styled.div`
  margin: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  border-radius: 8px 8px 0 0;
`;

const CardImg = styled.img`
  width: 360px;
  height: 200px;
  border-radius: 8px 8px 0 0;
  object-fit: center;
  cursor: pointer;
`;

const Right = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4b4b4b;
  width: 50%;
  height: 34px;
`;

const RightStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 900px) {
    margin-left: 10px;
  }
`;

const RightReview = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #ffffff;
  margin: 0 0 0 4px;
`;

const CardPlacesContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 12px;
`;

const Left = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: flex-start;
`;

const CardPlacesTitle = styled.h1`
  margin: 0 0 4px 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #0f264c;
  cursor: pointer;
`;

const Details = styled.p`
  margin: 0 0 8px 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #402b2b;
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ad6600;
  margin: 0;
`;

const FollowBtn = styled.button<FollowTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: '100px';
  background: ${({ follow }) => (follow ? '#0f264c' : '#ffffff')};
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  animation: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
`;

const FollowText = styled.p<FollowTextProps>`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: ${({ follow }) => (follow ? '#ffffff' : '#0f264c')};
  margin-right: 4px;
`;

const AddIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const CardPlaces = ({ place }) => {
  const [followed, setFollowed] = useState(false);

  return (
    <>
      <CardPlacesContainer key={place.id}>
        <ImgContainer>
          <CardImg src={place.img} alt="place" />
          <Right>
            <StarRatings rating={4} size={15}/>
            <RightReview>69 reviews</RightReview>
            
          </Right>
        </ImgContainer>
        <CardPlacesContent>
          <Left>
            <CardPlacesTitle>{place.title}</CardPlacesTitle>
            <Details>{place.details}</Details>
            <Address>{place.address}</Address>
          </Left>
          <FollowBtn follow={followed ? true : false} onClick={() => setFollowed(!followed)}>
            <FollowText follow={followed ? true : false}>{followed ? 'Followed' : 'Follow'}</FollowText>
            {followed ? null : <AddIcon src="/images/addIcon.png" />}
          </FollowBtn>
        </CardPlacesContent>
      </CardPlacesContainer>
    </>
  );
};

export default CardPlaces;
