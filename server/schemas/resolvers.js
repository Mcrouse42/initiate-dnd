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
          .select("-__v -password");
         // .populate("players");

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
        .select("-__v -password");
        //.populate("players");
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
      console.log("Player Data: ", playerData);
      if (context.dungeonMaster) {
        console.log(context.dungeonMaster);
        console.log(context.dungeonMaster._id);
        const updatedDungeonMasterPlayer = await DungeonMaster.findOneAndUpdate( // this is not working
          { _id: context.dungeonMaster._id },
          { $addToSet: { players: playerData } },// this is the line that is erroring
          { new: true }
        );
        return updatedDungeonMasterPlayer;
      }
      return new AuthenticationError('You need to be logged in to save a player');
    },
    saveMonster: async (parent, { monsterData }, context) => {
      console.log(monsterData);
      if (context.dungeonMaster) {
        const updatedDungeonMaster = await DungeonMaster.findOneAndUpdate(
          { _id: context.dungeonMaster._id },
          // if error - look at schema, may want to add monster ID from mongoose instead
          // { $addToSet: { monsters: _id} },
          { $addToSet: { monsters: monsterData } },
          { new: true }
        );
        return updatedDungeonMaster;
      }
      throw new AuthenticationError('You need to be logged in to save a monster');
    }
  },
};

module.exports = resolvers;