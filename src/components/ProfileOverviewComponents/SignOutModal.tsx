import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AUTH_TOKEN, USER_DATA } from '../constants';

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
  background: rgba(237, 240, 250, 0.5);
  backdrop-filter: blur(4px);
  z-index: 5;
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: #ffffff;
  border: 1px solid #fefefe;
  border-radius: 8px;
  @media (max-width: 900px) {
    width: 300px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ModalTitle = styled.h2``;

const ModalBody = styled.div`
  border-top: #eee;
  border-bottom: #eee;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;

const ModalButton = styled.button`
  margin: 1px;
  width: 48%;
  height: 50px;
  border: 1px solid #010d1a;
  border-radius: 8px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SignOutButton = styled(ModalButton)`
  background-color: #ff0000;
  color: #fff;
  &:hover {
    box-shadow: 0px 0px 12px #ff0000;
  }
`;

const SignOutModal = (props) => {
  if (!props.show) {
    return null;
  }
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

  return (
    <div className="signOutModal">
      <ModalOverlay
        onClick={() => {
          props.onClose();
        }}
      >
        <ModalContent
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ModalHeader>
            <ModalTitle> Are you sure you want to sign out</ModalTitle>
          </ModalHeader>
          <ModalFooter>
            <ModalButton onClick={props.onClose}> Cancel </ModalButton>
            <SignOutButton
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                localStorage.removeItem(USER_DATA);
                router.push('/login');
              }}
            >
              {' '}
              Sign Out
            </SignOutButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
};

export default SignOutModal;
