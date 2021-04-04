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
    ],
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

const Monster = model('Player', monsterSchema);

module.exports = Monster;
