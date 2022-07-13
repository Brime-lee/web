import styled from 'styled-components';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import ToggleSlider from '../components/ToggleSlider';
import Radio from '../components/Radio';

const MainContainer = styled.div`
  display: flex;
`;

const RightFrame = styled.div`
  background-color: #fbfbfb;
  height: 100%;
  width: 100%;
`;

const RightContentTitle = styled.h3`
  position: relative;
  width: 100%;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: DM Serif Display;
  font-style: bold;
  font-weight: 600;
  line-height: 32.9px;
  font-size: 24px;
  margin-left: 32px;
  margin-top: 38px;
`;

const SettingItem = styled.div`
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 48px;
  margin-bottom: 40px;
`;

const TitleBox = styled.div`
  position: relative;
  display: flex;
  background: #bbc3c9;
  width: 100%;
  height: 25px;
  align-items: center;
`;

const Title = styled.span`
  padding: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 66, 105, 0.28);
  align-items: center;
`;

const ContentDescription = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const ContentTitle = styled.span`
    margin: 12px
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
`;

const Description = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
`;

const ToggleSliderWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
`;

const RadioButtonsWrapper = styled.div`
  padding: 8px;
`;

const NotificationSettings = () => {
  return (
    <MainContainer>
      <SideMenu />
      <RightFrame>
        <RightContentTitle> Notification Settings</RightContentTitle>
        <SettingItem>
          <TitleBox>
            <Title>Push Notification</Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> New followers </ContentTitle>
              <Description>Send notification</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Hightable recommendations </ContentTitle>
              <Description>Send me notification alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Direct Messages</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Messages from business owners</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Messages from business owners</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Comment replies</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Review Likes</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Review comments</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Food orders</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>New HT blog posts</ContentTitle>
              <Description> Notify me </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Confirmed reservations</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Confirmed Events</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>New deals and offers</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Promotions and services</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title> Push Notification </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Food orders</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
        </SettingItem>
      </RightFrame>
    </MainContainer>
  );
};

export default NotificationSettings;
