export const getPlayerStatModifier = (players) => {
    //console.log(players);
    // loop through each individual player in the players incoming array of objects
    players.forEach(player => {
        
        // set up an array to map through the 6 stats
        let STR = player.playerStrengthStat;
        let DEX = player.playerDexterityStat;
        let CON = player.playerConstitutionStat;
        let INT = player.playerIntelligenceStat;
        let WIS = player.playerWisdomStat;
        let CHA = player.playerCharismaStat;
        
        let unModified = [STR, DEX, CON, INT, WIS, CHA];

        // empty array to store the modified stats
        let modifiedStat = [];

        // for each of the unnmodified stats, find the corresponding modifier
        unModified.forEach(currentStat => {

            // math to find the modifier
            const modifierVal = Math.floor((currentStat - 10)/2);
            console.log(modifierVal);
            const final = `${currentStat} 10`;
            //console.log(final);

            modifiedStat.push(final);

        });
        console.log(modifiedStat[0]);

        player.playerStrengthStat = modifiedStat[0];
        player.playerDexterityStat = modifiedStat[1];
        player.playerConstitutionStat = modifiedStat[2];
        player.playerIntelligenceStat = modifiedStat[3];
        player.playerWisdomStat = modifiedStat[4];
        player.playerCharismaStat = modifiedStat[5];

        console.log(player);
    });
    
};

export const getMonsterStatModifier = () => {
    return "monster Stat Mod Reached"
};