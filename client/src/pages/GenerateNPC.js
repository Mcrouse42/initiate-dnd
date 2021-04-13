import React from 'react';
// import BattlePlayerList from "../components/BattlePlayerList";
// import { Redirect, useParams } from 'react-router-dom';

// //import PlayerForm from '../components/PlayerForm';

// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_DM, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';
// //import { Player } from '../../../server/models';

const GenerateNPC = () => {
    const classes = [
        "barbarian",
        "bard",
        "cleric",
        "druid",
        "fighter",
        "monk",
        "paladin",
        "ranger",
        "rogue",
        "sorcerer",
        "warlock",
        "wizard",
    ];
    const races = [
        "dragonborn",
        "dwarf",
        "elf",
        "gnome",
        "half-elf",
        "halfing",
        "half-orc",
        "human",
        "tiefling",
    ];
    const firstName = [
        "Argo",
        "Senic",
        "Elbane",
        "Irina",
        "Nilex",
        "Cornelius",
        "Kenton",
        "Loxie",
        "Jairo",
        "Laharo",
        "Jinn",
        "Valiant"
    ];
    const lastName = [
        "Grassdaft",
        "Havenglow",
        "Darkwind",
        "Whitetree",
        "Winterspear",
        "Mildcrest",
        "Morninghand",
        "Cliffwhirl",
        "Helltoe",
        "Rainslicer"
    ];
    const alignment = [
        "Lawful Good (Hero)",
        "Lawful Neutral (Judge)",
        "Lawful Evil (Tyrant)",
        "Neutral Good (Innocent)",
        "True Neutral (Peaceful)",
        "Neutral Evil (Sociopath)",
        "Chaotic Good (Vigilant)",
        "Chaotic Neutral (Free Spirit)",
        "Chaotic Evil (Tyrant)"
    ]
    const descriptionSex = [
        "Male",
        "Female",
        "Non-Binary"
    ];
    const descriptionEyeColor = [
        "Yellow",
        "Red",
        "Orange",
        "Green",
        "Blue",
        "Black",
        "Brown",
        "Hazel",
        "Gold"
    ];
    const PersonalityNegative = [
        ""
    ]


  
      // player information
      //const playerName = faker.internet.userName();
      const playerClass = classes[Math.floor(Math.random() * classes.length)];
      const playerRace = races[Math.floor(Math.random() * races.length)];
      const playerLevel = Math.floor(Math.random() * (20 - 1 + 1)) + 1; //(max - min + 1)) + min
      const playerArmorClass = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerHitPoints = Math.floor(Math.random() * (100 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerStrengthStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerDexterityStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerConstitutionStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerIntelligenceStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerWisdomStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
      const playerCharismaStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
  

















    //   const { dungeonMaster: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_DM : QUERY_ME, {
//     variables: { dungeonMaster: userParam }
//   });
//   //console.log("data", data);
//   //console.log("data.me", data.me);

//   const dungeonMaster = data?.me || data?.dungeonMaster || {};
//   //console.log(dungeonMaster);

//   // redirect to personal profile page if username is the logged-in user's
//   if (Auth.loggedIn() && Auth.getProfile().data.dungeonMaster === userParam) {
//     return <Redirect to="/profile" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!dungeonMaster?.dungeonMaster) {
//     return (
//       <h4>
//         You need to be logged in to see this page. Use the navigation links above to sign up or log in!
//       </h4>
//     );
//   }
//   console.log(dungeonMaster.dungeonMaster);
//   console.log(dungeonMaster.players);
  
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Random NPC Generator!
        </h2>
      </div>

      {/* <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <BattlePlayerList
            players={dungeonMaster.players}
          />
          </div>
        </div> */}
        
      </div>
  
  );
};

export default GenerateNPC;
