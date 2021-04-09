// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DungeonMaster {
    _id: ID
    dungeonMaster: String
    email: String
    players: [Player]
  }
  type Player {
    _id: ID
    playerName: String
    playerClass: String
    playerRace: String
    playerLevel: Int
    playerArmorClass: Int
    playerHitPoints: Int
    playerStrengthStat: Int
    playerDexterityStat: Int
    playerConstitutionStat: Int
    playerIntelligenceStat: Int
    playerWisdomStat: Int
    playerCharismaStat: Int
  }
  type Query {
    me: DungeonMaster
    dungeonMasters: [DungeonMaster]
    dungeonMaster(username: String): [DungeonMaster]
    players: [Player]
    player(playerName: String): [Player]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addDungeonMaster(
      dungeonMaster: String!
      email: String!
      password: String!
    ): Auth
    addPlayer(
      _id: ID
      playerName: String!
      playerClass: String!
      playerRace: String!
      playerLevel: Int
      playerArmorClass: Int
      playerHitPoints: Int 
    ): Player
  }
  type Auth {
    token: ID!
    dungeonMaster: DungeonMaster
  }
`;

module.exports = typeDefs;
