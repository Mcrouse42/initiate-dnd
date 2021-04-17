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
        playerClass: '',
        playerRace: '',
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
        for (const [key, value] of Object.entries(formState)) {
            console.log(`${key}: ${value}`);
            console.log(typeof(value));
        }

        const playerData = {
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
        };

        console.log("------------------------------------------------");
        for (const [key, value] of Object.entries(playerData)) {
            console.log(`${key}: ${value}`);
            console.log(typeof(value));
        }

       //const playerData = formState;
        console.log(playerData);
        console.log(typeof(playerData));

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
            console.log("Check for token reached");

            if (!token) {
                return false;
            }
            console.log("token good, user logged in");
            try {
                const finalPlayerData = playerData;
                console.log(finalPlayerData);
                console.log(typeof(finalPlayerData));
                await addPlayer( { variables: {  playerData: finalPlayerData  } } );
            } catch (err) {
                console.error(err);
            }
    };

    return (
        <div className="col-12 mb-3 col-lg-8">
            <h2 className="text-primary">Enter A New Player</h2>
                <form>
                    <label className="form-label" htmlFor="playerName">Player Name:</label>
                    <input
                        className='form-input'
                        placeholder="Lars Cenny"
                        name="playerName"
                        type="text"
                        id="playerName"
                        value={formState.playerName}
                        onChange={handleChange}                       
                    />
                    <label className="form-label" htmlFor="playerRace">Player Race:</label>
                    <input
                        className='form-input'
                        placeholder="Dragonborn"
                        name="playerRace"
                        type="text"
                        id="playerRace"
                        value={formState.playerRace}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerClass">Player Class:</label>
                    <input
                        className='form-input'
                        placeholder="Rogue"
                        name="playerClass"
                        type="text"
                        id="playerClass"
                        value={formState.playerClass}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerLevel">Player Level:</label>
                    <input
                        className='form-input'
                        placeholder="3"
                        name="playerLevel"
                        type="number"
                        id="playerLevel"
                        value={formState.playerLevel}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerArmorClass">Player Armor Class:</label>
                    <input
                        className='form-input'
                        placeholder="12"
                        name="playerArmorClass"
                        type="number"
                        id="playerArmorClass"
                        value={formState.playerArmorClass}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerHitPoints">Player Hit Points:</label>
                    <input
                        className='form-input'
                        placeholder="19"
                        name="playerHitPoints"
                        type="number"
                        id="playerHitPoints"
                        value={formState.playerHitPoints}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerStrengthStat">Player Strength:</label>
                    <input
                        className='form-input'
                        placeholder="14"
                        name="playerStrengthStat"
                        type="number"
                        id="playerStrengthStat"
                        value={formState.playerStrengthStat}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerDexterityStat">Player Dexterity:</label>
                    <input
                        className='form-input'
                        placeholder="12"
                        name="playerDexterityStat"
                        type="number"
                        id="playerDexterityStat"
                        value={formState.playerDexterityStat}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerConstitutionStat">Player Constitution:</label>
                    <input
                        className='form-input'
                        placeholder="11"
                        name="playerConstitutionStat"
                        type="number"
                        id="playerConstitutionStat"
                        value={formState.playerConstitutionStat}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerIntelligenceStat">Player Intelligence:</label>
                    <input
                        className='form-input'
                        placeholder="12"
                        name="playerIntelligenceStat"
                        type="number"
                        id="playerIntelligenceStat"
                        value={formState.playerIntelligenceStat}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerWisdomStat">Player Wisdom:</label>
                    <input
                        className='form-input'
                        placeholder="13"
                        name="playerWisdomStat"
                        type="number"
                        id="playerWisdomStat"
                        value={formState.playerWisdomStat}
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="playerCharismaStat">Player Charisma:</label>
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
                </form>
                {error && <div className="text-primary">Add Player Failed :(</div>}
        </div>
    );

};

export default PlayerForm;