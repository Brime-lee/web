import styled from 'styled-components';
import CardPlaces from './CardPlaces';
import { useRouter } from 'next/router';

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px 0 40px auto;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 10px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 16px;
  color: #0f264c;
  margin: 0;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -webkit-overflow-scrolling: touch;

  @media (max-width: 900px) {
    width: 100vw;
    overflow-x: scroll;
  }
`;

const NextIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

const places = [
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 1,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 2,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 3,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos4',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 4,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 5,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 6,
  },
];

const Places = () => {
  const router = useRouter();

  const scrollRight = () => {
    const right = document.querySelector(CardContainer);
    right.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <MainWrapper>
        <TitleContainer>
          <Title>Places to follow</Title>
          <img src="/images/arrow.png" alt="arrow" />
        </TitleContainer>
        <CardContainer>
          {places.map((place) => (
            <CardPlaces key={place.id} place={place} />
          ))}
        </CardContainer>
        {router.pathname === '/recommended' || (
          <NextIcon onClick={scrollRight} src="/images/placesScroll.png" alt="placesScroll" />
        )}
      </MainWrapper>
    </>
  );
};

export default Places;
