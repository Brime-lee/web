import React, { useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import { gqlResponder } from 'storejars-react-toolkit';
import Bugsnag from '@bugsnag/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GiCancel } from 'react-icons/gi';

import styles from '../../styles/signup.module.css';
import Button from '../Button';

interface ErrorProps {
  active?: boolean;
}

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

const MainContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Left = styled.div`
  width: 70%;
  background: #0f264c;
  padding: 112px 200px 77px 30px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 74px 0px 74px 10px;
  }
`;

const LeftText = styled.h1`
  margin: 0;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 140%;
  color: #ffffff;

  @media (max-width: 1000px) {
    font-size: 60px;
  }

  @media (max-width: 900px) {
    font-size: 60px;
  }

  @media (max-width: 600px) {
    font-size: 50px;
  }
`;

const Right = styled.div`
  background: #edf0fa;
  width: 713px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  padding: 90px 0px;
  border: 1px solid #bbc3c9;
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  top: -30px;
  right: 100px;

  @media (max-width: 1370px) {
    width: 613px;
    right: 30px;
  }

  @media (max-width: 1250px) {
    width: 445px;
    right: 30px;
    padding: 60px 0px;
  }

  @media (max-width: 900px) {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    border: none;
    border-radius: 0px;
  }
`;

const InnerContainer = styled.div`
  background: #edf0fa;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
  }
`;

const RightText = styled.p`
  margin: 0 0 24px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  color: #0f264c;
`;

const SubForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const LoginEmail = styled(FilteredPropsInputField)`
  width: 560px;
  font-style: normal;
  font-weight: 500;
  display: block;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 32, 51, 0.35);
  padding: 16px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 12px 0;

  @media (max-width: 1250px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 80%;
    padding: 16px 0 16px 13px;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 16px 0 16px 13px;
  }
`;

const ErrorContainer = styled.div<ErrorProps>`
  width: 560px;
  background-color: #ffbaba;
  padding: 10px;
  border-radius: 4px;
  margin: 0 0 15px 0;
  align-items: center;
  display: ${({ active }) => (active ? 'flex' : 'none')};

  @media (max-width: 1250px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  p {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    line-height: 24px;
    color: #d8000c;
    margin: 0 0 0 10px;
  }
`;

const SuccessAlert = styled.div<ErrorProps>`
  width: 560px;
  padding: 5px;
  background-color: #6dccb4b3;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

  @media (max-width: 1250px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  p {
    width: fit-content;
    margin-left: 10px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;

const Cancel = styled(GiCancel)`
  color: white;
  font-weight: bold;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

const SUBSCRIPTION_MUTATION = gql`
  mutation addToMailingList($email: String!) {
    addToMailingList(email: $email) {
      id
      email
      status
    }
  }
`;

const subscriptionSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
});

const initialValues = {
  email: '',
};

const Sub = () => {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);

  const [addToMailingList, { loading, data, error, reset }] = useMutation(SUBSCRIPTION_MUTATION, {
    variables: initialValues,
    onCompleted: ({ addToMailingList }) => {
      setSuccess(true);
    },
    onError: (error) => {},
  });

  return (
    <MainContainer>
      <Left>
        <LeftText>
          Subscribe To Our <br /> Newsletter
        </LeftText>
      </Left>
      <Right>
        <InnerContainer>
          <RightText>Join our mailing list</RightText>
          <Formik
            initialValues={initialValues}
            validationSchema={subscriptionSchema}
            onSubmit={(values, actions) => {
              addToMailingList({ variables: values });
              setDisable(false);
            }}
          >
            {({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => {
              return (
                <Form style={{ width: '100%' }}>
                  <div style={{ margin: '0 0 25px 0' }}>
                    <LoginEmail
                      type="email"
                      name="email"
                      id="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                    <ErrorMessage name="email" component="span" className={styles.error} />
                  </div>
                  {success && (
                    <SuccessAlert>
                      <Cancel
                        onClick={() => {
                          reset();
                          setSuccess(false);
                        }}
                      />
                      <p>Subscribed</p>
                    </SuccessAlert>
                  )}
                  {error && (
                    <ErrorContainer active={disable ? false : true}>
                      <Cancel
                        color="#d8000c"
                        className={styles.cancel}
                        onClick={() => {
                          reset();
                          setDisable(true);
                        }}
                      />
                      <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                    </ErrorContainer>
                  )}
                  <Button small type="submit" disabled={loading}>
                    {loading ? `subscribing...` : `Subscribe`}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </InnerContainer>
      </Right>
    </MainContainer>
  );
};

export default Sub;
