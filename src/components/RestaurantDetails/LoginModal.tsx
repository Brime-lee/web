import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';
import { gqlResponder } from 'storejars-react-toolkit';
import Bugsnag from '@bugsnag/js';
import { GiCancel } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import Button from '../Button';
import styles from '../../styles/signup.module.css';
import { AUTH_TOKEN, USER_DATA } from '../constants';

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

const InnerContainer = styled.div`
  margin: auto;
  width: 454px;
  border-radius: 4px;
  background: #f8f8f8;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const LoginLogo = styled.img`
  margin: 0 0 32px 0;
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
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const LoginEmail = styled(FilteredPropsInputField)`
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

const LoginPassword = styled(FilteredPropsInputField)`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 13px;
  margin: 0 0 10px 0;
  background-image: url('/eyeOff.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 97%;
  transition: 0.3s;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    background-image: none;
    border: 1px solid #ff9916;
    outline: none;
  }
  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid rgba(0, 66, 105, 0.28);
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

const ForgotPassword = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  margin: 0 0 0 auto;
  color: #402b2b;
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

const HrContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

const Or = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #c2c2c2;
  margin: 0;
`;

const AltLogin = styled.button`
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
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const AltText = styled.p<AltTextProps>`
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
  text-align: ${({ center }) => center && 'center'};
  @media (max-width: 325px) {
    text-align: center !important;
  }import { useState } from 'react';
`;

const LinkLoginFooter = styled.a`
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
    margin: 0 0 0 10px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #96969880;
  backdrop-filter: blur(4px);
  z-index: 200;
  transition: 3s;
`;

const logInSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
  password: Yup.string().required('password is required').min(6, 'Password should be 6 characters min'),
});

const initialValues = {
  email: '',
  password: '',
};

const LOGIN_MUTATION = gql`
  mutation LogInCustomer($email: String!, $password: String!) {
    loginCustomer(data: { email: $email, password: $password }) {
      jwt
      expires
    }
  }
`;

const Login = (props) => {
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  //Allows us to close the modal upon pressing the 'Esc' button.
  function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  if (typeof window !== 'undefined') {
    const [logInCustomer, { loading, data, error, reset }] = useMutation(LOGIN_MUTATION, {
      variables: initialValues,
      onCompleted: ({ loginCustomer }) => {
        localStorage.setItem(AUTH_TOKEN, loginCustomer.jwt);
        localStorage.setItem(USER_DATA, JSON.stringify(loginCustomer));
        props.onClose();
      },
      onError: (error) => {},
    });

    let errorMessage: string | undefined;
    if (error) {
      if (error.networkError && !window.navigator.onLine) {
        errorMessage = 'Sorry your browser is offline';
      } else if (error.graphQLErrors) {
        errorMessage = "Sorry, we couldn't find an account with that email and password";
      }
    }

    if (!props.modal) {
      return null;
    }

    return (
      <ModalOverlay
        onClick={() => {
          props.onClose();
        }}
      >
        <InnerContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.innerContainer}
        >
          <AiOutlineClose className={styles.modalClose} onClick={props.onClose} />
          <Link href="/">
            <LoginLogo src="/images/logo.png" alt="Logo" />
          </Link>{' '}
          <TopText>Log on to your HighTable</TopText>
          <Formik
            initialValues={initialValues}
            validationSchema={logInSchema}
            onSubmit={(values, actions) => {
              setDisable(false);
              logInCustomer({ variables: values });
              const timeOut = setTimeout(() => {
                actions.setSubmitting(false);
                clearTimeout(timeOut);
              }, 3000);
            }}
          >
            {({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => {
              return (
                <Form style={{ width: '100%' }}>
                  <div style={{ margin: '0 0 25px 0' }}>
                    <LoginEmail
                      placeholder=" Enter email address"
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
                  <div>
                    <LoginPassword
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
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '2px 4px',
                    }}
                  >
                    <ErrorMessage name="password" component="span" className={styles.error} />
                    <ForgotPassword href="/forgotpassword">Forgot password?</ForgotPassword>
                  </div>
                  {error && (
                    <ErrorContainer active={disable ? false : true}>
                      <GiCancel
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
                  <Button type="submit" disabled={isSubmitting}>
                    {loading ? `Logging in...` : `Log in`}
                  </Button>
                </Form>
              );
            }}
          </Formik>
          {/* <HrContainer>
              <hr style={{ width: '100%', color: '#c2c2c2', margin: '0' }} />
              <Or>OR</Or>
              <hr style={{ width: '100%', color: '#c2c2c2', margin: '0' }} />
            </HrContainer>
            <AltLogin>
              <AltImg src="/images/googleIcon.png" alt="google" />
              <AltText primary={false}>Continue with Google</AltText>
            </AltLogin>
            <AltLogin>
              <AltImg src="/images/fbLoginIcon.png" alt="facebook" />
              <AltText primary>Continue with Facebook</AltText>
            </AltLogin> */}
          <BottomContainer>
            <SigupText primary={false}>
              <SigupLink href="/signup">Sign up here</SigupLink>,{' '}
              <span style={{ color: '#666670' }}>If you don’t have an account</span>
            </SigupText>
            <SigupText center primary>
              Signing up, confirms that you’ve read and agreed to HighTable’s{' '}
              <span style={{ color: '#FF9916' }}>
                <a href="/terms">Terms of Use</a>
              </span>{' '}
              and{' '}
              <span style={{ color: '#FF9916' }}>
                <a href="/privacy">Privacy and Policy Statement.</a>
              </span>
            </SigupText>
          </BottomContainer>
        </InnerContainer>
      </ModalOverlay>
    );
  } else {
    return <> Something went wrong </>;
  }
};

export default Login;
