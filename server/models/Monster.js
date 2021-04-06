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
    statsModifier: [
      {
        monsterStrengthStat: {type: Number},
        monsterStrengthModifier: {type: Number}
      },
      {
        monsterDexterityStat: {type: Number},
        monsterDexterityModifier: {type: Number}
      },
      {
        monsterConstitutionStat: {type: Number},
        monsterConstitutionModifier: {type: Number}
      },
      {
        monsterIntelligenceStat: {type: Number},
        monsterIntelligenceModifier: {type: Number}
      },
      {
        monsterWisdomStat: {type: Number},
        monsterWisdomModifier: {type: Number}
      },
      {
        monsterCharismaStat: {type: Number},
        monsterCharismaModifier: {type: Number}
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

const Monster = model('Monster', monsterSchema);

module.exports = Monster;
