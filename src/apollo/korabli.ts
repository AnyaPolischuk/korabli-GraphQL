import { gql } from '@apollo/client';

export const ALL_SHIPS = gql`
  query AllShips {
  vehicles {
    id
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
    	title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
`;