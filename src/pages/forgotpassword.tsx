import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MultiStepForm, Step } from 'react-multi-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { gqlResponder } from 'storejars-react-toolkit';
import Bugsnag from '@bugsnag/js';
import { GiCancel } from 'react-icons/gi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import dynamic from 'next/dynamic';

import Button from '../components/Button';
import styles from '../styles/signup.module.css';

const ReactPinField = dynamic(() => import('react-pin-field'), { ssr: false });
interface ErrorProps {
  active?: boolean;
}

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

const Container = styled.div`
  max-width: 700px;
  height: 100%;
  padding: 10px 40px;
  margin: 20px auto 0 auto;
  @media (max-width: 500px) {
    padding: 10px 50px;
  }
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #0f264c;
  margin: 20px 0 42px 0;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 20px;
    margin: 20px 0 24px 0;
  }
`;

const EmailContainer = styled.div`
  width: 80%;
  margin: 65px auto 32px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Step1Container = styled(EmailContainer)`
  margin: 65px auto 0 auto;
`;

const EmailImg = styled.img``;

const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0f264c;
  margin: 24px 0;
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const TopText = styled(Text)`
  font-size: 24px;
  margin: 24px 0 60px 0;
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

const NewInput = styled(ReactPinField)`
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 0px;
  text-align: center;
  width: 50px;
  margin: 0px 5px;
  height: 48px;
  &:focus {
    outline: none;
    border: 1px solid #ff9916;
  }
  @media (max-width: 500px) {
    margin: 0px 5px;
    width: 35px;
    height: 35px;
  }
  @media (max-width: 450px) {
    border-radius: 5px;
    margin: 0px 5px;
    width: 30px;
    height: 35px;
  }
  @media (max-width: 410px) {
    border-radius: 5px;
    margin: 0px 5px;
    width: 20px;
    height: 30px;
  }
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

const BtnContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const BottomText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #666670;
`;

const ResendLink = styled.button`
  cursor: pointer;
  display: inline-block;
  background: transparent;
  border: none;
  color: #000;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 0 0 32px 0;
  cursor: pointer;
`;

const FORGOT_PASSWORD_QUERY = gql`
  query customerPasswordReset($email: String!) {
    customerPasswordReset(email: $email) {
      _id
      email
      firstName
      lastName
    }
  }
`;

const RESET_PASSWORD_MUTATION = gql`
  mutation updateCustomerPassword($code: Int!, $password: String!) {
    updateCustomerPassword(data: { code: $code, password: $password }) {
      _id
      email
      firstName
      lastName
    }
  }
`;

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
});

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('password is required').min(6, 'Password should be 6 characters min'),
});

const initialValues = {
  email: '',
};

const ForgotPassword = () => {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
  const [code, setCode] = useState<number>(0);
  const [completed, setCompleted] = useState(false);

  const initialValues2 = {
    password: '',
    code: code,
  };

  const router = useRouter();

  const [customerPasswordReset, { loading, data }] = useLazyQuery(FORGOT_PASSWORD_QUERY, {
    variables: initialValues,
    onCompleted: () => {
      setActive(2);
    },
  });

  const [updateCustomerPassword, { loading: loading2 }] = useMutation(RESET_PASSWORD_MUTATION, {
    variables: initialValues2,
    onCompleted: () => {
      setActive(4);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  const handleNext = () => {
    if (active < 3) {
      setActive(active + 1);
    }
  };

  const handleBack = () => {
    if (active > 1) {
      setActive(active - 1);
    } else if (active === 1) {
      router.push('/login');
    }
  };

  return (
    <Container>
      {active === 4 || (
        <ImgContainer>
          <Link href="/">
            <Logo src="/images/logo.png" alt="Logo" />
          </Link>
        </ImgContainer>
      )}
      {active === 4 || <Header>Forgot Password?</Header>}
      <MultiStepForm accentColor="#0F264C" activeStep={active}>
        <Step label="Enter Email">
          <Step1Container>
            <EmailImg src="/images/enterEmail.png" alt="Enter Email" />
            <Text>Please enter your registered email address for a quick password reset </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotPasswordSchema}
              onSubmit={(values, actions) => {
                customerPasswordReset({ variables: values });
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form style={{ width: '100%' }}>
                    <div>
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
                    </div>
                    <ErrorMessage name="email" component="span" className={styles.error} />
                    <Button type="submit" disabled={loading}>
                      {loading ? `Sending...` : `Continue`}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Step1Container>
        </Step>
        <Step label="Confirm Email">
          <EmailContainer>
            <EmailImg src="/images/confirmEmail.png" alt="Confirm Email" />
            <Text>Please enter the code we just sent to {data?.customerPasswordReset.email} </Text>
            <NewInput
              length={6}
              validate={/^[0-9]$/}
              onComplete={(value: string) => {
                setCode(parseInt(value));
                setCompleted(true);
              }}
              onChange={(value: string) => {
                setCode(parseInt(value));
              }}
              format={(k) => k.toUpperCase()}
            />
          </EmailContainer>
        </Step>
        <Step label="Reset Password">
          <EmailContainer>
            <EmailImg src="/images/resetPassword.png" alt="Reset Password" />
            <Text>Please enter a new secure password</Text>
            <Formik
              initialValues={initialValues2}
              validationSchema={resetPasswordSchema}
              onSubmit={(values, actions) => {
                updateCustomerPassword({ variables: { ...values, code } });
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form style={{ width: '100%' }}>
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
                    </div>{' '}
                    <ErrorMessage name="email" component="span" className={styles.error} />
                    <Button type="submit" disabled={loading2}>
                      {loading2 ? `Confirming...` : `Confirm new password`}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </EmailContainer>
        </Step>
        <Step label="Success">
          <EmailContainer>
            <TopText>Successful Password Reset </TopText>
            <EmailImg src="/success.png" alt="success" />
            <Text>Congratulations, you’ve successfuly reset your password</Text>
            <Button onClick={() => router.push('/login')}>Proceed to sign in</Button>
          </EmailContainer>
        </Step>
      </MultiStepForm>
      <BtnContainer>
        {active === 1 || active === 4 || active === 3 || (
          <span onClick={handleNext}>
            <Button disabled={!completed}>
              {active === 1 ? 'Continue' : active === 2 ? 'Confirm email' : 'Confirm new password'}
            </Button>
          </span>
        )}
        {active === 4 || (
          <span onClick={handleBack}>
            <Button back>Back</Button>
          </span>
        )}
      </BtnContainer>
      {active === 2 ? (
        <BottomText>
          Didn’t receive confirmation email?
          <ResendLink
            disabled={loading}
            onClick={() => customerPasswordReset({ variables: data?.customerPasswordReset.email })}
          >
            Resend code
          </ResendLink>
        </BottomText>
      ) : null}
    </Container>
  );
};

export default ForgotPassword;
