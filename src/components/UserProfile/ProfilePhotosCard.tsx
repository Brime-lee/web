import React, { useState } from 'react';
import { BsHandThumbsUpFill, BsShareFill } from 'react-icons/bs';
import styled from 'styled-components';

const ProfilePhotosCard = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const PhotoCard = styled.div`
    width: 45%;
    height: 420px;
    float: left;
    margin: 30px 10px 10px 10px;
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
    align-items: flex-start;
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
    position: relative;
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

  const SubText = styled.p`
    font-family: Montserrat;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  `;

  const DropdownContainer = styled.div`
    position: absolute;
    top: 50px;
    right: -10px;
    width: 270px;
    height: 198px;
    background: #ffffff;
    box-shadow: 0px 4px 40px rgba(78, 51, 0, 0.11);
    border-radius: 8px;
    z-index: 20;

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

  return (
    <PhotoCard key={item.id}>
      <Photo src={item.src} />
      <div style={{ width: '100%', height: '', padding: '10px' }}>
        <BottomContainer>
          <BottomLeft>
            <div>
              <MainText>{item.title.toLowerCase()}</MainText>
              <SubText>{item.time}</SubText>
            </div>
          </BottomLeft>
          <BottomRight>
            <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={() => setLiked(!liked)} />
            <BsShareFill
              onClick={() => setOpen(!open)}
              style={{ margin: '0 0 0 16px', cursor: 'pointer', fontSize: '21px' }}
            />
            {open && (
              <DropdownContainer>
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
              </DropdownContainer>
            )}
          </BottomRight>
        </BottomContainer>
      </div>
    </PhotoCard>
  );
};

export default ProfilePhotosCard;
