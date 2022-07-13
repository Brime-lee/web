import React, { useState } from 'react';
import styled from 'styled-components';

import ProfilePhotosCard from './ProfilePhotosCard';

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

const photos = [
  {
    id: 1,
    src: '/images/photo1.png',
    title: 'Chicken festival',
    time: '20 minutes ago',
  },
  {
    id: 2,
    src: '/images/photo2.png',
    title: 'Amazing ambience',
    time: '30 minutes ago',
  },
  {
    id: 3,
    src: '/images/photo3.png',
    title: 'Love the grilled meat',
    time: '45 minutes ago',
  },
  {
    id: 4,
    src: '/images/photo4.png',
    title: 'Had fun with my family ',
    time: '3 hours ago',
  },
  {
    id: 5,
    src: '/images/photo5.png',
    title: 'Perfect fruit salad ',
    time: '5 hours ago',
  },
  {
    id: 6,
    src: '/images/photo6.png',
    title: "My son's birthday ",
    time: '1 day ago',
  },
];
const ProfilePhotos = () => {
  return (
    <div>
      <PhotoContainer>
        {photos.map((item) => (
          <ProfilePhotosCard item={item} />
        ))}
      </PhotoContainer>
    </div>
  );
};

export default ProfilePhotos;
