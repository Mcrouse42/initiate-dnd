import gql from 'graphql-tag';

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

export const SAVE_MONSTER = gql`
    mutation saveMonster($monsterData: monsterInput!) {
      saveMonster(monsterData: $monsterData) {
          monsterName
          monsterSize
          monsterType
          monsterAlignment
          monsterSpeed
          monsterChallenge
          monsterArmorClass
          monsterHitPoints
          monsterStrengthStat
          monsterDexterityStat
          monsterConstitutionStat
          monsterIntelligenceStat
          monsterWisdomStat
          monsterCharismaStat
      }
    }
`;

export const ADD_PLAYER = gql`
mutation addPlayer($playerData: playerInput!) {
  addPlayer(playerData: $playerData) {
      playerName
      playerClass
      playerRace
      playerLevel
      playerArmorClass
      playerHitPoints
      playerStrengthStat
      playerDexterityStat
      playerConstitutionStat
      playerIntelligenceStat
      playerWisdomStat
      playerCharismaStat
    }
  }
`;
