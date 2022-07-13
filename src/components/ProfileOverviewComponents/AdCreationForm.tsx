import styled from 'styled-components';
import React, { useState } from 'react';
import Button  from '../Button';
import MobileLeftNavbar from './mobileLeftNavbar';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface adCreationFormValues {
  email: string;
  fullName: string;
  about: string;
}

const MainContainer = styled.section`
  display: flex;
  margin: 16px 32px 0px 32px;
  width: 70%;
  @media(max-width: 623px){
    width: 90%;
  }
`;

const EditProfileDataForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditProfileDataLabel = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
`;

const EditProfileDataInputDisabled = styled.input`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  background: rgba(187, 195, 201, 0.25);
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  &:active {
    border: 1px solid #fff7e7;
  }
`;

const EditProfileDataInput = styled.input`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
`;

const EditProfileDataInputAbout = styled.textarea`
  display: inline;
  align-items: center;
  padding: 8px 13px 6px 8px;
  position: relative;
  height: 120px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  overflow-wrap: break-word;
`;

const ButtonContainer = styled.div`
  margin: 32px auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Error = styled.p`
  padding: 2px;
  color: red;
`;

const AdCreationForm = () => {
  const initialValues: adCreationFormValues = {
    email: "",
    fullName: "",
    about: ""
  }

  const schema = Yup.object({
    email: Yup.string().required("Required"),
    fullName: Yup.string().required("Required"),
    about: Yup.string()
  })

  return (
    <MainContainer>
      <Formik initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => console.log("Your form values are", values)}
      >
        {props => (
          <EditProfileDataForm onSubmit={props.handleSubmit}>
            <EditProfileDataLabel>Email Address</EditProfileDataLabel>
            <EditProfileDataInputDisabled
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
            />

            <EditProfileDataLabel>Full Name</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.fullName}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="Full Name"
              type="text"
              id="fullname"
              name="fullname"
            />
            {props.errors.fullName && <Error>{props.errors.fullName}</Error>}

            <EditProfileDataLabel>About</EditProfileDataLabel>
            <EditProfileDataInputAbout
              value={props.values.about}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="About"
              id="about"
              name="about"
            />
            {props.errors.about && <Error>{props.errors.about}</Error>}

            <ButtonContainer>
              <Button small> Create Ad</Button>
            </ButtonContainer>
          </EditProfileDataForm>
        )}
      </Formik>
    </MainContainer>
  );
};

export default AdCreationForm;
