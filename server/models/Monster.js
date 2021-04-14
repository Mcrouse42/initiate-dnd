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
    // changing speed to just walking speed for now
    monsterSpeed: {
      type: Number,
      trim: true
      // speedType: {type: String},
      // speedValue: {type: String}
    },
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
      actionName: {type: String},
      actionDesc: {type: String},
      actionAttack: {type: Number},
      actionDamageDice: {type: String},
      actionDamageBonus: {type: Number}
    }]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// const Monster = model('Monster', monsterSchema);

module.exports = monsterSchema;
