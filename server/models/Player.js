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
    playerStrengthStat: {
      type: Number,
      required: true,
      trim: true
    },
    playerDexterityStat: {
      type: Number,
      required: true,
      trim: true
    },
    playerConstitutionStat: {
      type: Number,
      required: true,
      trim: true
    },
    playerIntelligenceStat: {
      type: Number,
      required: true,
      trim: true
    },
    playerWisdomStat: {
      type: Number,
      required: true,
      trim: true
    },
    playerCharismaStat: {
      type: Number,
      required: true,
      trim: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = playerSchema;
