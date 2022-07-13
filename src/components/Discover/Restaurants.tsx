import styled from 'styled-components';
import CardRestaurants from './CardRestaurants';

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const RecHeaderContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RecHeader = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 100%;
  padding: 0 8px;
  color: #343434;
  margin: 0;

  @media (max-width: 650px) {
    font-size: 42px;
  }

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

const RecHyphen = styled.hr`
  margin: 0 5px;
  width: 75%;
`;

const RecSecondaryTitle = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  padding: 0 10px;
  color: #343434;
  margin: 8px 0 32px 0;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const RecRow = styled.div`
  background-color: #ffffff;

  &:after {
    background-color: #ffffff;
    content: '';
    display: table;
    clear: both;
  }
`;

const RecButton = styled.button`
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 42px auto;
  width: 166px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;

const RecButtonText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #0f264c;
`;

const RecIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Restaurants = () => {
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Restaurants</RecHeader>
          <RecHyphen />
        </RecHeaderContainer>
        <RecSecondaryTitle> Great Experiences outside your home</RecSecondaryTitle>
        <RecRow>
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
        </RecRow>
        <RecButton>
          <RecIcon src="/images/seemoreIcon.png" alt="see more" />
          <RecButtonText>See more</RecButtonText>
        </RecButton>
      </MainWrapper>
    </div>
  );
};

export default Restaurants;
