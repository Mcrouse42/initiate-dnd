const { DungeonMaster, Player, Monster } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.dungeonMaster) {
        const dungeonMasterData = await DungeonMaster.findOne({
          _id: context.dungeonMaster._id,
        })
          .select("-__v -password")
          .populate("players");

        return dungeonMasterData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // get all dungeon masters
    dungeonMasters: async () => {
      return DungeonMaster.find().select("-__v -password").populate("players");
    },

    // get a dungeon master by username
    dungeonMaster: async (parent, { username }) => {
      const params = username ? { username } : {};
      return DungeonMaster.find(params)
        .select("-__v -password")
        .populate("players");
    },

    // get all players
    players: async () => {
      return Player.find();
    },

    // get player by playerName
    player: async (parent, { playerName }) => {
      const params = playerName ? { playerName } : {};
      return Player.find(params);
    },
  },
  Mutation: {
    addDungeonMaster: async (parent, args) => {
      const dungeonMaster = await DungeonMaster.create(args);
      const token = signToken(dungeonMaster);

      return { token, dungeonMaster };
    },
    login: async (parent, { email, password }) => {
      const dungeonMaster = await DungeonMaster.findOne({ email });

      if (!dungeonMaster) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await dungeonMaster.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(dungeonMaster);
      return { token, dungeonMaster };
    },
    addPlayer: async (parent, { playerData }, context) => {
      console.log(playerData);
      if (context.dungeonMaster) {
        const updatedDungeonMaster = await DungeonMaster.findOneAndUpdate(
          {_id: context.dungeonMaster._id},
          { $addToSet: { players: playerData } },
          { new: true }
        );
        return updatedDungeonMaster;
      }
      return new AuthenticationError('You need to be logged in to save a player');
    },
    saveMonster: async (parent, { monsterData }, context) => {
      console.log(monsterData);
      if (context.dungeonMaster) {
        const updatedDungeonMaster = await DungeonMaster.findOneAndUpdate(
          { _id: context.dungeonMaster._id },
          // if error - look at schema, may want to add monster ID from mongoose instead?
          // { $addToSet: { monsters: _id} },
          { $addToSet: { monsters: monsterData } },
          // use populate when you want to get more data
          { new: true }
        );
        return updatedDungeonMaster;
      }
      throw new AuthenticationError('You need to be logged in to save a monster');
    }
  },
};

module.exports = resolvers;


// old model for addPlayer
// addPlayer: async (parent, args, context) => {
//   console.log("ADD PLAYER REACHED!");
//   console.log(args);
//   if (context.dungeonMaster) {
//     const player = await Player.create({
//       ...args,
//       dungeonMaster: context.dungeonMaster,
//     });

//     await DungeonMaster.findByIdAndUpdate(
//       { _id: context.dungeonMaster._id },
//       { $push: { players: player._id } },
//       { new: true }
//     );

//     return player;
//   }

//   throw new AuthenticationError("You need to be logged in!");
// }

// ------------------------ BACKEND TESTING INFO ------------------------
// get all dungeon masters (players included):

// query {
//   dungeonMasters {
//     _id
//     dungeonMaster
//     email
//     players {
//       _id
//       playerName
//   		playerClass
//   		playerRace
//   		playerLevel
//   		playerArmorClass
//   		playerHitPoints
//       playerStrengthStat
//     	playerDexterityStat
//     	playerConstitutionStat
//     	playerIntelligenceStat
//     	playerWisdomStat
//     	playerCharismaStat
//     }
//   }
// }

// get one dungeon master by username (players included)

// query getSingleDM($dungeonMaster: String!) {
//   dungeonMaster(dungeonMaster: $dungeonMaster) {
//     _id
//     dungeonMaster
//     email
//     players {
//       _id
//       playerName
//   		 playerClass
//   		 playerRace
//   	 	 playerLevel
//   	 	 playerArmorClass
//   		 playerHitPoints
//       playerStrengthStat
//     	 playerDexterityStat
//     	playerConstitutionStat
//     	playerIntelligenceStat
//     	playerWisdomStat
//     	playerCharismaStat
//     }
//   }
// }

// get all players

// query {
//   players {
//     _id
//     playerName
//   	playerClass
//   	playerRace
//   	playerLevel
//   	playerArmorClass
//   	playerHitPoints
//     playerStrengthStat
//     playerDexterityStat
//     playerConstitutionStat
//     playerIntelligenceStat
//     playerWisdomStat
//     playerCharismaStat
//   }
// }

// get one player by playerName

// query getSinglePlayer($playerName: String!) {
//   player(playerName: $playerName) {
//     _id
//     playerName
//   	playerClass
//   	playerRace
//   	playerLevel
//   	playerArmorClass
//   	playerHitPoints
//     playerStrengthStat
//     playerDexterityStat
//     playerConstitutionStat
//     playerIntelligenceStat
//     playerWisdomStat
//     playerCharismaStat
//   }
// }

// Query variables 
// {
//   "playerName": "Angus_Batz"
// }

