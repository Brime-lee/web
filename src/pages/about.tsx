import styled from 'styled-components';

const Hero = styled.div`
  width: 100%;
  height: 390px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.section`
  background: #fbfbfb;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 20px 0 40px 0;
  background: #fbfbfb;
`;

const BodyWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
`;

const BodyHeader = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #343434;

  @media (max-width: 900px) {
    text-align: center !important;
  }

  margin: 0 0 24px 0;
`;

const Typography = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 170%;
  color: #000000;
  text-align: left !important;
  margin: 0 0 42px 0;
`;

const TeamWrapper = styled.div`
  margin: 0 0 72px 0;
  padding: 0 20px;
`;

const MemberProfile = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 52px 0;
`;

const Name = styled.h1`
  font-family: DM Serif Display;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #000000;
  margin: 0 0 4px 0;
`;

const ProfileImg = styled.img`
  margin: 0 12px 0 0;
`;

const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #666670;
  margin: 0 0 12px 0;
`;

const AboutMember = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #000000;
  margin: 0;
`;

const ProductWrapper = styled.div`
  text-align: center;
  margin: 0;
`;

const ProductTeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BottomContainer = styled.div`
  text-align: center;
  margin: 72px auto 0 auto;
`;

const BottomText = styled.h1`
  text-align: center;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  margin: 0 0 24px 0;
  color: #0f264c;
`;

const About = () => {
  return (
    <>
      <Hero>
        <HeroImage src="/termImg.png" />
      </Hero>
      <Wrapper>
        <MainWrapper>
          <BodyWrapper>
            <BodyHeader>About Us</BodyHeader>
            <Typography>
              Welcome to the HighTable side of life! We are a hospitality, tourism & entertainment ecosystem that
              bridges the gap between customers and hospitality businesses across Africa. We help locals and tourists
              discover where to go, what to do, where to stay, and connect them with those in their communities that
              share the same interests. Whether you want to dine at the best restaurants, enjoy the latest nightlife
              spots, treat yourself to a luxurious resort stay, or immerse yourself in culture, we’ve got you covered.
              {/* Over the years, fun seekers have faced increasing difficulties finding reliable hospitality spots as and
            when needed. This activity typically takes a lot of mental effort, a few google search results, and some
            30minutes or more to decide where to hangout. This is especially true for those who love fine dining, and
            those who love nightlife.
            <br /> <br /> HighTable seeks to connect these fun seekers to prime hospitality/entertainment businesses in
            Nigeria. Our platform will enable businesses and their customers to engage and transact in an interactive
            manner that drives efficiency and customer experience. This product will be free for fun seekers and, as
            such, it will allow our brand to extend its reach and visibility in the market. */}
            </Typography>
            <BodyHeader>Our Mission</BodyHeader>
            <Typography>
              Our mission is to transform hospitality and entertainment experiences across Africa using disruptive
              technology, innovative minds, and community engagement.
              {/* Over the years, fun seekers have faced increasing difficulties finding reliable hospitality spots as and
            when needed. This activity typically takes a lot of mental effort, a few google search results, and some
            30minutes or more to decide where to hangout. This is especially true for those who love fine dining, and
            those who love nightlife. <br /> <br /> HighTable seeks to connect these fun seekers to prime
            hospitality/entertainment businesses in Nigeria. Our platform will enable businesses and their customers to
            engage and transact in an interactive manner that drives efficiency and customer experience. This product
            will be free for fun seekers and, as such, it will allow our brand to extend its reach and visibility in the
            market. */}
            </Typography>
            <BodyHeader>Our Vision</BodyHeader>
            <Typography>
              To connect consumers to hospitality businesses and entertainment experiences using tech solutions; In
              doing so, we aim to nurture organic and fruitful relationships between consumers, businesses, and their
              communities.
              {/* Over the years, fun seekers have faced increasing difficulties finding reliable hospitality spots as and
            when needed. This activity typically takes a lot of mental effort, a few google search results, and some
            30minutes or more to decide where to hangout. This is especially true for those who love fine dining, and
            those who love nightlife. <br /> <br /> HighTable seeks to connect these fun seekers to prime
            hospitality/entertainment businesses in Nigeria. Our platform will enable businesses and their customers to
            engage and transact in an interactive manner that drives efficiency and customer experience. This product
            will be free for fun seekers and, as such, it will allow our brand to extend its reach and visibility in the
            market. */}
            </Typography>
          </BodyWrapper>
          {/* <TeamWrapper>
          <BodyHeader>Our Team</BodyHeader>
          <MemberProfile>
            <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
            <div>
              <Name>Ridwan “Baller” Lawal</Name>
              <Title>CEO/Founder</Title>
              <AboutMember>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quam! Fugit impedit ab distinctio
                numquam, doloremque nobis repudiandae eaque inventore ipsa molestias incidunt tempore asperiores
                officiis.
              </AboutMember>
            </div>
          </MemberProfile>
          <MemberProfile>
            <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
            <div>
              <Name>Wobia Igwe</Name>
              <Title>CFO</Title>
              <AboutMember>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quam! Fugit impedit ab distinctio
                numquam, doloremque nobis repudiandae eaque inventore ipsa molestias incidunt tempore asperiores
                officiis.
              </AboutMember>
            </div>
          </MemberProfile>
          <MemberProfile>
            <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
            <div>
              <Name>John “Baller” Doe</Name>
              <Title>Financial BlahBlahBlah</Title>
              <AboutMember>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quam! Fugit impedit ab distinctio
                numquam, doloremque nobis repudiandae eaque inventore ipsa molestias incidunt tempore asperiores
                officiis.
              </AboutMember>
            </div>
          </MemberProfile>
          <MemberProfile>
            <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
            <div>
              <Name>Micheal Ezeokoye</Name>
              <Title>CTO</Title>
              <AboutMember>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quam! Fugit impedit ab distinctio
                numquam, doloremque nobis repudiandae eaque inventore ipsa molestias incidunt tempore asperiores
                officiis.
              </AboutMember>
            </div>
          </MemberProfile>
        </TeamWrapper>
        <ProductWrapper>
          <BodyHeader>Product Team</BodyHeader>
          <ProductTeamWrapper>
            <div>
              <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
              <Name>Ridwan “Baller” Lawal</Name>
              <Title>CEO/Founder</Title>
            </div>
            <div>
              <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
              <Name>Wobia Igwe</Name>
              <Title>CFO</Title>
            </div>
            <div>
              <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
              <Name>John “Baller” Doe</Name>
              <Title>Financial BlahBlahBlah</Title>
            </div>
            <div>
              <ProfileImg src="/images/aboutUsImg.png" alt="team1" />
              <Name>Micheal Ezeokoye</Name>
              <Title>CTO</Title>
            </div>
          </ProductTeamWrapper>
        </ProductWrapper> */}
          {/* <BottomContainer>
          <BottomText>Got a question?</BottomText>
          <Button small>Contact Us</Button>
        </BottomContainer> */}
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default About;
