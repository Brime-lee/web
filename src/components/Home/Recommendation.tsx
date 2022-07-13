import React, { useState } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { RESTAURANTS_LIST_QUERY } from '../../graphQL/queries';
import CardRec from './CardRec';
import router from 'next/router';

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 100px auto;
`;

const RecHeaderContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RecHeader = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 100%;
  padding: 0 8px;
  color: #343434;
  margin: 0;

  @media (max-width: 650px) {
    font-size: 42px;
  }

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

const RecHyphen = styled.hr`
  margin: 0 5px;
  width: 50%;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 1050px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const RecSecondaryTitle = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  padding: 0 10px;
  color: #343434;
  margin: 8px 0 32px 0;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const RecRow = styled.div`
  background-color: #ffffff;
  width: 100%;

  &:after {
    background-color: #ffffff;
    content: '';
    display: table;
    clear: both;
  }
`;

const RecIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const RecButtonText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #0f264c;
`;

const RecButton = styled.button`
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 42px auto;
  width: 166px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Recommendation = () => {
  const [visible, setVisible] = useState(15);
  const { loading, data, error } = useQuery(RESTAURANTS_LIST_QUERY);

  const showMore = () => {
    setVisible(visible + 15);
  };

  const showLess = () => {
    setVisible(15);
    router.push('#restaurants');
  };
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Hightable Recommendations</RecHeader>
          <RecHyphen />
        </RecHeaderContainer>
        <RecSecondaryTitle> Great Experiences outside your home</RecSecondaryTitle>
        <RecRow id="restaurants">
          <CardRec visible={visible} data={data} loading={loading} error={error} />
        </RecRow>
        {visible >= data?.findRestaurants.length ? (
          <RecButton onClick={showLess}>
            <FaArrowRight />
            <RecButtonText>See less</RecButtonText>
          </RecButton>
        ) : (
          <RecButton onClick={showMore}>
            <FaArrowLeft />
            <RecButtonText>See more</RecButtonText>
          </RecButton>
        )}
      </MainWrapper>
    </div>
  );
};

export default Recommendation;
