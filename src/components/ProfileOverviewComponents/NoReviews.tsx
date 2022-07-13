import styled from 'styled-components';

const NoReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center:
  bottom: 100px;
`;

const ContentTitle = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #40444d;
  margin: 0px;
`;

const Content = styled.p`
  text-align: center;
  margin: auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #40444d;
`;

const NoReviewBanner = styled.img`
  margin: auto;
  margin-top: 32px;
  width: 216.02px;
  height: 216.02px;
`;

const NoReviews = () => {
  return (
    <NoReviewsWrapper>
      <ContentTitle> No Reviews Yet</ContentTitle>
      <Content> You have not shared any reviews yet</Content>
      <NoReviewBanner src="/images/noReviewBanner.svg"></NoReviewBanner>
    </NoReviewsWrapper>
  );
};

export default NoReviews;
