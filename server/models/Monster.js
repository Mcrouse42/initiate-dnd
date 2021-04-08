const { Schema, model } = require('mongoose');

const monsterSchema = new Schema(
  {
    monsterName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    monsterSize: {
      type: String,
      required: true,
      trim: true
    },
    monsterType: {
      type: String,
      required: true,
      trim: true
    },
    monsterAlignment: {
      type: String,
      required: true,
      trim: true
    },
    monsterSpeed: [{
      speedType: {type: String},
      speedValue: {type: String}
    }],
    monsterChallenge: {
      type: Number,
      required: true,
      trim: true
    },
    monsterArmorClass: {
      type: Number,
      required: true,
      trim: true
    },
    monsterHitPoints: {
      type: Number,
      required: true,
      trim: true
    },
    monsterStrengthStat: {
      type: Number,
      required: true,
      trim: true
    },
    monsterDexterityStat: {
      type: Number,
      required: true,
      trim: true
    },
    monsterConstitutionStat: {
      type: Number,
      required: true,
      trim: true
    },
    monsterIntelligenceStat: {
      type: Number,
      required: true,
      trim: true
    },
    monsterWisdomStat: {
      type: Number,
      required: true,
      trim: true
    },
    monsterCharismaStat: {
      type: Number,
      required: true,
      trim: true
    },
    monsterActions: [{
      name: {type: String},
      description: {type: String}
    }]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Monster = model('Monster', monsterSchema);

module.exports = Monster;
