// Initiate dnd

// players
// DM
// Monsters

// DM can have many players


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
  }
`;
module.exports = typeDefs;

// thoughts: [Thought]

// ------ This is the query code if you want to check for all dm,dm by username, all players, player by playername
// type Query {
//   dungeonMasters: [DungeonMaster]
//   dungeonMaster(username: String): [DungeonMaster]
//   players: [Player]
//   player(playerName: String): [Player]
// }
