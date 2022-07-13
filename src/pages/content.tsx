import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { BiChevronsRight } from 'react-icons/bi';

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
  background: rgba(255, 153, 22, 0.03);
  margin: 0 20px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto 30px auto;
  padding: 20px 0 40px 0;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BodyWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
  width: 75%;
  height: 100vh;
  overflow: scroll;
  scroll-behavior: smooth;
  margin-right: 50px;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;
    padding: 0 20px;
  }
`;

const Right = styled.div`
  width: 15%;
  display: block;
  @media (max-width: 800px) {
    display: none;
    width: 100%;
    margin: 0;
    text-align: left;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #212121;
    cursor: pointer;
    &:hover {
      color: #0055ff;
    }
  }
`;
const More = styled.p`
  width: 15%;
  margin: 47px 0 0 0;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    text-align: left;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #0055ff;
    cursor: pointer;
    &:hover {
      color: #0055ff;
    }
  }
`;

const BodyHeader = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  text-transform: capitalize;
  text-align: center;
  line-height: 100%;
  color: #343434;

  @media (max-width: 900px) {
    text-align: center !important;
  }

  @media (max-width: 800px) {
    display: none;
  }

  margin: 0 0 24px 0;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Typography = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  word-break: break-all;
  font-size: 16px;
  line-height: 170%;
  color: #000000;
  text-align: left !important;
  margin: 0 0 42px 0;
`;

const SubHeader = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 170%;
  text-align: left;
  color: #000000;
  margin: 0px;
  @media (max-width: 800px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const MobileContentNav = styled.div`
  display: none;
  transition: all 0.3s ease-in-out;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 30px 10px;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #212121;
    cursor: pointer;
    margin: 0 10px;
    &:hover {
      color: #0055ff;
    }
    @media (max-width: 500px) {
      margin: 0 2px;
      text-align: center;
      font-size: small;
    }
    @media (max-width: 380px) {
      margin: 0 1px;
    }
  }
`;

const Content = () => {
  return (
    <>
      <Hero>
        <HeroImage src="/termImg.png" />
      </Hero>
      <Wrapper>
        {/* <Nav /> */}
        <MainWrapper>
          <MobileContentNav>
            <p>
              <a href="#ourTeam">Our team</a>
            </p>
            <BiChevronsRight />
            <p>
              <a href="#legalSupport">Legal support</a>
            </p>
            <BiChevronsRight />
            <p>
              <a href="#more"> More about Hightable</a>
            </p>
          </MobileContentNav>
          <BodyHeader>HighTable's content integrity</BodyHeader>
          <InnerWrapper>
            <BodyWrapper>
              <SubHeader id="ourTeam">Our team</SubHeader>
              <Typography>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam,eaque ipsa quae
                <br />
                <br /> ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima
                <br />
                <br /> veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain
                to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue pleasure rationally <br />
                <br />
                encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in
                which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever one
                who avoids a pain that produces no resultant pleasure? <br />
                <br /> <SubHeader id="legalSupport">Legal support</SubHeader>
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                <br />
                <br /> veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain
                to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue pleasure rationally <br />
                <br />
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how
                all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally <br />
                <br />
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how
                all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great explorer of the truth, the
                master-builder of
                <br /> <br />
                <SubHeader id="more">More about Hightable</SubHeader>
                human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                because those who do not know how to pursue pleasure rationally
              </Typography>
              <More>
                <Link href="#">
                  <p>https://loremipsum.com</p>
                </Link>
                <Link href="#">
                  <p>https://loremipsum.com</p>
                </Link>
                <Link href="#">
                  <p>https://loremipsum.com</p>
                </Link>
              </More>
            </BodyWrapper>
            <Right>
              <p>
                <a href="#ourTeam">Our team</a>
              </p>
              <p>
                <a href="#legalSupport">Legal support</a>
              </p>
              <p>
                <a href="#more"> More about Hightable</a>
              </p>
            </Right>
          </InnerWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default Content;
