import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../SignupCheckbox';
import { InterestsData } from '../InterestsData';

const TopHeading = styled.h1`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #0f264c;
  margin: 0 0 50px 0;
`;

const PrefContainer = styled.div`
  padding: 10px 20px;
  margin: 50px auto 50px auto;
  @media (max-width: 500px) {
    padding: 10px 0;
    margin: 0;
  }
`;

const CheckBoxContainer = styled.div`
  margin: 0 auto 50px auto;
`;

const CheckSearch = styled.input`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #0f264c;
  cursor: pointer;
  width: 90%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 500;
  background-image: url('/chevron-down.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 97%;
  transition: 0.3s;

  &:hover {
    border: 1px solid #ff9916;
  }

  &:focus {
    outline: none;
    background-image: none;
    border: 1px solid #ff9916;
  }
`;

const Interests = () => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (interest) => {
    const newChecked = checked;
    const index = newChecked.findIndex((item) => item.id === interest.id);
    if (index !== -1) {
      newChecked.splice(index, 1);
      setChecked([...newChecked]);
    } else {
      setChecked([...newChecked, interest]);
    }
  };

  return (
    <div>
      <PrefContainer>
        <TopHeading>Please setup your Interests in a few simple steps</TopHeading>
        <CheckBoxContainer>
          {InterestsData.map((item) => {
            return (
              <CheckBox
                key={item.id}
                label={item.label}
                checked={checked.find((i) => i.id === item.id)}
                onChange={() => handleCheck(item)}
              />
            );
          })}
        </CheckBoxContainer>
        <CheckSearch type="text" placeholder="Find more interests" name="search" />
      </PrefContainer>
    </div>
  );
};

export default Interests;
