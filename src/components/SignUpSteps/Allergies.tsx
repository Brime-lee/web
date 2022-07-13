import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../SignupCheckbox';

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
  margin: 0px auto 50px auto;
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

const allergies = [
  {
    label: 'Cow milk',
    id: 1,
  },
  {
    label: 'Non-cow milk',
    id: 2,
  },
  {
    label: 'Eggs',
    id: 3,
  },
  {
    label: 'Gluten',
    id: 4,
  },
  {
    label: 'Shellfish',
    id: 5,
  },
  {
    label: 'Appples',
    id: 6,
  },
  {
    label: 'Peanuts',
    id: 7,
  },
  {
    label: 'Tree nuts',
    id: 8,
  },
  {
    label: 'Soy',
    id: 9,
  },
  {
    label: 'Strawberries',
    id: 10,
  },
  {
    label: 'Sesame',
    id: 11,
  },
  {
    label: 'Mustard',
    id: 12,
  },
  {
    label: 'Melon',
    id: 13,
  },
  {
    label: 'Banana',
    id: 14,
  },
  {
    label: 'Lentils',
    id: 15,
  },
  {
    label: 'Fin Fish',
    id: 16,
  },
  {
    label: 'Avogado',
    id: 17,
  },
  {
    label: 'Wheat Gluten',
    id: 18,
  },
  {
    label: 'Yeast',
    id: 19,
  },
  {
    label: 'Chicken',
    id: 20,
  },
  {
    label: 'Pork',
    id: 21,
  },
  {
    label: 'Beef',
    id: 22,
  },
];

const Allergies = () => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (allergy) => {
    const newChecked = checked;
    const index = newChecked.findIndex((item) => item.id === allergy.id);
    if (index !== -1) {
      newChecked.splice(index, 1);
      setChecked([...newChecked]);
    } else {
      setChecked([...newChecked, allergy]);
    }
  };

  return (
    <div>
      <PrefContainer>
        <TopHeading>Please setup your Allergies in a few simple steps</TopHeading>
        <CheckBoxContainer>
          {allergies.map((item) => {
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
        <CheckSearch type="text" placeholder="Find more Allergies" name="search" />
      </PrefContainer>
    </div>
  );
};

export default Allergies;
