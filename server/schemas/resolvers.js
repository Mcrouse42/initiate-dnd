const { DungeonMaster, Player, Monster } = require('../models');

const resolvers = {
  Query: {
    // get all dungeon masters
    dungeonMasters: async () => {
      return DungeonMaster.find()
        .select('-__v -password')
        .populate('players');
    },

    // get a dungeon master by username
    dungeonMaster: async (parent, { username }) => {
      const params = username ? { username } : {};
      return DungeonMaster.find(params)
        .select('-__v -password')
        .populate('players');
    },

    // get all players
    players: async () => {
      return Player.find();
    },

    // get player by playerName
    player: async (parent, { playerName }) => {
      const params = playerName ? { playerName } : {};
      return Player.find(params);
    }
  }
};

module.exports = resolvers;

// ------------------------ BACKEND TESTING INFO ------------------------
// get all dungeon masters (players included):

// query {
//   dungeonMasters {
//     _id
//     username
//     email
//     players {
//       _id
//       playerName
//   		playerClass
//   		playerRace
//   		playerLevel
//   		playerArmorClass
//   		playerHitPoints
//     }
//   }
// }


// get one dungeon master by username (players included)

// query {
//   dungeonMaster(username: "Leopold.Batz95") {
//     _id
//     username
//     email
//     players {
//       _id
//       playerName
//   		playerClass
//   		playerRace
//   		playerLevel
//   		playerArmorClass
//   		playerHitPoints
//     }
//   }
// }


// get all players

// query {
//   players {
//     _id
//   	playerName
//   	playerClass
//   	playerRace
//   	playerLevel
//   	playerArmorClass
//   	playerHitPoints
//   }
// }


// get one player by playerName
// query {
//   player(playerName: "Kacey_Botsford") {
//     _id
//     playerName
//   	playerClass
//   	playerRace
//   	playerLevel
//   	playerArmorClass
//   	playerHitPoints
//   }
// }