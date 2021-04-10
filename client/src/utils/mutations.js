import gql from 'graphql-tag';

// add back in the 'dungeonMaster under the _id line
export const LOGIN_DM = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      dungeonMaster {
        _id
        dungeonMaster
      }
    }
  }
`;

export const ADD_DM = gql`
    mutation addDungeonMaster($dungeonMaster: String!, $password: String!, $email: String!) {
        addDungeonMaster(dungeonMaster: $dungeonMaster, password: $password, email: $email) {
            token
            dungeonMaster {
                _id
                dungeonMaster
            }
        }
    }
`;