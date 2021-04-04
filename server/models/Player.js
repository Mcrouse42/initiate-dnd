const { Schema, model } = require('mongoose');

const playerSchema = new Schema(
  {
    playerName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    playerClass: {
      type: String,
      required: true,
      trim: true
    },
    playerRace: {
      type: String,
      required: true,
      trim: true
    },
    playerLevel: {
      type: Number,
      required: true,
      trim: true
    },
    playerArmorClass: {
      type: Number,
      required: true,
      trim: true
    },
    playerHitPoints: {
      type: Number,
      required: true,
      trim: true
    },
    statsModifier: [
      {
        playerStrengthStat: {type: Number},
        playerStrengthModifier: {type: Number}
      },
      {
        playerDexterityStat: {type: Number},
        playerDexterityModifier: {type: Number}
      },
      {
        playerConstitutionStat: {type: Number},
        playerConstitutionModifier: {type: Number}
      },
      {
        playerIntelligenceStat: {type: Number},
        playerIntelligenceModifier: {type: Number}
      },
      {
        playerWisdomStat: {type: Number},
        playerWisdomModifier: {type: Number}
      },
      {
        playerCharismaStat: {type: Number},
        playerCharismaModifier: {type: Number}
      },
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Player = model('Player', playerSchema);

module.exports = Player;
