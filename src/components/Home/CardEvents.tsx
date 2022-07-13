import styled from 'styled-components';

const EventsColumn = styled.div`
  float: left;
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 10px 10px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const EventsCard = styled.div`
  position: relative;
  background: #f8f8f8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  padding: 12px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const EventsTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const EventsSecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  width: 100%;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 140px;
  height: 32px;
  margin: 0 0 10px 0;
`;

const RightStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const EventsiewWord = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #1d1d1d;
  margin: 0;
`;

const EventsiewLeftWord = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  color: #0055ff;
  margin: 0;
  cursor: pointer;
`;

const EventsBottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #f8f8f8;
`;

const EventsBottomLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const EventsBottomRightText = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EventTypography = styled.h1`
  margin: 12px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #12121f;
  cursor: pointer;
`;

const LocationAddresstext = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color: #4b4b4b;
`;

const EventButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #0f264c;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #f8f8f8;
  margin: 18px 0;
  width: 200px;
  padding: 15px 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
`;

const FavTag = styled.img`
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 5;
  cursor: pointer;
`;

const EventButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  @media (max-width: 900px) {
    text-align: left;
  }
`;

const CardEvents = () => {
  return (
    <EventsColumn>
      <EventsCard>
        <FavTag src="/images/eventsFav.png" alt="eventsFav" />
        <EventsTopContainer>
          <StarContainer>
            <EventsSecondaryContainer>
              <EventsiewLeftWord>Danfo Biastro</EventsiewLeftWord>
              <EventsiewWord>Events</EventsiewWord>
            </EventsSecondaryContainer>
            <RightStar>
              <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
              <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
              <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
              <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
              <img style={{ width: '16px', height: '14' }} src="/images/star.png" alt="star" />
            </RightStar>
          </StarContainer>
          <EventsBottomRightText>2 Days ago</EventsBottomRightText>
        </EventsTopContainer>
        <CardImg src="/images/djSpinall.png" alt="djSpinall" />
        <EventTypography>DJ Spinall First Time in Lagos</EventTypography>
        <EventsBottomContainer>
          <EventsBottomLeft>
            <LikeContainer>
              <img style={{ marginRight: '8px' }} src="/images/eventsLocation.png" alt="eventsLocation" />
              <div>
                <LocationAddresstext style={{ marginRight: '4px' }}>Federal Palace Hotel</LocationAddresstext>
                <LocationAddresstext>Lagos, Nigeria</LocationAddresstext>
              </div>
            </LikeContainer>
          </EventsBottomLeft>
          <EventsBottomRightText>
            <CalendarContainer>
              <img style={{ marginRight: '8px' }} src="/images/eventsCalendar.png" alt="eventsCalendar" />
              <LocationAddresstext>06 Sept, 2021</LocationAddresstext>
            </CalendarContainer>
            <CalendarContainer style={{ marginTop: '8px' }}>
              <img style={{ marginRight: '8px' }} src="/images/eventsClock.png" alt="eventsClock" />
              <LocationAddresstext>10.00 PM</LocationAddresstext>
            </CalendarContainer>
          </EventsBottomRightText>
        </EventsBottomContainer>
        <EventButtonContainer>
          <EventButton>View event details</EventButton>
        </EventButtonContainer>
      </EventsCard>
    </EventsColumn>
  );
};

export default CardEvents;
