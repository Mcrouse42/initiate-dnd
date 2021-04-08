const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const DungeonMasterSchema = new Schema(
  {
    dungeonMaster: {      // username changed to dungeonMaster
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    players: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Player'
      }
    ],
    monsters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Monster'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
DungeonMasterSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
DungeonMasterSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

DungeonMasterSchema.virtual('playerCount').get(function() {
  return this.players.length;
});

const DungeonMaster = model('DungeonMaster', DungeonMasterSchema);

module.exports = DungeonMaster;
