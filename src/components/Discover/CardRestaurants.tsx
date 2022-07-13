import styled from 'styled-components';

const RecColumn = styled.div`
  float: left;
  width: 33.3%;
  height: auto;
  margin: 0 auto;
  padding: 10px 10px;

  @media (max-width: 1200px) {
    width: 380px;
    display: block;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    width: 50%;
    display: block;
    margin-bottom: 20px;
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
  padding: 0 0px 0px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4b4b4b;
  width: 40%;
  height: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LeftTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 0;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.25px;
  }
`;

const LeftSubTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0px
  color: #000000;

  @media (max-width: 900px) {
    color: #8a8a8a;
  }
`;

const LeftLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Location = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666670;
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

const ReviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #4b4b4b;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;

  @media (min-width: 900px) {
    display: none;
  }
`;

const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
`;

const FavTag = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 5;
`;

const CardRestaurants = () => {
  return (
    <RecColumn>
      <RecCard>
        <FavTag src="/images/favTag.png" alt="favTag" />

        <CardImg src="/images/cardImg.png" alt="cardImg" />
        <ReviewTop>
          <RightStar>
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
          </RightStar>
          <RightReview> 69 reviews</RightReview>
        </ReviewTop>
        <RecCardInnerContainer>
          <Left>
            <LeftTitle>NOK Restaurant</LeftTitle>
            <LeftSubTitle>Chinese dining, Middle Eastern, Vegetarian diet</LeftSubTitle>
            <LeftLocation>
              <img
                src="/images/pinBlack.png"
                style={{
                  marginRight: '10px',
                }}
                alt="location"
              />
              <Location>Victoria Island, Lagos</Location>
            </LeftLocation>
          </Left>
          <Right>
            <RightStar>
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </RightStar>
            <RightReview>69 reviews</RightReview>
          </Right>
        </RecCardInnerContainer>
      </RecCard>
    </RecColumn>
  );
};

export default CardRestaurants;
