import styled from 'styled-components';
import Nav from '../components/Global/Nav';
import LatestEvent from '../components/Home/LatestEvent';
import Influencers from '../components/Home/Influencers';
import Places from '../components/Discover/Places';
import People from '../components/Discover/People';
import HightableEvents from '../components/Home/HightableEvents';
import Sub from '../components/Home/Sub';
import Restaurants from '../components/Discover/Restaurants';
import Attractions from '../components/Discover/Attractions';
import Recommendation from '../components/Home/Recommendation';

const Wrapper = styled.div`
  width: 700px;
  height: 45px;
  margin: 0 20px 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;

  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 750px) {
    width: 500px;
  }
  @media (max-width: 590px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 320px;
  }
`;

const DiscoverMenu = styled.div`
  width: 65%;
  height: 45px;
  background: #0f264c;
  border-radius: 0px 8px 8px 0px;
  margin: 40px 0;
  @media (max-width: 1100px) {
    width: 85%;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;

const NavButton = styled.a`
  background: #0f264c;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #edf0fa;
  // padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0 auto;
  transition: 0.4s;

  &:hover {
    color: #ff9916;
    transform: scale(1.1);
  }

  @media (max-width: 750px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const Discover = () => {
  return (
    <>
      {/* <Nav /> */}
      <LatestEvent />
      <Influencers />
      <Places />
      <People />
      <DiscoverMenu>
        <Wrapper>
          <NavButton href="/">All</NavButton>
          <NavButton href="/discover">Trending</NavButton>
          <NavButton href="/about">Deals</NavButton>
          <NavButton href="/route">Events</NavButton>
          <NavButton href="/route">Near</NavButton>
        </Wrapper>
      </DiscoverMenu>
      {/* <HightableEvents /> */}
      <Recommendation />
      {/* <Restaurants /> */}
      {/* <Attractions /> */}
      <Sub />
    </>
  );
};

export default Discover;
