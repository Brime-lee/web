import React from 'react';
import styled from 'styled-components';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

import Button from '../components/Button';
import styles from '../styles/signup.module.css';

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto 80px auto;
  background: rgba(255, 153, 22, 0.1);
  padding: 10px 40px;
  border: 1px solid #ff9916;
  box-sizing: border-box;
  border-radius: 8px;
  @media (max-width: 1050px) {
    margin: 20px 10px 80px 10px;
  }
`;

const ContactHeader = styled.h1`
  font-weight: normal;
  font-size: 50px;
  color: #343434;
  text-align: center;
  margin: 22px 0 60px 0;
  @media (max-width: 670px) {
    font-size: 30px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 80px 0;
  @media (max-width: 980px) {
    width: 100%;
  }

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;
const Right = styled.div`
  width: 60%;
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 670px) {
    width: 100%;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 35%;
  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 670px) {
    width: 100%;
  }
`;

const SocialContacts = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  // margin: 0 0 32px 0;
`;

const Pin = styled(GrLocation)`
  font-size: 40px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    transform: scaleY(1.1);
  }
  @media (max-width: 670px) {
    margin-bottom: 20px;
  }
`;

const Phone = styled(HiOutlinePhone)`
  font-size: 24px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    transform: scaleY(1.1);
  }
  @media (max-width: 670px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const Mail = styled(AiOutlineMail)`
  fill: #0f264c;
  font-size: 24px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    transform: scaleY(1.1);
  }
  @media (max-width: 670px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const ContactText = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #0f264c;
  margin: 0 0 16px 0;
`;

const SocialsTop = styled.div`
  margin: 0 0 40px 0;
`;

const SocialsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const InputField = styled(FilteredPropsInputField)`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #282828a3;
  background: #ffffff;
  border: 1px solid #ff9916;
  box-sizing: border-box;
  border-radius: 8px;
  &:focus,
  ::placeholder {
    color: #aba4a4bd;
    font-family: montserrat;
  }
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
`;

const InputFieldTextArea = styled.textarea`
  text-vertical-align: top;
  height: 120px;
  width: 100%;
  padding: 0px 13px;

  font-family: montserrat;
  font-size: 16px;
  line-height: 150%;
  background: #ffffff;
  border: 1px solid #ff9916;
  box-sizing: border-box;
  border-radius: 8px;
  overflow-wrap: break-word;
  color: #282828a3;
  ::placeholder {
    color: #aba4a4bd;
    font-family: montserrat;
  }

  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  margin: 16px 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    margin: 16px 0;
  }
`;

const ImgContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    max-width: 500px;
    margin: 0 10px 0 10px;
    height: auto;
  }
`;

const ContactImg = styled.img`
  width: 100%;
`;

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email().required('email is required'),
  reason: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const initialValues = {
  reason: '',
  name: '',
  email: '',
  messages: '',
};

const Contact = () => {
  return (
    <div>
      <ImgContainer>
        <ContactImg src="/contactImg.png" alt="contactimg" />
      </ImgContainer>
      <MainContainer>
        <ContactHeader>Contact Us</ContactHeader>
        <InnerContainer>
          <Right>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values, actions) => {}}
            >
              {(touched, errors, isSubmitting) => (
                <>
                  <Form>
                    <div style={{ margin: '0 0 25px 0' }}>
                      <Field
                        className={styles.select}
                        name="reason"
                        as="select"
                        id="reason"
                        autoComplete="reason"
                        valid={touched.reason && !errors.reason}
                        error={touched.reason && errors.reason}
                      >
                        <option value="reason">Reason for contacting us</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Investment">Investment</option>
                      </Field>
                      <ErrorMessage name="reason" component="span" className={styles.error} />
                    </div>
                    <div style={{ margin: '0 0 25px 0' }}>
                      <InputField
                        name="name"
                        id="name"
                        type="name"
                        placeholder="Name"
                        autoComplete="name"
                        valid={touched.name && !errors.name}
                        error={touched.name && errors.name}
                      />
                      <ErrorMessage name="name" component="span" className={styles.error} />
                    </div>
                    <div style={{ margin: '0 0 25px 0' }}>
                      <InputField
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        valid={touched.email && !errors.email}
                        error={touched.email && errors.email}
                      />
                      <ErrorMessage name="email" component="span" className={styles.error} />
                    </div>
                    <div style={{ margin: '0 0 25px 0' }}>
                      <InputFieldTextArea
                        name="message"
                        id="message"
                        placeholder="Your Message "
                        autoComplete="message"
                        // valid={touched.message && !errors.message}
                        // error={touched.message && errors.message}
                      />
                      <ErrorMessage name="message" component="span" className={styles.error} />
                    </div>
                    {/* {error && (
                        <ErrorContainer active={disable ? false : true}>
                          <GiCancel
                            color="#d8000c"
                            onClick={() => {
                              // reset();
                              setDisable(true);
                            }}
                          />
                          <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                        </ErrorContainer>
                      )} */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <ButtonContainer>
                        <Button type="submit" small disabled={isSubmitting}>
                          {isSubmitting ? `Submitting...` : `Submit`}
                        </Button>
                      </ButtonContainer>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </Right>
          <Socials>
            <SocialsTop>
              <SocialContacts>
                <Pin />
                <ContactText> 14 Adetokunbo Ademola Street, Victoria Island, Lagos Nigeria 106101</ContactText>
              </SocialContacts>
              <SocialContacts>
                <Phone />
                <ContactText>+234 802 246 3433</ContactText>
              </SocialContacts>
              <SocialContacts>
                <Mail />
                <ContactText>info@hightable.africa</ContactText>
              </SocialContacts>
            </SocialsTop>
            <SocialsBottom>
              <Link href="http://linkedin.com/company/hightable-africa">
                <AiOutlineLinkedin size={36} style={{ cursor: 'pointer' }} />
              </Link>
              <Link href="https://www.instagram.com/hightable.africa">
                <FaInstagram size={36} style={{ cursor: 'pointer' }} />
              </Link>
              <Link href="http://facebook.com/hightable_africa">
                <AiOutlineFacebook size={36} style={{ cursor: 'pointer' }} />
              </Link>
              <Link href="http://twitter.com/hightableafrica">
                <FiTwitter size={36} style={{ cursor: 'pointer' }} />
              </Link>
            </SocialsBottom>
          </Socials>
        </InnerContainer>
      </MainContainer>
    </div>
  );
};

export default Contact;
