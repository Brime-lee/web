import styled from 'styled-components';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import Button from '../components/Button';

const MainContainer = styled.section`
  display: flex;
`;

const LeftContainer = styled.div`
  margin: 0px;
  padding: 0px;
`;

const RightContainer = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0px;
  padding: 0px;
`;

const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;

const ContentTitle = styled.h3`
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
`;

const ItemTitle = styled.div`
  position: relative;
  display: flex;
  background: #bbc3c9;
  width: 100%;
  height: 25px;
  align-items: center;
  margin: 30px 32px 4px 20px;
`;

const Title = styled.h4`
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 12px;
`;
const InputGrid = styled.div`
  display: grid;
  grid-gap: 12px;
  margin-left: 32px;
`;
const InputGroup = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const InputGroupLName = styled(InputGroup)`
  grid-column: 2;
  grid-row: 1;
`;

const InputLabel = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin-top: 20px;
  margin-bottom: 8px;
`;

const InputLabelFullWidth = styled(InputLabel)`
  margin-left: 32px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  width: 420px;
  height: 48px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
`;

const InputFullwidth = styled(Input)`
  width: 870px;
  margin-left: 32px;
`;

const ButtonContainer = styled.div`
  margin: 16px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const PaymentPreference = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <SideMenu />
      </LeftContainer>
      <RightContainer>
        <Content>
          <ContentTitle> Payment Preference </ContentTitle>
          <ItemTitle>
            <Title>Payment method</Title>
          </ItemTitle>
          <InputGrid>
            <InputGroup>
              <div>
                <InputLabel>First name</InputLabel>
                <Input />
              </div>
            </InputGroup>
            <InputGroupLName>
              <div>
                <InputLabel>Last name</InputLabel>
                <Input />
              </div>
            </InputGroupLName>
          </InputGrid>
          <InputLabelFullWidth> Credit Card Number</InputLabelFullWidth>
          <InputFullwidth />
          <InputGrid>
            <InputGroup>
              <div>
                <InputLabel>Card Expiry Date</InputLabel>
                <Input />
              </div>
            </InputGroup>
            <InputGroupLName>
              <div>
                <InputLabel>CVV</InputLabel>
                <Input />
              </div>
            </InputGroupLName>
          </InputGrid>
          <ItemTitle>
            <Title>Contact Address</Title>
          </ItemTitle>
          <InputGrid>
            <InputGroup>
              <div>
                <InputLabel>First Name</InputLabel>
                <Input />
              </div>
            </InputGroup>
            <InputGroupLName>
              <div>
                <InputLabel>Last Name</InputLabel>
                <Input />
              </div>
            </InputGroupLName>
          </InputGrid>
          <InputLabelFullWidth>Email</InputLabelFullWidth>
          <InputFullwidth />
          <ItemTitle>
            <Title>Contact Address</Title>
          </ItemTitle>
          <InputGrid>
            <InputGroup>
              <div>
                <InputLabel>Address</InputLabel>
                <Input />
              </div>
            </InputGroup>
            <InputGroupLName>
              <div>
                <InputLabel>Zip/Postal</InputLabel>
                <Input />
              </div>
            </InputGroupLName>
          </InputGrid>
          <InputLabelFullWidth>City</InputLabelFullWidth>
          <InputFullwidth />
          <InputLabelFullWidth>State</InputLabelFullWidth>
          <InputFullwidth />
          <InputLabelFullWidth>Country</InputLabelFullWidth>
          <InputFullwidth />
          <ButtonContainer>
            <Button small> Cancel </Button>
            <Button small> Confirm Update</Button>
          </ButtonContainer>
        </Content>
      </RightContainer>
    </MainContainer>
  );
};

export default PaymentPreference;
