import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  transition: 3s;
  z-index: 20;
`;

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }
  return <ModalContainer onClick={props.onClose}></ModalContainer>;
};

export default Modal;
