import Recommendation from '../components/Home/Recommendation';
import Reviews from '../components/Home/Reviews';
import LatestEvent from '../components/Home/LatestEvent';
import HightableEvents from '../components/Home/HightableEvents';
import Influencers from '../components/Home/Influencers';
import Sub from '../components/Home/Sub';
import Hero from './../components/Home/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Recommendation />
      {/* <Reviews /> */}
      {/* <LatestEvent /> */}
      {/* <HightableEvents /> */}
      {/* <Influencers /> */}
      <Sub />
    </div>
  );
};

export default Home;
