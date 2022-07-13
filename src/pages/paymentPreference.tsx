import styled from 'styled-components';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import Link from 'next/link';
// import Button from '../components/Button';

const MainFrame = styled.div`
  display: flex;
`;

const RightFrame = styled.div`
  background-color: #fbfbfb;
  height: 100%;
  width: 100%;
`;

const RightContentTitle = styled.div`
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
  grid-gap: 12px;
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 66, 105, 0.28);
  align-items: center;
`;

const ContentDescription = styled.div`
  #grid-column: 1;
  #grid-column: 1;
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ContentTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

const Description = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
`;

const EditIcon = styled.img`
  #grid-row: 1;
  #grid-column: 2;
  width: 19px;
  height: 19px;
  position: relative;
`;
const AddIcon = styled.img`
  grid-row: 1;
  grid-column: 2;
  width: 19px;
  height: 19px;
`;

const PaymentBanner = styled.div`
  margin: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 44px;
`;

const GreyText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  color: #bbc3c9;
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MasterCardLogo = styled.img`
  width: 55px;
  height: 33px;
`;

const VisaLogo = styled.img`
  width: 99px;
  height: 33px;
`;

const PaypalLogo = styled.img`
  width: 121px;
  height: 33px;
`;

const PaymentPreference = () => {
  return (
    <MainFrame>
      <SideMenu />
      <RightFrame>
        <RightContentTitle> Payment Preferences </RightContentTitle>
        <SettingItem>
          <TitleBox>
            <Title>Saved Payment Methods</Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>MasterCard</ContentTitle>
              <Description>5874</Description>
            </ContentDescription>
            <Link href="/billingDetails">
              <EditIcon src="/images/IconLibrary/pencil.png" alt="pencil icon"></EditIcon>
            </Link>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Visa</ContentTitle>
              <Description>5874</Description>
            </ContentDescription>
            <Link href="/billingDetails">
              <EditIcon src="/images/IconLibrary/pencil.png" alt="pencil icon"></EditIcon>
            </Link>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Paypal</ContentTitle>
              <Description>paypal@gmail.com</Description>
            </ContentDescription>
            <Link href="/billingDetails">
              <EditIcon src="/images/IconLibrary/pencil.png" alt="pencil icon"></EditIcon>
            </Link>
          </ContentBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title>Add Payment Methods </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Credit Card</ContentTitle>
              <Description>Add Credit Card Information</Description>
            </ContentDescription>
            <Link href="/billingDetails">
              <AddIcon src="/images/IconLibrary/add.png" alt="Add Icon"></AddIcon>
            </Link>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Paypal</ContentTitle>
              <Description>Add Paypal Account Information</Description>
            </ContentDescription>
            <AddIcon src="/images/IconLibrary/add.png" alt="Add Icon"></AddIcon>
          </ContentBox>
        </SettingItem>
        <PaymentBanner>
          <Box>
            <GreyText>Accepted Payment Methods</GreyText>
            <LogosContainer>
              <MasterCardLogo src="/images/IconLibrary/mastercard.png"></MasterCardLogo>
              <VisaLogo src="/images/IconLibrary/visa.png"></VisaLogo>
              <PaypalLogo src="/images/IconLibrary/paypal.png"></PaypalLogo>
            </LogosContainer>
          </Box>
        </PaymentBanner>
      </RightFrame>
    </MainFrame>
  );
};

export default PaymentPreference;
