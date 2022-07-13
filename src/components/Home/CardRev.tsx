import styled from 'styled-components';

const RevColumn = styled.div`
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

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const RevCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  position: relative;
  padding: 12px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const RevTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const RevTopLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RevTopRightImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const RevAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
`;

const RevUserContainer = styled.div`
  margin-left: 4px;
`;

const RevUser = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.25px;
  color: #0f264c;
  margin: 0 0 2px 0;
  cursor: pointer;
`;

const RevComment = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  color: #4b4b4b;
  margin: 0;
`;

const RevSecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  width: 100%;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 140px;
  height: 32px;
  margin: 0 0 10px 0;
`;

const RightStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ReviewWord = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #1d1d1d;
  margin: 0;
`;

const ReviewLeftWord = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  color: #0055ff;
  margin: 0;
  cursor: pointer;
`;

const ReviewTypography = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 0 0 4px 0;
`;

const ReviewTypographyButton = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #8a8a8a;
  cursor: pointer;
  margin: 0 0 10px 0;
  cursor: pointer;
`;

const RevBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #ffffff;
`;

const RevBottomLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
`;

const RevBottomRightText = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeNumber = styled.p`
  margin: 0;
`;

const CardRev = () => {
  return (
    <RevColumn>
      <RevCard>
        <RevTopContainer>
          <RevTopLeft>
            <RevAvatar src="/images/reviewAvatar.png" alt="reviewAvatar" />
            <RevUserContainer>
              <RevUser>Adeola Adams</RevUser>
              <RevComment>Eat Pray Love</RevComment>
            </RevUserContainer>
          </RevTopLeft>
          <RevTopRightImg src="/images/reviewMore.png" alt="reviewMore" />
        </RevTopContainer>
        <StarContainer>
          <RevSecondaryContainer>
            <ReviewLeftWord>Danfo Biastro</ReviewLeftWord>
            <ReviewWord>Review</ReviewWord>
          </RevSecondaryContainer>
          <RightStar>
            <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
            <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
            <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
            <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
            <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
          </RightStar>
        </StarContainer>
        <ReviewTypography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab, rem doloribus unde magnam porro harum
          itaque
        </ReviewTypography>
        <ReviewTypographyButton>...See more </ReviewTypographyButton>
        <CardImg src="/images/reviewImg.png" alt="reviewImg" />
        <RevBottomContainer>
          <RevBottomLeft>
            <LikeContainer>
              <LikeNumber>245</LikeNumber>
              <hr style={{ width: '15px', transform: ' rotate(90deg)', color: '#EDF0FA' }} />
              <img style={{ marginRight: '24px', cursor: 'pointer' }} src="/images/reviewThumb.png" alt="reviewThumb" />
            </LikeContainer>
            <LikeContainer>
              <LikeNumber>24</LikeNumber>
              <hr style={{ width: '15px', transform: ' rotate(90deg)', color: '#EDF0FA' }} />
              <img
                style={{ marginRight: '24px', cursor: 'pointer' }}
                src="/images/reviewMessage.png"
                alt="reviewMessage"
              />
            </LikeContainer>
            <img
              style={{ width: '24px', height: '24px', cursor: 'pointer' }}
              src="/images/reviewShareAndroid.png"
              alt="reviewShareAndroid"
            />
          </RevBottomLeft>
          <RevBottomRightText>2 Days</RevBottomRightText>
        </RevBottomContainer>
      </RevCard>
    </RevColumn>
  );
};

export default CardRev;
