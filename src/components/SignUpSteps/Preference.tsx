import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../SignupCheckbox';
import { gql, useQuery } from '@apollo/client';

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

const preferences = [
  {
    name: 'Fine Dining',
    _id: 1,
    selected: false,
  },
  {
    name: 'Concerts',
    _id: 2,
    selected: false,
  },
  {
    name: 'Fast Foods',
    _id: 3,
    selected: false,
  },
  {
    name: 'Indoor Activities',
    _id: 4,
    selected: false,
  },
  {
    name: 'Small Events',
    _id: 5,
    selected: false,
  },
  {
    name: 'Large Events',
    _id: 6,
    selected: false,
  },
  {
    name: 'Hiking',
    _id: 7,
    selected: false,
  },
  {
    name: 'Fine Dining',
    _id: 8,
    selected: false,
  },
  {
    name: 'Concerts',
    _id: 9,
    selected: false,
  },
  {
    name: 'Fast Foods',
    _id: 10,
    selected: false,
  },
  {
    name: 'Indoor Activities',
    _id: 11,
    selected: false,
  },
  {
    name: 'Outdoor Activities',
    _id: 12,
    selected: false,
  },
  {
    name: 'Small Events',
    _id: 13,
    selected: false,
  },
  {
    name: 'Large Events',
    _id: 14,
    selected: false,
  },
  {
    name: 'Hiking',
    _id: 15,
    selected: false,
  },
  {
    name: 'Fine Dining',
    _id: 16,
    selected: false,
  },
  {
    name: 'Concerts',
    _id: 17,
    selected: false,
  },
  {
    name: 'Fast Foods',
    _id: 18,
    selected: false,
  },
  {
    name: 'Indoor Activities',
    _id: 19,
    selected: false,
  },
  {
    name: 'Outdoor Activities',
    _id: 20,
    selected: false,
  },
];

// const PREFERENCE_QUERY = gql`
//   query findProperties($_id: ID, $type: String) {
//     findProperties(data: { _id: $_id, type: $type }) {
//       _id
//       type
//       name
//       meta {
//         active
//         activatedAt
//         createdAt
//         updatedAt
//         deactivatedAt
//       }
//     }
//   }
// `;

const Preference = () => {
  const [checked, setChecked] = useState([]);

  // const { loading, error, data } = useQuery(PREFERENCE_QUERY, {
  //   variables: {
  //     type: 'Food/Drink',
  //   },
  // });

  const handleCheck = (preference) => {
    const newChecked = checked;
    const index = newChecked.findIndex((item) => item._id === preference._id);
    if (index !== -1) {
      newChecked.splice(index, 1);
      setChecked([...newChecked]);
    } else {
      setChecked([...newChecked, preference]);
    }
  };

  return (
    <div>
      <PrefContainer>
        <TopHeading>Please setup your preferences in a few simple steps</TopHeading>
        <CheckBoxContainer>
          {/* {data?.findProperties.map((item) => { */}
          {preferences.map((item) => {
            return (
              <CheckBox
                key={item._id}
                label={item.name}
                checked={checked.find((i) => i._id === item._id)}
                onChange={() => handleCheck(item)}
              />
            );
          })}
        </CheckBoxContainer>
        <CheckSearch type="text" placeholder="Find more preference" name="search" />
      </PrefContainer>
    </div>
  );
};

export default Preference;
