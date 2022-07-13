import React, { useState } from 'react';
import styled from 'styled-components';

interface FollowTextProps {
  follow?: boolean;
}

const PrimaryContainer = styled.div`
  padding: 10px 0 0 10px;
`;

const SecondaryContainer = styled.div`
  width: 470px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 12px;
  margin: 0 12px 24px 0;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    width: 397px;
  }
`;

const ProfilePicture = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  cursor: pointer;
`;

const NameContainer = styled.div`
  width: 55%;
  margin: 6px 10px 0 0;
`;

const Name = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #0f264c;
  margin: 0 0 4px 0;
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
  cursor: pointer;
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
  height: 32px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 6px 0 0 0;
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

const CardPeople = ({ person }) => {
  const [followed, setFollowed] = useState(false);
  const [followedTwo, setFollowedTwo] = useState(false);

  return (
    <>
      <PrimaryContainer>
        <SecondaryContainer>
          <ProfilePicture src={person.img} />
          <NameContainer>
            <Name>{person.name}</Name>
            <Details>{person.details} </Details>
            <Address>{person.address}</Address>
          </NameContainer>
          <FollowBtn follow={followed ? true : false} onClick={() => setFollowed(!followed)}>
            <FollowText follow={followed ? true : false}>{followed ? 'Followed' : 'Follow'}</FollowText>
            {followed ? null : <AddIcon src="/images/addIcon.png" />}
          </FollowBtn>
        </SecondaryContainer>
        <SecondaryContainer>
          <ProfilePicture src={person.img} />
          <NameContainer>
            <Name>{person.name}</Name>
            <Details>{person.details}</Details>
            <Address>{person.address}</Address>
          </NameContainer>
          <FollowBtn follow={followedTwo ? true : false} onClick={() => setFollowedTwo(!followedTwo)}>
            <FollowText follow={followedTwo ? true : false}>{followedTwo ? 'Followed' : 'Follow'}</FollowText>
            {followedTwo ? null : <AddIcon src="/images/addIcon.png" />}
          </FollowBtn>
        </SecondaryContainer>
      </PrimaryContainer>
    </>
  );
};

export default CardPeople;
