import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const aboutHighTable = [
  {
    title: 'About Us',
    link: '/about',
    id: 1,
  },
  // {
  //   title: 'Resources and Policies',
  //   link: '/resources',
  //   id: 2,
  // },
  // {
  //   title: 'Careers',
  //   link: '/careers',
  //   id: 3,
  // },
  // {
  //   title: 'Investor Relations',
  //   link: '/investors',
  //   id: 4,
  // },
  {
    title: 'Content Integrity',
    link: '/content',
    id: 5,
  },
  {
    title: 'Terms of Use',
    link: '/terms-of-use',
    id: 6,
  },
  {
    title: 'Privacy and Cookies Statement',
    link: '/privacy-and-cookies-statement',
    id: 7,
  },
  {
    title: 'How the site works',
    link: '/how',
    id: 8,
  },
];
const explore = [
  // {
  //   title: 'Write a review',
  //   link: '/review',
  //   id: 1,
  // },
  {
    title: 'Join Our Community',
    link: '/community',
    id: 2,
  },
  // {
  //   title: 'Blog',
  //   link: '/blog',
  //   id: 3,
  // },
  {
    title: 'Help Center',
    link: '/contact',
    id: 4,
  },
  // {
  //   title: 'Advertise with Us',
  //   link: '/advert',
  //   id: 5,
  // },
  // {
  //   title: 'Sponsored Placements',
  //   link: '/sponsors',
  //   id: 6,
  // },
];
const getTheApp = [
  {
    title: 'IOS App',
    link: '/ios',
    id: 1,
  },
  {
    title: 'Android App',
    link: '/android',
    id: 2,
  },
];

const contries = [
  {
    title: 'Ghana',
  },
  {
    title: 'Kenya',
  },
  {
    title: 'Nigeria',
  },
  {
    title: 'South Africa',
  },
];
const currencies = [
  {
    title: 'GHC',
  },
  {
    title: 'KES',
  },
  {
    title: 'NGN',
  },
  {
    title: 'ZAR',
  },
];

const FooterContainer = styled.section`
  width: 100%;
  background: #000000;
  padding: 20px;
`;

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RightDiv = styled.div`
  color: #fff4e7;
  padding: 20px 5px;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AboutHighTable = styled.div`
  margin-right: 50px;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MainWrapper>
        <FooterWrapper>
          <LeftDiv>
            <div className={styles.innerLeftDiv}>
              <AboutHighTable>
                <h4 className={styles.title}>About Hightable</h4>
                {aboutHighTable.map((item) => (
                  <div key={item.id}>
                    <a className={styles.links} href={item.link}>
                      {item.title}
                    </a>
                  </div>
                ))}
              </AboutHighTable>
              <AboutHighTable>
                <h4 className={styles.title}>Explore</h4>
                {explore.map((item) => (
                  <div key={item.id}>
                    <a className={styles.links} href={item.link}>
                      {item.title}
                    </a>
                  </div>
                ))}
              </AboutHighTable>
            </div>
            {/* <AboutHighTable className={styles.getAppContainer}>
              <h4 className={styles.title}>Get The App</h4>
              {getTheApp.map((item) => (
                <div key={item.id}>
                  <a className={styles.links} href={item.link}>
                    {item.title}
                  </a>
                </div>
              ))}
            </AboutHighTable> */}
          </LeftDiv>
          <RightDiv>
            <LocationContainer>
              <select className={styles.footerLocationLeft} name="select">
                {currencies.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              <select className={styles.footerLocationRight} name="select">
                {contries.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </LocationContainer>
            <SocialContainer>
              <a href="http://facebook.com/hightable_africa" target="_blank">
                <img className={styles.footerSocial} src="/images/fbicon.png" alt="fb" width={42} height={42} />
              </a>
              <a href="https://www.instagram.com/hightable.africa/" target="_blank">
                <img
                  className={styles.footerSocial}
                  src="/images/instagram3.png"
                  alt="instagram"
                  width={42}
                  height={42}
                />
              </a>
              <a href="http://twitter.com/hightableafrica" target="_blank">
                <img
                  className={styles.footerSocial}
                  src="/images/twittericon.png"
                  alt="twitter"
                  width={42}
                  height={42}
                />
              </a>
              <a href="http://linkedin.com/company/hightable-africa" target="_blank">
                <img
                  className={styles.footerSocial}
                  src="/images/likedinicon.png"
                  alt="linkedin"
                  width={42}
                  height={42}
                />
              </a>
              {/* <img className={styles.footerSocial} src="/images/youtube3.png" alt="youtube" width={42} height={42} /> */}
            </SocialContainer>
          </RightDiv>
        </FooterWrapper>
        <div className={styles.footerLogoContainer}>
          <Image className={styles.footerLogo} src="/images/logoWhite.png" alt="logo" width={206} height={52} />
          <p className={styles.footerComment}>© {new Date().getFullYear()} HighTable LLC All rights reserved.</p>
        </div>
      </MainWrapper>
    </FooterContainer>
  );
};

export default Footer;
