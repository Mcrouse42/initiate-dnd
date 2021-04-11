// const modifierArray = [
//     {stat: 1, modifier: "-5"},
//     {stat: 2, modifier: "-4"},
//     {stat: 3, modifier: "-4"},
//     {stat: 4, modifier: "-3"},
//     {stat: 5, modifier: "-3"},
//     {stat: 6, modifier: "-2"},
//     {stat: 7, modifier: "-2"},
//     {stat: 8, modifier: "-1"},
//     {stat: 9, modifier: "-1"},
//     {stat: 10, modifier: "+0"},
//     {stat: 11, modifier: "+0"},
//     {stat: 12, modifier: "+1"},
//     {stat: 13, modifier: "+1"},
//     {stat: 14, modifier: "+2"},
//     {stat: 15, modifier: "+2"},
//     {stat: 16, modifier: "+3"},
//     {stat: 17, modifier: "+3"},
//     {stat: 18, modifier: "+4"},
//     {stat: 19, modifier: "+4"},
//     {stat: 20, modifier: "+5"},
//     {stat: 21, modifier: "+5"},
//     {stat: 22, modifier: "+6"},
//     {stat: 23, modifier: "+6"},
//     {stat: 24, modifier: "+7"},
//     {stat: 25, modifier: "+7"},
//     {stat: 26, modifier: "+8"},
//     {stat: 27, modifier: "+8"},
//     {stat: 28, modifier: "+9"},
//     {stat: 29, modifier: "+9"},
//     {stat: 30, modifier: "+10"}
// ];


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
            //console.log(modifierVal);
            //console.log(currentStat);

            // var testmod = modifierArray.filter(function( obj ) {
            //     return obj.stat === currentStat;
            // }).map(function( obj ) {
            //     return obj.modifier;
            // });

            // console.log(testmod);
            // //const final = currentStat.concat(testmod[0]);
            // //console.log(final);
            // const mod42565 = testmod[0];
            // console.log(mod42565);
            // console.log(currentStat);

            //let modifierValString = currentStat + '';
            //console.log(modifierValString);
            
            //const final = (currentStat + modifierValString);
            //console.log(currentStat);
            const final = (currentStat + " " + "[" +  modifierVal + "]");
            //console.log(final);

            modifiedStat.push(final);

        });

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