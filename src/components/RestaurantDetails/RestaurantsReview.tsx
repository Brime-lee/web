import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import ProgressBar from '../ProgressBar';
import { gql, useMutation, useQuery } from '@apollo/client';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaStar } from 'react-icons/fa';
import ReviewCard from './ReviewCard';
import Router from 'next/router';
import { AUTH_TOKEN } from './../constants';
import LoginModal from './LoginModal';

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} as="textarea" />;
}

const Button = styled.button`
  font-family: 'Arial Rounded MT';
  width: 140px;
  height: 40px;
  color: #fff;
  margin-left: 18px;
  border: none;
  box-sizing: border-box;
  background: #0f264c;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;
  }

  @media (max-width: 300px) {
    font-size: 12px;
    width: 120px;
    height: 38px;
  }
`;

const ReviewBtn = styled(Button)`
  background: #ff9916;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
  @media (max-width: 1040px) {
    margin-left: 0px;
  }
`;

const PhotoBtn = styled(Button)`
  background: #ff9916;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  border-radius: 8px;
  color: #000;
`;

const RatingHeader = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0 0 15px 0;
  @media (max-width: 840px) {
    text-align: center;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const CardContainer = styled.div`
  padding: 0 20px 0 0;
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

const ReviewBtnContainer = styled.div`
  @media (max-width: 1040px) {
    margin-top: 20px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormContainer = styled.div`
  margin: 12px;
`;

const ReviewInput = styled(FilteredPropsInputField)`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  height: 150px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 4px 0;
  padding: 13px;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
  color: black;
`;

const Rating = styled.div`
  cursor: pointer;
`;

const RatingsContainer = styled.div`
  margin-left: 8px;
  margin-bottom: 14px;
`;

const RatingsWrapper = styled.div`
  display: flex;
  margin: 6px;
`;

const WriteReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WriteReviewInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  margin-top: 8px;
`;

const reviewSchema = Yup.object().shape({
  body: Yup.string(),
});

const REVIEWS_QUERY = gql`
  query FindReviews($restaurantId: ID) {
    findReviews(data: { restaurantId: $restaurantId }) {
      restaurantId
      _id
      body
      rating
      likes
      user {
        _id
        email
        firstName
        lastName
      }
      meta {
        createdAt
        updatedAt
      }
    }
  }
`;

const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReview($body: String, $rating: Int!, $restaurantId: ID!) {
    createReview(data: { restaurantId: $restaurantId, body: $body, rating: $rating }) {
      _id
      restaurantId
      body
      rating
      likes
      meta {
        createdAt
        updatedAt
      }
    }
  }
`;

const RestaurantsReview = (props) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [rate, setRating] = useState(null);

  const restaurant = props.data.findRestaurantById;
  const restaurantId = restaurant._id;

  const [createReview, { loading, data, error }] = useMutation(CREATE_REVIEW_MUTATION, {
    variables: {
      body: '',
      rating: null,
      restaurantId: restaurantId,
    },
  });

  const {
    data: reviews,
    error: reviewsError,
    loading: reviewsLoading,
  } = useQuery(REVIEWS_QUERY, {
    variables: { restaurantId },
  });

  const authToken = localStorage.getItem(AUTH_TOKEN);

  if (reviewsLoading) return <div> Loading...</div>;
  return (
    <div>
      <RatingHeader>Average Ratings</RatingHeader>
      <RatingContainer>
        <div>
          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Excellent</div>
            <ProgressBar value={60} max={100} />
            <span style={{ marginLeft: '10px' }}>500</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Very Good</div>
            <ProgressBar value={80} max={100} />
            <span style={{ marginLeft: '10px' }}>700</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Average</div>
            <ProgressBar value={18} max={100} />
            <span style={{ marginLeft: '10px' }}>40</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Poor</div>
            <ProgressBar value={8} max={100} />
            <span style={{ marginLeft: '10px' }}>9</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={styles.progressText}>Terrible</div>
            <ProgressBar value={12} max={100} />
            <span style={{ marginLeft: '10px' }}>15</span>
          </div>
        </div>
        <ReviewBtnContainer className={styles.reviewPhotoBtn}>
          <ReviewBtn
            onClick={() => {
              authToken ? setShow(!show) : setModal(true);
            }}
          >
            {!show ? `Write a Review` : `Cancel`}
          </ReviewBtn>
          {/* <PhotoBtn>Post a Photo</PhotoBtn> */}
        </ReviewBtnContainer>
      </RatingContainer>

      {show && (
        <Formik
          initialValues={{
            body: '',
            rating: null,
            restaurantId: restaurantId,
          }}
          validationSchema={reviewSchema}
          onSubmit={async (values) => {
            const payload = { ...values, rating: parseInt(values.rating) };
            await createReview({ variables: payload });
            Router.reload();
          }}
        >
          {({ values }) => {
            return (
              <FormContainer>
                <Form style={{ width: '100%' }}>
                  <div style={{ margin: '0 0 25px 0' }}>
                    <ReviewInput
                      type="text"
                      name="body"
                      id="body"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder="Write a review"
                    />

                    <WriteReviewContainer>
                      <WriteReviewInnerContainer>
                        <RatingsWrapper>
                          <span>Rate your Experience</span>
                        </RatingsWrapper>
                        <RatingsWrapper>
                          {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;

                            return (
                              <RatingsContainer key={item}>
                                <label>
                                  <Field
                                    type="radio"
                                    name="rating"
                                    value={givenRating}
                                    onClick={() => {
                                      setRating(givenRating);
                                    }}
                                    style={{ display: 'none' }}
                                  />
                                  <Rating>
                                    <FaStar
                                      color={givenRating < rate || givenRating === rate ? 'orange' : 'rgb(192,192,192)'}
                                      size={24}
                                    />
                                  </Rating>
                                </label>
                              </RatingsContainer>
                            );
                          })}
                        </RatingsWrapper>
                      </WriteReviewInnerContainer>
                      <ButtonContainer>
                        <Button type="submit" disabled={loading} onClick={() => {}}>
                          {loading ? `Submitting...` : `Submit`}
                        </Button>
                      </ButtonContainer>
                    </WriteReviewContainer>
                  </div>
                </Form>
              </FormContainer>
            );
          }}
        </Formik>
      )}
      <CardContainer>
        {reviews.findReviews.map((review, index) => (
          <ReviewCard review={review} index={index} restData={restaurant} data={reviews} token={props.token} />
        ))}
      </CardContainer>
      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </div>
  );
};

export default RestaurantsReview;
