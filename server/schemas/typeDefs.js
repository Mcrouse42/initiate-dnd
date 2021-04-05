// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type DungeonMaster {
  _id: ID
  username: String
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
}

type Query {
    dungeonMasters: [DungeonMaster]
    dungeonMaster(username: String): [DungeonMaster]
    players: [Player]
    player(playerName: String): [Player]
  }
`;
module.exports = typeDefs;