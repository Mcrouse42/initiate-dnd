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
    dungeonMaster: String
  }
  type Query {
    me: DungeonMaster
    dungeonMasters: [DungeonMaster]
    dungeonMaster(username: String!): DungeonMaster
    players(playerName: String): [Player]
    player(_id: ID!): Player
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addDungeonMaster(
      dungeonMaster: String!
      email: String!
      password: String!
    ): Auth
    addPlayer(playerName: String!): Player
  }
  type Auth {
    token: ID!
    dungeonMaster: DungeonMaster
  }
`;

module.exports = typeDefs;
