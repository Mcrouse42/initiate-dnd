import React, { useEffect, useState } from 'react';
import { searchMonsterApi } from '../utils/API';
import { Form, Button, Container, Card, CardDeck, ListGroup, Table, CardImg } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { saveMonsterNames, getSavedMonsterNames } from '../utils/localStorage';

//import style components from material-ui
import { Grid } from '@material-ui/core';

// mutation not created yet 
import { SAVE_MONSTER } from '../utils/mutations';

// auth not done yet
import Auth from '../utils/auth';

const MonsterSearch = () => {
    // create state for holding returned monster api data
    const [searchedMonsters, setSearchedMonsters] = useState([]);

    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved monsterName values
    const [savedMonsterNames, setSavedMonsterNames] = useState(getSavedMonsterNames());

    // mutation not created yet 
    const [saveMonster, { error }] = useMutation(SAVE_MONSTER);

    // set up useEffect hook to save `savedMonsterNames` list to localStorage on component unmount
    useEffect(() => {
        return () => saveMonsterNames(savedMonsterNames);
    });

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

            const monsterData = results.map((monster) => ({
                monsterName: monster.name,
                monsterSize: monster.size,
                monsterType: monster.type,
                monsterImg: `../style/images/${monster.type}.png`,
                monsterAlignment: monster.alignment,
                // speed is an object - using only walk for now
                monsterSpeed: monster.speed.walk,
                monsterChallenge: parseInt(monster.challenge_rating),
                monsterArmorClass: monster.armor_class,
                monsterHitPoints: monster.hit_points,
                monsterStrengthStat: monster.strength,
                monsterDexterityStat: monster.dexterity,
                monsterConstitutionStat: monster.constitution,
                monsterIntelligenceStat: monster.intelligence,
                monsterWisdomStat: monster.wisdom,
                monsterCharismaStat: monster.charisma,
                // monsterActions: monster.actions.map((actions) => ({
                //     actionName: actions?.name,
                //     actionDesc: actions?.desc,
                //     actionAttack: actions?.attack_bonus,
                //     actionDamageDice: actions?.damage_dice,
                //     actionDamageBonus: actions?.damage_bonus
                // }))
            }));

            setSearchedMonsters(monsterData);
            console.log(monsterData);
            setSearchInput('');
            } catch (err) {
            console.error(err);
        };
    }

    // function to handle saving monster to our db
    const handleSaveMonster = async (monsterName) => {
        // find the monster in 'searchedMonsters' state by the matching name
        const monsterToSave = searchedMonsters.find((monster) => monster.monsterName === monsterName);
        console.log(monsterToSave);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
            if (!token) {
                return false;
            }

            try {
                const { data } = await saveMonster( { variables: { monsterData: {...monsterToSave } } } );

                // if monster successfully saves to user's account, save monster name to state
                setSavedMonsterNames([...savedMonsterNames, monsterToSave.monsterName]);
            } catch (err) {
                console.error(err);
            }
        };

  return (
        <div className="container flex-row align-center justify-center align-center">
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
            
            <div>
            <CardDeck>
                <Grid container spacing={2} justify="center">
                {searchedMonsters.map((monster, index) => {
                    return (
                        <Grid item>
                        <Card className="card" key={monster.monsterName}>
                            <CardImg className="justify-center align-center" src={`./images/${monster.monsterType}.png`}></CardImg>
                            <Card.Body class="card-body">
                                <Card.Title class="card-title"><h2 className="text-center">{monster.monsterName}</h2></Card.Title>
                                <Card.Text>
                                    <ListGroup key={`monster-stats-${index}`}>
                                    <ListGroup.Item><h5>Size:</h5> {monster.monsterSize}</ListGroup.Item>
                                    <ListGroup.Item><h5>Type:</h5> {monster.monsterType}</ListGroup.Item>
                                    <ListGroup.Item><h5>Alignment:</h5> {monster.monsterAlignment}</ListGroup.Item>
                                    <ListGroup.Item><h5>Walking Speed:</h5> {monster.monsterSpeed}</ListGroup.Item>
                                    <ListGroup.Item><h5>Challenge:</h5> {monster.monsterChallenge}</ListGroup.Item>
                                    <ListGroup.Item><h5>Armor Class:</h5> {monster.monsterArmorClass}</ListGroup.Item>
                                    <ListGroup.Item><h5>Hit Points:</h5> {monster.monsterHitPoints}</ListGroup.Item>
                                    <ListGroup.Item><h5>Strength:</h5> {monster.monsterStrengthStats}</ListGroup.Item>
                                    <ListGroup.Item><h5>Dexterity:</h5> {monster.monsterDexterity}</ListGroup.Item>
                                    <ListGroup.Item><h5>Constitution:</h5> {monster.monsterConstitutionStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Intelligence:</h5> {monster.monsterIntelligenceStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Charisma:</h5> {monster.monsterCharismaStat}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                {/* <Table bordered size="sm">
                                    <thead>
                                        <tr>
                                        <th>Action</th>
                                        <th>Description</th>
                                        <th>Attack Bonus</th>
                                        <th>Damange Dice</th>
                                        <th>Damage Bonus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {monster.monsterActions.map((action) => {
                                        return (
                                            <tr>
                                            <td>{action.actionName}</td>
                                            <td>{action.actionDesc}</td>
                                            <td>{action.actionAttack}</td>
                                            <td>{action.actionDamageDice}</td>
                                            <td>{action.actionDamageBonus}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table> */}
                                {Auth.loggedIn() && (
                                    <Button
                                    disabled={savedMonsterNames?.some((savedMonsterName) => savedMonsterName === monster.monsterName)}
                                    onClick={() => handleSaveMonster(monster.monsterName)}>
                                    {savedMonsterNames?.some((savedMonsterName) => savedMonsterName === monster.monsterName)
                                        ? 'This monster has already been saved!'
                                        : 'Save this Monster!'}
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                        </Grid>
                    )
                })}
                </Grid>
            </CardDeck>
            </div>

        </div>      
  );
};

export default MonsterSearch;
