// Look at the book search challenge for 3rd party
const faker = require('faker');
const db = require('../config/connection');
const { DungeonMaster, Player, Monster } = require('../models');

db.once('open', async () => {
  await DungeonMaster.deleteMany({});
  await Player.deleteMany({});
  await Monster.deleteMany({});  

  // create DM data
  const dmData = [];

  for (let i = 0; i < 5; i += 1) {
    const dungeonMaster = faker.internet.dungeonMaster();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    dmData.push({ dungeonMaster, email, password });
  }

  const createdDMs = await DungeonMaster.collection.insertMany(dmData);

  // create player data
  let createdPlayers = [];
  
  for (let i = 0; i < 20; i += 1) {
    // array of choices for random
    const classes = [ "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard" ];
    const races = [ "dragonborn", "dwarf", "elf", "gnome", "half-elf", "halfing", "half-orc", "human", "tiefling" ];
    
    // player information
    const playerName = faker.internet.userName();
    const playerClass = classes[Math.floor(Math.random() * classes.length)];
    const playerRace = races[Math.floor(Math.random() * races.length)];
    const playerLevel = Math.floor(Math.random() * (20 - 1 + 1)) + 1; //(max - min + 1)) + min
    const playerArmorClass = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const playerHitPoints = Math.floor(Math.random() * (100 - 10 + 10)) + 10; //(max - min + 1)) + min

    // assign to a DM
    const randomDMIndex = Math.floor(Math.random() * createdDMs.ops.length);
    const { dungeonMaster, _id: dungeonMasterId } = createdDMs.ops[randomDMIndex];

    // create player object
    const createdPlayer = await Player.create({ playerName, playerClass, playerRace, playerLevel, playerArmorClass, playerHitPoints, username });

    // update the DM
    const updatedDM = await DungeonMaster.updateOne(
      { _id: dungeonMasterId },
      { $push: { players: createdPlayer._id } }
    );

    // push to array
    createdPlayers.push(createdPlayer);
  }

  console.log('all done!');
  process.exit(0);
});