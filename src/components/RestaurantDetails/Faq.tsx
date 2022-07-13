import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

import FaqSkeleton from '../Skeleton/FaqSkeleton';

const FaqGrid = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
`;

const FaqColumn = styled.div`
  float: left;
  width: 32%;
  height: 150px;
  padding: 5px;
  margin: 0 0 45px 0;
  @media (max-width: 1000px) {
    width: 45%;
    height: 122px;
  }
  @media (max-width: 500px) {
    width: 98%;
    height: auto;
  }
`;

const FaqQuestion = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #424242;
  margin: 0 0 6px 0;
`;

const FaqAnswer = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  margin: 0;
`;

const RESTAURANT_FAQ_QUERY = gql`
  query findFAQ($data: QueryFAQInput!) {
    findFAQ(data: $data) {
      _id
      restaurantId
      question
      answer
      meta {
        active
        createdAt
        activatedAt
        deactivatedAt
        updatedAt
      }
    }
  }
`;

const Faq = (props) => {
  const restaurant = props.data;
  const restaurantId = restaurant._id;

  const { loading, error, data } = useQuery(RESTAURANT_FAQ_QUERY, {
    variables: {
      data: {
        restaurantId: restaurantId,
      },
    },
  });

  if (loading) return <FaqSkeleton />;
  if (error) return <FaqSkeleton />;

  return (
    <>
      {data.findFAQ.length > 0 ? (
        <FaqGrid>
          {data &&
            data.findFAQ.map((faq) => (
              <FaqColumn key={faq._id}>
                <FaqQuestion>{faq.question}</FaqQuestion>
                <FaqAnswer>{faq.answer}</FaqAnswer>
              </FaqColumn>
            ))}
        </FaqGrid>
      ) : (
        <div>
          <h1>
            No FAQ at the moment <br /> Please check back later
          </h1>
        </div>
      )}
    </>
  );
};

export default Faq;
