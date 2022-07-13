import { gql } from '@apollo/client';

export const RESTAURANTS_LIST_QUERY = gql`
  query {
    findRestaurants(data: {}) {
      _id
      shortId
      name
      email
      telephone
      address
      logo
      description
      url
      rating
      verified
      verifiedAt
      location {
        latitude
        longitude
      }
      meta {
        createdAt
        updatedAt
      }
    }
  }
`;