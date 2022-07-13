import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import FollowersCard from './FollowersCard';

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(33, 33, 33, 0.76);
  backdrop-filter: blur(15px);
  z-index: 200;
  transition: 3s;
`;

const HeadingContainer = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin-bottom: 10px;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 100%;
    color: #ffffff;
    margin: 0;
  }

  @media (max-width: 820px) {
    width: 95%;
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 780px) {
    width: 400px;
    h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 410px) {
    width: 95%;
  }
`;

const FollowersContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 800px;
  height: 600px;
  overflow-y: scroll;
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
  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 780px) {
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 95%;
  }
`;

const people = [
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 1,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 2,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 3,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 4,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 5,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 6,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 7,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 8,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 9,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 10,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 11,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 12,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 13,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 14,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 15,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 16,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 17,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 18,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 19,
  },
  {
    img: '/images/peopleProfile.png',
    name: 'Abiola Fagbayike',
    details: 'Sed ut perspiciatis unde omnis iste natus error...',
    address: 'Victoria Island, Lagos',
    id: 20,
  },
];

const FollowersModal = ({ onClose, modal }) => {
  //Allows us to close the modal upon pressing the 'Esc' button.
  function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  if (!modal) {
    return null;
  }

  return (
    <ModalOverlay onClick={() => onClose()}>
      <HeadingContainer>
        <h1
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Followers
        </h1>
        <AiOutlineClose style={{ cursor: 'pointer' }} color="#fff" size="20px" onClick={onClose} />
      </HeadingContainer>
      <FollowersContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {people.map((person) => (
          <FollowersCard person={person} />
        ))}
      </FollowersContainer>
    </ModalOverlay>
  );
};

export default FollowersModal;
