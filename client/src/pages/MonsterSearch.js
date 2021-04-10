import React, { useState } from 'react';
import { searchMonsterApi } from '../utils/API';
import { Form, Button, Container, Card } from 'react-bootstrap';
// import { useMutation } from '@apollo/react-hooks';
// import { saveMonsterNames, getSavedMonsterNames } from '../utils/localStorage';

// mutation not created yet 
// import { SAVE_MONSTER } from '../utils/mutations';

// auth not done yet
// import Auth from '../utils/auth';

const MonsterSearch = () => {
    // create state for holding returned monster api data
    const [searchedMonsters, setSearchedMonsters] = useState([]);

    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved monsterName values
    // const [savedMonsterNames, setSavedMonsterNames] = useState(getSavedMonsterNames());

    // const [saveMonster, { error }] = useMutation(SAVE_MONSTER);

    // set up useEffect hook to save `savedMonsterNames` list to localStorage on component unmount
    // useEffect(() => {
    //     return () => saveMonsterNames(savedMonsterNames);
    // });

    // create method to search for monsters and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchMonsterApi(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { results } = await response.json();
            const monster = results[0];
            console.log(results);
            console.log(monster);
            console.log(monster.name);

            const monsterData = results.map((monster) => ({
                monsterName: monster.name,
                monsterSize: monster.size,
                monsterType: monster.type,
                monsterAlignment: monster.alignment,
                // monsterSpeed: monster.speed,
                monsterChallenge: monster.challenge_rating,
                monsterArmorClass: monster.armor_class,
                monsterHitPoints: monster.hit_points,
                monsterStrengthStat: monster.strength,
                monsterDexterityStat: monster.dexterity,
                monsterConstitutionStat: monster.constituion,
                monsterIntelligenceStat: monster.intelligence,
                monsterWisdomStat: monster.wisdom,
                monsterCharismaStat: monster.charisma,
                // monsterActions: monster.actions
            }));

            setSearchedMonsters(monsterData);
            setSearchInput('');
            console.log(monsterData);
            } catch (err) {
            console.error(err);
        };
    }

    // function to handle saving monster to our db
    // const handleSaveMonster = async (monsterName) => {
    //     // find the book in 'searchedMonsters' state by the matching name
    //     const monsterToSave = searchedMonsters.find((monster) => monster.monsterName === monsterName);

        // get token
        // const token = Auth.loggedIn() ? Auth.getToken() : null;
        //     if (!token) {
        //         return false;
        //     }

        //     try {
        //         const { data } = await saveMonster( {variables: { monsterData: { monsterToSave } } } );

        //         // if monster successfully saves to user's account, save monster name to state
        //         setSavedMonsterNames([...savedMonsterNames, monsterToSave.monsterName]);
        //     } catch (err) {
        //         console.error(err);
        //     }
        // };

        // else {
            // searchMonsterApi(searchInput);
            // setSearchInput('');
        // }

  return (
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formMonster">
                    <Form.Label>Find a Monster</Form.Label>
                    <Form.Control
                    placeholder="Enter monster name" 
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Container>
                {searchedMonsters.map((monster) => {
                    return (
                        <Card key={monster.monsterName}>
                            <Card.Body>
                                <Card.Title>{monster.monsterName}</Card.Title>
                                <Card.Text>
                                    Size: {monster.monsterSize}{"\n"}
                                    Type: {monster.monsterType}
                                    Alignment: {monster.monsterAlignment}
                                    {/* Speed: {monster.monsterSpeed} */}
                                    Challenge: {monster.monsterChallenge}
                                    Armor Class: {monster.monsterArmorClass}
                                    Hit Points: {monster.monsterHitPoints}
                                    Strength: {monster.monsterStrengthStats}
                                    Dexterity: {monster.monsterDexterity}
                                    Constitution: {monster.monsterConstitutionStat}
                                    Intelligence: {monster.monsterIntelligenceStat}
                                    Charisma: {monster.monsterCharismaStat}
                                    {/* Actions: {monster.monsterActions} */}
                                </Card.Text>
                                {/* {Auth.loggedIn() && (
                                    <Button
                                    disabled={savedMonsterNames?.some((savedMonsterName) => savedMonsterName === monster.monsterName)}
                                    onClick={() => handleSaveMonster(monster.monsterName)}>
                                    {savedMonsterNames?.some((savedMonsterName) => savedMonsterName === monster.monsterName)
                                        ? 'This monster has already been saved!'
                                        : 'Save this Monster!'}
                                    </Button>
                                )} */}
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>

        </div>      
  );
};

export default MonsterSearch;
