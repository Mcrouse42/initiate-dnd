// import general
import React, { useEffect, useState } from 'react';
import { useMutation} from '@apollo/react-hooks';
import { QUERY_ME, QUERY_PLAYERS } from '../../utils/queries';
import { Button } from 'react-bootstrap';
import { savePlayerNames, getSavedPlayerNames } from '../../utils/localStorage';

// mutation to add player
import { ADD_PLAYER } from '../../utils/mutations';

// auth to make sure logged in
import Auth from '../../utils/auth';

const PlayerForm = () => {
    
    // create state for holding returned player data
    const [searchedPlayers, setSearchedPlayers] = useState([]);

    // set up that variables that are referenced in the form
    const [formState, setFormState] = useState({
        playerName: '',
        playerLevel: '',
        playerArmorClass: '',
        playerHitPoints: '',
        playerStrengthStat: '',
        playerDexterityStat: '',
        playerConstitutionStat: '',
        playerIntelligenceStat: '',
        playerWisdomStat: '',
        playerCharismaStat: ''
    });

    // create state to hold saved monsterName values
    const [savedPlayerNames, setSavedPlayerNames] = useState(getSavedPlayerNames());

    // mutation not created yet 
    const [addPlayer, { error }] = useMutation(ADD_PLAYER);

    // set up useEffect hook to save `savedMonsterNames` list to localStorage on component unmount
    useEffect(() => {
        return () => savePlayerNames(savedPlayerNames);
    });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        
    };

    // submit form (async)
    const handleFormSubmit = async (formState) => {
        //event.preventDefault();

        console.log("button to create new player pressed");
        console.log(formState);

        console.log(formState.playerName,
            formState.playerClass,
            formState.playerRace,
            parseInt(formState.playerLevel),
            parseInt(formState.playerArmorClass),
            parseInt(formState.playerHitPoints),
            parseInt(formState.playerStrengthStat),
            parseInt(formState.playerDexterityStat),
            parseInt(formState.playerConstitutionStat),
            parseInt(formState.playerIntelligenceStat),
            parseInt(formState.playerWisdomStat),
            parseInt(formState.playerCharismaStat)
        );

        const playerData = [{
            playerName: formState.playerName,
            playerClass: formState.playerClass,
            playerRace: formState.playerRace,
            playerLevel: parseInt(formState.playerLevel),
            playerArmorClass: parseInt(formState.playerArmorClass),
            playerHitPoints: parseInt(formState.playerHitPoints),
            playerStrengthStat: parseInt(formState.playerStrengthStat),
            playerDexterityStat: parseInt(formState.playerDexterityStat),
            playerConstitutionStat: parseInt(formState.playerConstitutionStat),
            playerIntelligenceStat: parseInt(formState.playerIntelligenceStat),
            playerWisdomStat: parseInt(formState.playerWisdomStat),
            playerCharismaStat: parseInt(formState.playerCharismaStat)
        }];

       //const playerData = formState;
        console.log(playerData[0]);

        //setSearchedPlayers(playerData);
        //console.log(playerData);
        //setFormState('');


        // find the monster in 'searchedMonsters' state by the matching name
        // const playerToSave = searchedPlayers.find(playerData);
        // console.log(playerToSave);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
            console.log("Check for token reached");

            if (!token) {
                return false;
            }
            console.log("token good, user logged in");
            try {
                const finalPlayerData = playerData[0];
                console.log(finalPlayerData);
                const { data } = await addPlayer( { variables: {  playerData: finalPlayerData  } } );
                //const { data } = await addPlayer( { variables: {  playerData: {finalPlayerData } } } );
                
                // if monster successfully saves to user's account, save monster name to state
                //setSavedMonsterNames([...savedMonsterNames, monsterToSave.monsterName]);
            } catch (err) {
                console.error(err);
            }

        // const playerData = results.map((player) => ({
        //     playerName: player.playerName,
        //     playerLevel: '',
        //     playerArmorClass: '',
        //     playerHitPoints: '',
        //     playerStrengthStat: '',
        //     playerDexterityStat: '',
        //     playerConstitutionStat: '',
        //     playerIntelligenceStat: '',
        //     playerWisdomStat: '',
        //     playerCharismaStat:
        // }))

        // get token
        // const token = Auth.loggedIn() ? Auth.getToken() : null;
        //     if (!token) {
        //         return false;
        //     }

        //     try {
        //         const { data } = await addPlayer( { variables: { playerData: {formState } } } );

        //         // if monster successfully saves to user's account, save monster name to state
        //         //setSavedMonsterNames([...savedMonsterNames, monsterToSave.monsterName]);
        //     } catch (err) {
        //         console.error(err);
        //     }
    };

    //     try {
    //         //const { data } = 
    //         await addPlayer({
    //             variables: { ...formState, dungeonMaster }
                
    //         });
    //         //console.log(variables);
            
    //     } catch (e) {
    //         console.error(e)
    //     }
    // };


//     const { dungeonMaster: userParam } = useParams();

//     const {data } = useQuery(userParam ? QUERY_DM : QUERY_ME, {
//         variables: { dungeonMaster: userParam }
//     });
//   //console.log("data", data);
//   //console.log("data.me", data.me);

//   const dungeonMaster = data?.me || data?.dungeonMaster || {};
//   console.log(dungeonMaster);

//   // redirect to personal profile page if username is the logged-in user's
//   if (Auth.loggedIn() && Auth.getProfile().data.dungeonMaster === userParam) {
//     return <Redirect to="/profile" />;
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
        <div className="col-12 mb-3 col-lg-8">
            <h2>Enter A New Player</h2>
                <form>
                    <label htmlFor="playerName">Player Name:</label>
                    <input
                        className='form-input'
                        placeholder="Lars Cenny"
                        name="playerName"
                        type="text"
                        id="playerName"
                        value={formState.playerName}
                        onChange={handleChange}                       
                    />
                    <label htmlFor="playerRace">Player Race:</label>
                    <input
                        className='form-input'
                        placeholder="Dragonborn"
                        name="playerRace"
                        type="text"
                        id="playerRace"
                        value={formState.playerRace}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerClass">Player Class:</label>
                    <input
                        className='form-input'
                        placeholder="Rogue"
                        name="playerClass"
                        type="text"
                        id="playerClass"
                        value={formState.playerClass}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerLevel">Player Level:</label>
                    <input
                        className='form-input'
                        placeholder="3"
                        name="playerLevel"
                        type="number"
                        id="playerLevel"
                        value={formState.playerLevel}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerArmorClass">Player Armor Class:</label>
                    <input
                        className='form-input'
                        placeholder="12"
                        name="playerArmorClass"
                        type="number"
                        id="playerArmorClass"
                        value={formState.playerArmorClass}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerHitPoints">Player Hit Points:</label>
                    <input
                        className='form-input'
                        placeholder="19"
                        name="playerHitPoints"
                        type="number"
                        id="playerHitPoints"
                        value={formState.playerHitPoints}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerStrengthStat">Player Strength:</label>
                    <input
                        className='form-input'
                        placeholder="14"
                        name="playerStrengthStat"
                        type="number"
                        id="playerStrengthStat"
                        value={formState.playerStrengthStat}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerDexterityStat">Player Dexterity:</label>
                    <input
                        className='form-input'
                        placeholder="12"
                        name="playerDexterityStat"
                        type="number"
                        id="playerDexterityStat"
                        value={formState.playerDexterityStat}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerConstitutionStat">Player Constitution:</label>
                    <input
                        className='form-input'
                        placeholder="11"
                        name="playerConstitutionStat"
                        type="number"
                        id="playerConstitutionStat"
                        value={formState.playerConstitutionStat}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerIntelligenceStat">Player Intelligence:</label>
                    <input
                        className='form-input'
                        placeholder="12"
                        name="playerIntelligenceStat"
                        type="number"
                        id="playerIntelligenceStat"
                        value={formState.playerIntelligenceStat}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerWisdomStat">Player Wisdom:</label>
                    <input
                        className='form-input'
                        placeholder="13"
                        name="playerWisdomStat"
                        type="number"
                        id="playerWisdomStat"
                        value={formState.playerWisdomStat}
                        onChange={handleChange}
                    />
                    <label htmlFor="playerCharismaStat">Player Charisma:</label>
                    <input
                        className='form-input'
                        placeholder="14"
                        name="playerCharismaStat"
                        type="number"
                        id="playerCharismaStat"
                        value={formState.playerCharismaStat}
                        onChange={handleChange}
                    />
                    {Auth.loggedIn() && (
                        <Button
                        onClick={() => handleFormSubmit(formState)}>
                            Add Player!
                        </Button>
                    )}
                    {/* <button className='btn d-block w-100' type='submit'>
                        Add Player!
                    </button> */}
                </form>
                {error && <div>Add Player Failed :(</div>}
        </div>
    );

};

export default PlayerForm;