import React from 'react';
import styled from 'styled-components';

const FollowBtn = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0px 24px 24px 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: float;
  float: left;
  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 500px) {
    margin: 0px 8px 24px 0;
  }
`;

const FollowText = styled.p`
  margin: 0 6px 0 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.03em;
  text-transform: capitalize;
  color: #0f264c;
  @media (max-width: 500px) {
    font-size: 13px;
    margin: 0 4px 0 0;
  }
`;

const AddIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const SignupCheckbox = ({ checked, onChange, label }) => {
  return (
    <FollowBtn
      style={checked ? { background: 'rgba(0, 66, 105, 0.07)', border: 'none' } : { background: '#f8f8f8' }}
      onClick={onChange}
    >
      <FollowText>{label}</FollowText>
      {checked ? <AddIcon src="images/check.png" alt="check" /> : <AddIcon src="images/addIcon.png" alt="checkAdd" />}
    </FollowBtn>
  );
};

export default SignupCheckbox;
