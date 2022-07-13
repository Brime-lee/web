import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import styled from 'styled-components';

import PhotoSkeleton from '../Skeleton/PhotoSkeleton';
import Button from '../Button';
import PhotosCard from './PhotosCard';

const Camera = styled.img`
  width: 24px;
  height: 26px;
  margin: -14px 0 -6px 5px;
`;

const PhotoContainer = styled.div`
  margin: 40px 0 0 0;
  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }
  @media (min-width: 500px) {
    height: 790px;
    overflow-y: scroll;
  }
`;

const PhotoCard = styled.div`
  width: 45%;
  height: 275px;
  float: left;
  margin: 30px 10px 0 10px;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(78, 51, 0, 0.11);
  border-radius: 10px;
  @media (max-width: 1150px) {
    width: 90%;
    height: auto;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 197px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 10px rgba(15, 38, 76, 0.35));
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 1150px) {
    width: 100%;
    height: 300px;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 44px;
    height: 44px;
    margin: 0 20px 0 0;
    @media (max-width: 500px) {
      margin: 0 10px 0 0;
      width: 30px;
      height: 30px;
    }
  }
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainText = styled.h3`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #402b2b;
  margin: 0 0 10px 0;
  @media (max-width: 1200px) {
    font-size: 10px;
  }
  @media (max-width: 1150px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const SubText = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const Like = styled.img`
  width: 21px;
  height: 21px;
  margin: 0 26px 0 0;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 18px;
    margin: 0 10px 0 0;
    height: 18px;
  }
`;

const Share = styled.img`
  width: 21px;
  height: 21px;
  margin: 0;
  margin-left: 16px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

const DropdownContainer = styled.div`
  width: 270px;
  height: 198px;
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #383838;
    margin: 0;
    padding: 13px 17px;
  }
`;

const ShareType = styled.div`
  display: flex;
  padding: 13px 17px;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 0px 0px 8px 8px;

  padding: 15px 16px;
  border-top: 1px solid rgba(227, 227, 227, 0.32);
  cursor: pointer;

  &:hover {
    border: 1px solid #ff9916;
    border-radius: 8px;
  }

  h6 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    color: #383838;
  }
`;

const RESTAURANTS_PHOTOS_QUERY = gql`
  query findPhoto($data: QueryPhotoInput!) {
    findPhoto(data: $data) {
      _id
      restaurantId
      title
      url
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

const Photos = ({ photosData }) => {
  // const setOpen = () => setOpen(!open);

  const { loading, error, data } = useQuery(RESTAURANTS_PHOTOS_QUERY, {
    variables: {
      data: {
        restaurantId: photosData.findRestaurantById._id,
      },
    },
  });

  if (loading) return <PhotoSkeleton />;
  if (error) return <PhotoSkeleton />;

  const handleOpen = (item) => {};

  return (
    <div>
      {/* <Button upload>
        post a photo <Camera src="/images/camera.png" />
      </Button> */}
      {data.findPhoto.length > 0 ? (
        <PhotoContainer>
          {data?.findPhoto.map((item) => (
            <PhotosCard item={item} />
          ))}
        </PhotoContainer>
      ) : (
        <div>
          <p>
            Photos are not available at the moment <br /> Please check back later...
          </p>
        </div>
      )}
      {/* do not clear the code below>>> will use later in the future */}
      {/* <DropdownContainer>
        <h3>Share photo on</h3>
        <ShareType>
          <h6>Facebook</h6>
          <img src="/images/fbShare.png" />
        </ShareType>
        <ShareType>
          <h6>Instagram</h6>
          <img src="/images/igShare.png" />
        </ShareType>
        <ShareType>
          <h6>Copy Link</h6>
        </ShareType>
      </DropdownContainer> */}
    </div>
  );
};

export default Photos;
