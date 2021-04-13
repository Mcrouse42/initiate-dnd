import React, { useState } from 'react';
import { useMutation} from '@apollo/react-hooks';
import { ADD_PLAYER } from '../../utils/mutations';
import { QUERY_ME, QUERY_PLAYERS } from '../../utils/queries';
//import { Redirect, useParams } from 'react-router-dom';

// import { onError } from "@apollo/client/link/error";

// // Log any GraphQL errors or network error that occurred
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });


const PlayerForm = ({ dungeonMaster }) => {
    console.log(dungeonMaster);
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
    const [addPlayer, { error }] = useMutation(ADD_PLAYER, {
        update(cache, { data: { addPlayer } }) {
            console.log("Made it into add player mutation");
            try {

//                 const { data } = useQuery(QUERY_PLAYERS);

//   console.log(data);
//   const player = data?.playerName || [];
//   console.log(player);

                const { players } = cache.readQuery({ query: QUERY_PLAYERS });
                cache.writeQuery({
                    query: QUERY_PLAYERS,
                    data: {}
                })
            } catch (e) {
                console.error(e);
            }
            // update me object's cache, appending new thought to the end of the array
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, players: [...me.players, addPlayer] } }
            });
        }
    });
    
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        //console.log(event);
    };

    // submit form (async)
    const handleFormSubmit = async event => {
        event.preventDefault();

        console.log("button to create new player pressed");
        console.log(formState);

        try {
            //const { data } = 
            await addPlayer({
                variables: { ...formState, dungeonMaster }
                
            });
            //console.log(variables);
            
        } catch (e) {
            console.error(e)
        }
    };


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
                <form onSubmit={handleFormSubmit}>
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
                    <button className='btn d-block w-100' type='submit'>
                        Add Player!
                    </button>
                </form>
                {error && <div>Add Player Failed :(</div>}
        </div>
    );

};

export default PlayerForm;