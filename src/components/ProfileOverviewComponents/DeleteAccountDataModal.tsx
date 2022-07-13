import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';

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

const ModalTitle = styled.h2`
  font-size: 24px;
  @media(max-width:415px){
    font-size: 16px;
  }
`;

const ModalBody = styled.div`
  background: #f5f5f5;
`;

const ModalDescription = styled.span`
  padding: 4px;
`;

const ModalFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-evenly:
`;

const ModalButton = styled.button`
  margin: 1px;
  height: 50px;
  width: 48%;
  border: 1px solid #010d1a;
  border-radius: 8px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 415px) {
    margin: 12px 0px;
    height: 40px;
    width: 130px;
    font-size: 12px;
`;

const ButtonWrapper = styled.div`
    width:48%
`;

const DeleteAccountDataModal = (props) => {
  if (!props.showDeleteAccModal) {
    return null;
  }

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
    <div className="ProfileModal">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <ModalTitle> Are you sure you want to delete your Hightable data?</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalDescription> This action is irreversible </ModalDescription>
          </ModalBody>
          <ModalFooter>
            <ButtonWrapper><Button small criticalAction > Delete My Account </Button></ButtonWrapper>
            <ModalButton onClick={props.onClose}> Cancel </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
};

export default DeleteAccountDataModal;
