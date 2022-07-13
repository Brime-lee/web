import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import moment from 'moment';

import StarRatings from '../StarRatings';

const RevCard = styled.div`
  border-radius: 8px;
  width: 100%;
  position: relative;
  padding: 12px;
  background: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 980px) {
    padding: 12px 20px;
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
  width: 130px;
  height: 130px;
  cursor: pointer;
  margin-right: 10px;
  @media (max-width: 950px) {
    width: 100%;
    height: 138px;
  }
  @media (max-width: 840px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 138px;
  }
`;

const RevUserPic = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
`;

const Avatar = styled(FaUserCircle)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  color: gray;
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
  width: max-content;
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
  margin: 0 8px 0 0;
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
  justify-content: flex-start;
  width: 200px;
`;

const RevBottomRightText = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeNumber = styled.p`
  margin: 0;
`;

const HorizontalRule = styled.hr`
  width: 15px;
  transform: rotate(90deg);
  color: #edf0fa;
`;

const ShareIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ReviewIcon = styled.img`
  margin-right: 24px;
  cursor: pointer;
`;

const ReviewCard = (props) => {
  const [reviews, setReviews] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.review.likes);

  const handleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div>
      {props.review.user ? (
        <RevCard key={props.index}>
          <RevTopContainer>
            <RevTopLeft>
              {/* <RevUserPic src="/images/reviewAvatar.png" alt="reviewAvatar" /> */}
              <Avatar />
              <RevUserContainer>
                <RevUser>{props.review.user?.firstName + ' ' + props.review.user?.lastName}</RevUser>
                <RevComment>Eat Pray Love</RevComment>
              </RevUserContainer>
            </RevTopLeft>
            {/* <RevTopRightImg src="/images/reviewMore.png" alt="reviewMore" /> */}
          </RevTopContainer>
          <StarContainer>
            <RevSecondaryContainer>
              <ReviewLeftWord>{props.restData.name}</ReviewLeftWord>
              <ReviewWord>Review</ReviewWord>
            </RevSecondaryContainer>
            <RightStar>
              <StarRatings token={props.token} rating={props.review.rating} enabled={false} />
            </RightStar>
          </StarContainer>
          <ReviewTypography>{props.review.body}</ReviewTypography>
          {/* <ReviewTypographyButton>...See more </ReviewTypographyButton> */}
          <RevBottomContainer>
            <RevBottomLeft>
              <LikeContainer>
                <LikeNumber>{liked ? likeCount + 1 : likeCount}</LikeNumber>
                <HorizontalRule />
                {/* <ReviewIcon src="/images/reviewThumb.png" alt="reviewThumb" /> */}
                <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={handleLiked} />
              </LikeContainer>
              {/* <LikeContainer>
              <LikeNumber>24</LikeNumber>
              <HorizontalRule />
              <ReviewIcon src="/images/reviewMessage.png" alt="reviewMessage" />
              
              </LikeContainer>
            <ShareIcon src="/images/reviewShareAndroid.png" alt="reviewShareAndroid" /> */}
            </RevBottomLeft>
            <RevBottomRightText>{moment(props.review.meta.createdAt).startOf('day').fromNow()} </RevBottomRightText>
          </RevBottomContainer>
        </RevCard>
      ) : null}
    </div>
  );
};

export default ReviewCard;
