const { DungeonMaster, Player, Monster } = require('../models');

const resolvers = {
  Query: {
    // get all dungeon masters
    // to test:
    // query {
    //   dungeonMasters {
    //     _id
    //     username
    //     email
    //   }
    // }
    dungeonMasters: async () => {
      return DungeonMaster.find();
    },

    // get a dungeon master by username
    // to test:
    // query {
    //   dungeonMaster(username: "Amira99") {
    //     _id
    //     username
    //     email
    //   }
    // }
    dungeonMaster: async (parent, { username }) => {
      const params = username ? { username } : {};
      return DungeonMaster.find(params);
    },

    // get all players
    // players: async () => {
    //   return Player.find();
    // },

    // get player by playerName
    // player: async (parent, { playerName }) => {
    //   const params = playerName ? { playerName } : {};
    //   return Player.find(params);
    // }
  }
};

module.exports = resolvers;
