import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Bugsnag from '@bugsnag/js';
import { GiCancel } from 'react-icons/gi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Button from '../components/Button';
import styles from '../styles/signup.module.css';
import { gql, useMutation } from '@apollo/client';
import { AuthContext } from '../context/auth';
import { AUTH_TOKEN } from '../components/constants';
import { gqlResponder } from 'storejars-react-toolkit';
// import sSignUp from '../../public/sSignUp.jpeg';

interface AltTextProps {
  primary?: boolean;
}
interface ErrorProps {
  active?: boolean;
}

interface SignupTextProps {
  primary?: boolean;
  center?: boolean;
}

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

const MainContainer = styled.section`
  display: flex;
  background: #f8f8f8;
  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  position: relative;
  width: 480px;
  // height: 1010px;
  @media (max-width: 1000px) {
    display: none;
  }
  // @media (max-width: 500px) {
  //   display: block;
  //   width: 100%;
  //   height: 420px;
  // }
`;

const MobImage = styled.img`
  width: 480px;
  height: 860px;
  object-fit: cover;
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

const Right = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 480px);
  background: #f8f8f8;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const InnerContainer = styled.div`
  margin: 0px auto 24px auto;
  width: 454px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LoginLogo = styled.img`
  margin: 0 0 24px 0;
  cursor: pointer;
`;

const TopText = styled.p`
  margin: 0 0 48px 0;
  width: 100%;
  text-align: center !important;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #402b2b;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const SignupName = styled(FilteredPropsInputField)`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  height: 48px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 4px 0;
  padding: 0 13px;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid #ff9916;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgba(0, 66, 105, 0.28);

      &:focus,
      &:active {
        border: 1px solid rgba(0, 66, 105, 0.28);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgba(0, 66, 105, 0.28);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ee4d47;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid #ee4d47;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #ee4d47;
      }
    `}
`;

const SignupEmail = styled(FilteredPropsInputField)`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 4px 0;
  padding: 0 13px;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid #ff9916;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgba(0, 66, 105, 0.28);

      &:focus,
      &:active {
        border: 1px solid rgba(0, 66, 105, 0.28);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgba(0, 66, 105, 0.28);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ee4d47;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid #ee4d47;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #ee4d47;
      }
    `}
`;

const SignupPassword = styled(FilteredPropsInputField)`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #282828a3;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 13px;
  margin: 0 0 4px 0;

  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }

  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid #ff9916;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgba(0, 66, 105, 0.28);

      &:focus,
      &:active {
        border: 1px solid rgba(0, 66, 105, 0.28);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgba(0, 66, 105, 0.28);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ee4d47;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid #ee4d47;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #ee4d47;
      }
    `}
`;

const HrContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

const Or = styled.p`
  font-family: montserrat;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #c2c2c2;
  margin: 0;
`;

const AltLogin = styled.button`
  font-family: montserrat;
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  background: transparent;
  border-radius: 8px;
  padding: 0 24px;
  cursor: pointer;
  border: 1px solid #091c2e;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 24px 0;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const AltText = styled.p<AltTextProps>`
  font-family: montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 48px;
  margin: 0;
  color: ${({ primary }) => (primary ? '#3B5998' : '#402b2b')};

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const AltImg = styled.img`
  margin: 0 20px 0 80px;
  @media (max-width: 500px) {
    margin: 0 20px 0 40px;
  }
  @media (max-width: 325px) {
    margin: 0 8px 0 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0 0;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

const SigupText = styled.p<SignupTextProps>`
  font-style: normal;
  margin: 7.5px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ primary }) => (primary ? '#666670' : '#000000')};
  text-align: ${({ center }) => (center ? 'center' : 'center')};
  @media (max-width: 325px) {
    text-align: center !important;
  }
`;

const SignupFooter = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid #bbc3c9;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftFooterText = styled.p`
  font-family: montserrat;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #0f264c;
  margin: 0;
  @media (max-width: 1000px) {
    margin: 0 0 16px 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const RightFooterTextTwo = styled.p`
  font-weight: normal;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  color: #0f264c;
  margin: 0;
  display: none;
  @media (max-width: 500px) {
    margin-top: 10px;
    display: block;
  }
`;

const RightFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkSignupFooter = styled.a`
  font-family: montserrat;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #0f264c;
  @media (max-width: 1000px) {
    margin: 0 10px 0 0;
  }
  @media (max-width: 500px) {
    margin: 0 0 4px 0;
  }
`;

const WelcomeContainer = styled.div`
  position: absolute;
  top: 456px;
  left: 16px;
  @media (max-width: 500px) {
    top: 252px;
    left: 15px;
    display: none;
  }
`;

const LeftText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;
  color: #ff9916;
  margin: 0;
`;

const LeftTextTwo = styled.p`
  font-family: montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #f8f8f8;
  margin: 0;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

const MainText = styled.h3`
  display: none;
  @media (max-width: 500px) {
    display: block;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 24px;
    color: #ff9916;
    margin: 0 0 40px 0;
  }
`;

const SigupLink = styled.a`
  display: inline-block;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SignupInnerContainer = styled.div`
  width: 49%;
  margin: 0 0 24px 0;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Required = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  color: #1517196b;
  margin: 0;
  text-align: left !important;
  text-transform: uppercase;
`;

const RequiredContainer = styled.div`
  background: #6dccb4b3;
  padding: 2px;
  margin: 0 0 8px 0;
`;

const EyeInvisible = styled(AiOutlineEyeInvisible)`
  margin-left: -40px;
  margin-bottom: -7px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-size: 24px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

const EyeVisible = styled(AiOutlineEye)`
  margin-left: -40px;
  margin-bottom: -7px;
  position: relative;
  font-size: 24px;
  z-index: 2;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

const ErrorContainer = styled.div<ErrorProps>`
  width: 100%;
  background-color: #ffbaba;
  padding: 10px;
  margin: 0 0 10px 0;
  border-radius: 4px;
  margin: 30px 0 -20px 0;
  align-items: center;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  p {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #d8000c;
    margin: 0 0 0 20px;
  }
`;

// const telephoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const usernameRegex = /^(?=[a-zA-Z0-9._]{2,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
const usernameRegex = /^(?=.{2,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+$/;

const signInSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  email: Yup.string().email().required('email is required'),
  username: Yup.string().required('username is required').matches(usernameRegex, 'username is invalid'),
  // telephone: Yup.string()
  //   .required('phone number is required')
  //   .matches(telephoneRegExp, 'Phone number is not valid')
  //   .min(10, 'length must be at least 10 characters long'),
  password: Yup.string().required('password is required').min(6, 'Password should be 6 characters min'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
};

const SIGNUP_MUTATION = gql`
  mutation CreateCustomer(
    $email: String!
    $username: String!
    $lastName: String!
    $firstName: String!
    $password: String!
  ) {
    createCustomer(
      data: { email: $email, lastName: $lastName, firstName: $firstName, password: $password, username: $username }
    ) {
      customer {
        _id
        email
        firstName
        lastName
      }
      otp {
        userId
        expiresAt
        meta {
          active
          createdAt
        }
      }
      token {
        jwt
        expires
      }
    }
  }
`;

const Signup = () => {
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem('key');
  }, []);

  const context = useContext(AuthContext);

  const router = useRouter();
  const dispatch = useDispatch();

  if (typeof window !== 'undefined') {
    const [createCustomer, { loading, data, error, reset }] = useMutation(SIGNUP_MUTATION, {
      variables: initialValues,
      onCompleted: ({ createCustomer }) => {
        localStorage.setItem(AUTH_TOKEN, createCustomer.token.jwt);
        localStorage.setItem(data, JSON.stringify(createCustomer));

        router.push('/signupsteps');
      },
      onError: (error) => {},
    });

    return (
      <MainContainer>
        <Left>
          <Image src="./sSignUp.jpeg" width={480} height={860} objectFit="cover" />
        </Left>
        <Right>
          <InnerContainer>
            <Link href="/">
              <LoginLogo src="/images/logo.png" alt="Logo" />
            </Link>
            <MainText> Hello there! </MainText>
            <TopText>Join Hightable</TopText>
            <RequiredContainer>
              <Required>All fields are required to sign up</Required>
            </RequiredContainer>
            <Formik
              initialValues={initialValues}
              validationSchema={signInSchema}
              onSubmit={(values, actions) => {
                setDisable(false);
                createCustomer({ variables: values });
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form style={{ width: '100%' }}>
                    <NameContainer>
                      <SignupInnerContainer>
                        <SignupName
                          type="text"
                          placeholder="First name"
                          name="firstName"
                          id="firstName"
                          autoCapitalize="off"
                          autoCorrect="off"
                          valid={touched.firstName && !errors.firstName}
                          error={touched.firstName && errors.firstName}
                        />
                        <ErrorMessage name="firstName" component="span" className={styles.error} />
                      </SignupInnerContainer>
                      <SignupInnerContainer>
                        <SignupName
                          type="text"
                          placeholder="Last name"
                          name="lastName"
                          id="lastName"
                          autoCapitalize="off"
                          autoCorrect="off"
                          valid={touched.lastName && !errors.lastName}
                          error={touched.lastName && errors.lastName}
                        />
                        <ErrorMessage name="lastName" component="span" className={styles.error} />
                      </SignupInnerContainer>
                    </NameContainer>

                    <div style={{ margin: '0 0 24px 0' }}>
                      <SignupEmail
                        placeholder=" Enter email address"
                        type="email"
                        name="email"
                        id="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        valid={touched.email && !errors.email}
                        error={touched.email && errors.email}
                      />
                      <ErrorMessage name="email" component="span" className={styles.error} />
                    </div>
                    <div style={{ margin: '0 0 24px 0' }}>
                      <SignupEmail
                        placeholder=" Enter your username"
                        type="username"
                        name="username"
                        id="username"
                        autoCapitalize="off"
                        autoCorrect="off"
                        valid={touched.username && !errors.username}
                        error={touched.username && errors.username}
                      />
                      <ErrorMessage name="username" component="span" className={styles.error} />
                    </div>
                    <div style={{ margin: '0 ' }}>
                      <SignupPassword
                        type={show ? 'text' : 'password'}
                        name="password"
                        id="password"
                        autoCapitalize="off"
                        autoCorrect="off"
                        valid={touched.password && !errors.password}
                        error={touched.password && errors.password}
                        placeholder="Enter your Password"
                      />
                      {show ? (
                        <EyeInvisible onClick={() => setShow(false)} />
                      ) : (
                        <EyeVisible onClick={() => setShow(true)} />
                      )}
                      <ErrorMessage name="password" component="span" className={styles.error} />
                    </div>
                    {error && (
                      <ErrorContainer active={disable ? false : true}>
                        <GiCancel
                          color="#d8000c"
                          onClick={() => {
                            reset();
                            setDisable(true);
                          }}
                        />
                        <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                      </ErrorContainer>
                    )}
                    <Button type="submit" disabled={loading}>
                      {loading ? 'Loading...' : 'Join HighTable'}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
            {/* <HrContainer>
              <hr style={{ width: '100%', color: '#c2c2c2', margin: '0' }} />
              <Or>OR</Or>
              <hr style={{ width: '100%', color: '#c2c2c2', margin: '0' }} />
            </HrContainer> */}
            {/* <AltLogin>
              <AltImg src="/images/googleIcon.png" alt="google" />
              <AltText primary={false}>Continue with Google</AltText>
            </AltLogin> */}
            {/* <AltLogin>
              <AltImg src="/images/fbLoginIcon.png" alt="facebook" />
              <AltText primary>Continue with Facebook</AltText>
            </AltLogin> */}
            <BottomContainer>
              <SigupText primary={false}>
                <SigupLink href="/login">Sign in here</SigupLink>,{' '}
                <span style={{ color: '#666670' }}>If you already have an account</span>
              </SigupText>
              <SigupText center primary>
                Signing up, confirms that you’ve read and agreed to HighTable’s{' '}
                {/* <span style={{ color: '#FF9916' }}>
                  <a href="/terms-of-use">Terms of Use</a>
                </span>{' '}
                and{' '}
                <span style={{ color: '#FF9916' }}>
                  <a href="/privacy-and-cookies-statement">Privacy and Policy Statement.</a>
                </span> */}
              </SigupText>
            </BottomContainer>
          </InnerContainer>
          <SignupFooter>
            <LeftFooterText>© 2021 HighTable, LLC All Rights Reserved</LeftFooterText>
            <RightFooterContainer>
              <LinkSignupFooter href="/terms-of-use">Terms of Service</LinkSignupFooter>
              <LinkSignupFooter href="/promo">Promo T&Cs</LinkSignupFooter>
              <LinkSignupFooter href="/privacy-and-cookies-statement">Privacy Policy</LinkSignupFooter>
              <LinkSignupFooter href="/info">Do Not Sell My Information</LinkSignupFooter>
            </RightFooterContainer>
            <RightFooterTextTwo>© 2021 HighTable, LLC All Rights Reserved</RightFooterTextTwo>
          </SignupFooter>
        </Right>
      </MainContainer>
    );
  } else {
    return <> An error occured</>;
  }
};

export default Signup;
