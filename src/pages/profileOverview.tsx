import styled from 'styled-components';
import React, { useState } from 'react';
import Button from '../components/Button';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import MobileLeftNavbar from '../components/ProfileOverviewComponents/mobileLeftNavbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../styles/signup.module.css';
import * as Yup from 'yup';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { gqlResponder } from 'storejars-react-toolkit';
import Bugsnag from '@bugsnag/js';
import { GiCancel } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Modal from '../components/Modal';
import { profile } from '../redux/userSlice';

interface profileFormValues {
  email: string;
  username: string;
  fullName: string;
  address: string;
  instagram: string;
  twitter: string;
  about: string;
}

interface ErrorProps {
  active?: boolean;
}

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

const MainContainer = styled.section`
  display: flex;
  width: 100vw @media (max-width: 376px) {

  }
`;

const sideMenuContainer = styled.div`
  @media (max-width: 376px) {
    display: none;
  }
`;

const RightContent = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  // height: 1092px;
`;

const RightContentTitle = styled.h3`
  position: relative;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: DM Serif Display;
  font-style: bold;
  font-weight: 600;
  line-height: 32.9px;
  font-size: 24px;
  margin-left: 32px;
  margin-top: 0px;
  @media (max-width: 900px) {
    text-align: center;
    margin-top: -30px;
    margin-left: 62px;
  }
`;

const ProfilePhotoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-left: 32px;
`;

const ProfilePhotoTitle = styled.h3`
  font-size: 16px;
  margin-left: 0px;
  margin-top: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const EditProfileDataForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
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

const InputField = styled(FilteredPropsInputField)`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #282828a3;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
  ::placeholder {
    font-family: montserrat;
    color: #aba4a4bd;
  }
`;

const Social = styled(InputField)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 16px 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 900px) {
    margin: 16px 0;
  }
`;

const InputFieldTextArea = styled(InputField)`
  // display: inline;
  // align-items: center;
  // padding: 8px 13px 6px 8px;
  // position: relative;
  text-vertical-align: top;
  // height: 120px;
  width: 100%;
  font-family: montserrat;
  font-size: 16px;
  line-height: 150%;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
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

const Error = styled.p`
  padding: 2px;
  color: red;
`;

const SocialsContainer = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
// const UpdateText = styled.p`
//   color: #0055ff;
//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   width: -webkit-fill-available;
//   text-transform: capitalize;
// `;

const ErrorContainer = styled.div<ErrorProps>`
  width: 100%;
  background-color: #ffbaba;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  // margin: 30px 0 -20px 0;
  align-items: flex-start;
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

const UpdateContainer = styled(ErrorContainer)`
  background-color: #0055ff33;
  display: ${({ active }) => (active ? 'flex' : 'none')};

  p {
    color: #0055ff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    width: -webkit-fill-available;
    text-transform: capitalize;
  }
`;

const UPDATEPROFILE_MUTATION = gql`
  mutation UpdateCustomer(
    $lastName: String
    $firstName: String
    $username: String
    $twitter: String
    $instagram: String
    $address: String
    $about: String
  ) {
    updateCustomer(
      data: {
        lastName: $lastName
        firstName: $firstName
        username: $username
        twitter: $twitter
        instagram: $instagram
        address: $address
        about: $about
      }
    ) {
      _id
      firstName
      lastName
      username
      twitter
      instagram
      address
      about
    }
  }
`;

const FIND_CUSTOMER = gql`
  query {
    findOneCustomer(data: {}) {
      _id
      email
      firstName
      lastName
      gender
      dob
      twitter
      instagram
      address
      verified
      about
      meta {
        active
        createdAt
        activatedAt
        deactivatedAt
      }
    }
  }
`;

const UPLOAD_DISPLAY_PHOTO = gql`
  mutation uploadImage($name: String!, $image: Upload!, $location: String!) {
    uploadImage(data: { name: $name, image: $image, location: $location }) {
      url
    }
  }
`;

const schema = Yup.object().shape({
  username: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  address: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!'),
  instagram: Yup.string().url('Enter correct url!'),
  twitter: Yup.string().url('Enter correct url!'),
  about: Yup.string().max(300, 'maximum of 300 characters'),
});

const ProfileSettings = () => {
  const [disable, setDisable] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    setShowModal(!showModal);
  };

  const [uploadImage, uploadImageMeta] = useMutation(UPLOAD_DISPLAY_PHOTO, {
    onCompleted: () => {},
    onError: () => {},
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadImage({ variables: { name: file.name, location: '/images', image: file } });
  };

  const {
    loading,
    data: findCustomerData,
    error,
  } = useQuery(FIND_CUSTOMER, {
    fetchPolicy: 'network-only',
  });

  const initialValues = {
    firstName: findCustomerData && findCustomerData.findOneCustomer.firstName,
    lastName: findCustomerData && findCustomerData.findOneCustomer.lastName,
    username: findCustomerData && findCustomerData.findOneCustomer.username,
    instagram: findCustomerData ? findCustomerData.findOneCustomer.instagram : 'https://www.instagram.com/',
    twitter: findCustomerData ? findCustomerData.findOneCustomer.twitter : 'https://www.twitter.com/',
    address: findCustomerData && findCustomerData.findOneCustomer.address,
    about: findCustomerData && findCustomerData.findOneCustomer.about,
  };

  const [updateCustomer, updateCustomerMeta] = useMutation(UPDATEPROFILE_MUTATION, {
    variables: initialValues,
    onCompleted: ({ updateCustomer }) => {
      setUpdated(true);
    },
    onError: (error) => {},
  });

  return (
    <MainContainer>
      <SideMenu />
      <RightContent>
        <MobileLeftNavbar showSidebar={showSidebar} sidebar={sidebar} />
        <GiHamburgerMenu className={styles.sideBarOpen} onClick={showSidebar} />

        <RightContentTitle> Profile Overview </RightContentTitle>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={schema}
          validate={(values) => {
            if (values.instagram?.length > 0 && !values.instagram.includes('https://www.instagram.com/')) {
              values.instagram = `https://www.instagram.com/${values.instagram}`;
            }
            if (values.twitter?.length > 0 && !values.twitter.includes('https://www.twitter.com/')) {
              values.twitter = `https://www.twitter.com/${values.twitter}`;
            }
            if (values.username?.length > 0 && !values.username.includes('@')) {
              values.username = `@${values.username}`;
            }
            if (values.instagram?.length === 0) {
              values.instagram = 'https://www.instagram.com/';
            }
            if (values.twitter?.length === 0) {
              values.twitter = 'https://www.twitter.com/';
            }
          }}
          onSubmit={(values, actions) => {  
            // Object.keys(values).forEach((key) => {
            //   if (values[key] === '') {
            //     delete values[key];
            //   }
            // });
            // console.log('values', values);

            updateCustomer({ variables: values });
          }}
        >
          {(touched, errors) => (
            <>
              <ProfilePhotoDetailsContainer>
                <ProfilePhotoTitle> Profile Photo </ProfilePhotoTitle>
                <Img src="/images/profilePhotoProfileOverview.png" alt="profile photo" />
                <p>Upload profile photo</p>
                <input type="file" onChange={handleFileChange} />
              </ProfilePhotoDetailsContainer>
              <EditProfileDataForm>
                <Form>
                  <EditProfileDataLabel>First Name</EditProfileDataLabel>
                  <InputField
                    name="firstName"
                    id="firstName"
                    type="firstName"
                    autoComplete="firstName"
                    valid={touched.firstName && !errors.firstName}
                    error={touched.firstName && errors.firstName}
                  />
                  <ErrorMessage name="firstName" component="span" className={styles.error} />
                  <EditProfileDataLabel>Last Name</EditProfileDataLabel>
                  <InputField
                    name="lastName"
                    id="lastName"
                    type="lastName"
                    autoComplete="lastName"
                    valid={touched.lastName && !errors.lastName}
                    error={touched.lastName && errors.lastName}
                  />
                  <ErrorMessage name="lastName" component="span" className={styles.error} />

                  <EditProfileDataLabel>username</EditProfileDataLabel>
                  <InputField
                    name="username"
                    id="username"
                    type="username"
                    placeholder="@freeGuy2022"
                    autoComplete="username"
                    valid={touched.username && !errors.username}
                    error={touched.username && errors.username}
                  />
                  <ErrorMessage name="username" component="span" className={styles.error} />
                  <SocialsContainer>
                    <div style={{ width: '49%' }}>
                      <EditProfileDataLabel>Instagram</EditProfileDataLabel>
                      <Social
                        name="instagram"
                        id="instagram"
                        type="text"
                        placeholder="https://www.instagram.com/john_doe"
                        autoComplete="instagram"
                        valid={touched.instagram && !errors.instagram}
                        error={touched.instagram && errors.instagram}
                      />
                      <ErrorMessage name="instagram" component="span" className={styles.error} />
                    </div>
                    <div style={{ width: '49%' }}>
                      <EditProfileDataLabel>Twitter</EditProfileDataLabel>
                      <Social
                        name="twitter"
                        id="twitter"
                        type="text"
                        placeholder="https://www.twitter.com/john_doe"
                        autoComplete="twitter"
                        valid={touched.twitter && !errors.twitter}
                        error={touched.twitter && errors.twitter}
                      />
                      <ErrorMessage name="twitter" component="span" className={styles.error} />
                    </div>
                  </SocialsContainer>
                  <EditProfileDataLabel>Address</EditProfileDataLabel>
                  <InputField name="address" id="address" type="address" placeholder="" autoComplete="address" />

                  <EditProfileDataLabel>About</EditProfileDataLabel>
                  <InputFieldTextArea
                    name="about"
                    id="about"
                    type="text"
                    placeholder="maximum of 300 characters"
                    valid={touched.about && !errors.about}
                    error={touched.about && errors.about}
                  />
                  <ErrorMessage name="about" component="span" className={styles.error} />

                  {error ? (
                    <ErrorContainer active={disable ? false : true}>
                      <GiCancel
                        style={{ marginRight: '10px', cursor: 'pointer', fontSize: '25px', color: '#d8000c' }}
                        onClick={() => {
                          // reset();
                          setDisable(true);
                        }}
                      />
                      <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                    </ErrorContainer>
                  ) : updateCustomerMeta.error ? (
                    <ErrorContainer active={disable ? false : true}>
                      <GiCancel
                        style={{ marginRight: '10px', cursor: 'pointer', fontSize: '25px', color: '#d8000c' }}
                        onClick={() => {
                          // reset();
                          setDisable(true);
                        }}
                      />
                      <p>Sorry, {gqlResponder(updateCustomerMeta.error, Bugsnag)}</p>
                    </ErrorContainer>
                  ) : null}
                  {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> */}
                  {updated && (
                    <UpdateContainer active={updated}>
                      <GiCancel
                        style={{ marginRight: '10px', cursor: 'pointer', fontSize: '25px', color: '#0055ff' }}
                        onClick={() => {
                          setUpdated(false);
                        }}
                      />
                      <p>Profile Updated Successfully</p>
                    </UpdateContainer>
                  )}
                  <ButtonContainer>
                    <Button type="submit" small disabled={updateCustomerMeta.loading}>
                      {updateCustomerMeta.loading ? `Updating...` : `Update Profile`}
                    </Button>
                  </ButtonContainer>
                  {/* </div> */}
                </Form>
              </EditProfileDataForm>
            </>
          )}
        </Formik>
      </RightContent>
      <Modal
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
          setSidebar(false);
        }}
      />
    </MainContainer>
  );
};

export default ProfileSettings;
