import styled from 'styled-components';

const ImgContainer = styled.div`
  cursor: pointer;
  margin: 0 24px 0 0;
  border-radius: 8px;
  position: relative;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  width: 240px;
  height: 270px;
  cursor: pointer;
  border-radius: 8px;
`;

const CaptionContainer = styled.div`
  width: 240px;
  height: 60px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(100px);
  position: absolute;
  bottom: 3px;
  left: 0;
  border-radius: 0 0 8px 8px;
`;

const Caption = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 10px 0 4px 10px;
`;

const CaptionTwo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  margin: 0 0 10px 10px;
`;

const CardInfluencer = () => {
  return (
    <>
      <ImgContainer>
        <Img src="/images/influencer1.png" alt="influencer1" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer2.png" alt="influencer2" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer3.png" alt="influencer3" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer4.png" alt="influencer4" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer3.png" alt="influencer3" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer2.png" alt="influencer2" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer1.png" alt="influencer1" />
        <CaptionContainer>
          <Caption>@Felab2</Caption>
          <CaptionTwo>12k followers</CaptionTwo>
        </CaptionContainer>
      </ImgContainer>
      <ImgContainer>
        <Img src="/images/influencer4.png" alt="influencer4" />
      </ImgContainer>
    </>
  );
};

export default CardInfluencer;
