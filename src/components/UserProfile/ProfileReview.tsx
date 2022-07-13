import React, { useState } from 'react';
import styled from 'styled-components';
import { BsShareFill } from 'react-icons/bs';
import LoginModal from '../RestaurantDetails/LoginModal';

// const Button = styled.button`
//   font-family: 'Arial Rounded MT';
//   width: 140px;
//   height: 40px;
//   color: #fff;
//   margin-left: 18px;
//   border: none;
//   box-sizing: border-box;
//   background: #0f264c;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 100%;
//   cursor: pointer;
//   outline: none;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
//   }
//   &:active {
//     transform: scale(0.98);
//     box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
//   }
//   &:disabled {
//     cursor: pointer;
//     background-color: rgb(163, 168, 173);
//     box-shadow: none;
//     color: rgb(255, 255, 255) !important;
//   }

//   @media (max-width: 300px) {
//     font-size: 12px;
//     width: 120px;
//     height: 38px;
//   }
// `;

const CardContainer = styled.div`
  padding: 0;
  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }
  @media (min-width: 500px) {
    height: 650px;
    overflow-y: scroll;
  }
`;

const FaqCard = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(78, 51, 0, 0.14);
  border-radius: 8px;
  margin: 10px 0 30px 0;

  @media (max-width: 980px) {
    width: 97%;
    margin: 10px auto 30px auto;
  }
`;

const FaqCardInner = styled.div`
  padding: 16px 30px 0 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 0 24px 0;
`;

const Picture = styled.img`
  margin: 0 16px 0 0;
  width: 55px;
  height: 55px;
  background: url(IMG_20200209_020520.jpg);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.35));
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DisplayName = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ff9916;
  margin: 0 0 4px 0;
`;

const QuestionTime = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 14px 0;
`;

const QuestionText = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(33, 33, 33, 0.9);
  margin: 0;
`;

const FaqBottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 50px;
  background: rgba(255, 244, 231, 0.8);
  border-radius: 0px 0px 5px 5px;
  @media (max-width: 960px) {
    padding: 10px 20px 10px 20px;
  }
`;

const TextInput = styled.input`
  width: 460px;
  height: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 32, 51, 0.35);
  padding: 16px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 840px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
  background: transparent;
  padding: 7.5px 12px;
  border: none;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(-1px);
  }
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 840px) {
    display: block;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const ProfileReview = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <CardContainer>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture3.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
        <FaqCard>
          <FaqCardInner>
            <Picture src="/images/faqPicture1.png" />
            <QuestionContainer>
              <DisplayName>@Guyman</DisplayName>
              <QuestionTime>Asked 20 minutes ago</QuestionTime>
              <QuestionText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </QuestionText>
            </QuestionContainer>
            <BsShareFill style={{ margin: '0 0 0 10px', cursor: 'pointer', fontSize: '40px' }} />
          </FaqCardInner>
          <FaqBottomDiv>
            <TextInput placeholder="Log-in or Sign up to answer question" type="text" name="text" />
            <SubmitButton>Submit Answer</SubmitButton>
          </FaqBottomDiv>
        </FaqCard>
      </CardContainer>
      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </div>
  );
};

export default ProfileReview;
