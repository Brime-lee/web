import React, { useState } from 'react';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import styled from 'styled-components';

const PhotosCard = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const PhotoCard = styled.div`
    width: 45%;
    height: 400px;
    float: left;
    margin: 30px 10px 0 10px;
    background: #ffffff;
    box-shadow: 0px 4px 40px rgba(78, 51, 0, 0.11);
    border-radius: 10px;
    @media (max-width: 1150px) {
      width: 97%;
      height: auto;
    }

    @media (max-width: 850px) {
      width: 95%;
      margin: 30px 10px 0 20px;
    }

    @media (max-width: 500px) {
      width: 95%;
      margin: 30px 10px 0 10px;
      height: auto;
    }
    @media (max-width: 300px) {
      width: 95%;
      margin: 30px 10px 0 6px;
      height: auto;
    }
  `;

  const Photo = styled.img`
    width: 100%;
    height: 340px;
    object-fit: cover;
    filter: drop-shadow(0px 4px 10px rgba(15, 38, 76, 0.35));
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 1150px) {
      width: 100%;
      // height: 300px;
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
    text-transform: capitalize;
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

  return (
    <PhotoCard key={item._id}>
      <Photo src={item.url} />
      <div style={{ width: '100%', height: '', padding: '10px' }}>
        <BottomContainer>
          <BottomLeft>
            <div>
              <MainText>{item.title.toLowerCase()}</MainText>
            </div>
          </BottomLeft>
          <BottomRight>
            <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={() => setLiked(!liked)} />
            <Share onClick={() => setOpen(!open)} src="/images/faqShare.png" />
          </BottomRight>
        </BottomContainer>
      </div>
    </PhotoCard>
  );
};

export default PhotosCard;
