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

            const monsterData = results.map((monster) => ({
                monsterName: monster.name,
                monsterSize: monster.size,
                monsterType: monster.type,
                monsterAlignment: monster.alignment,
                // speed is an object - using only walk for now
                monsterSpeed: monster.speed.walk,
                monsterChallenge: parseInt(monster.challenge_rating),
                monsterArmorClass: monster.armor_class,
                monsterHitPoints: monster.hit_points,
                monsterStrengthStat: parseInt(monster.strength),
                monsterDexterityStat: parseInt(monster.dexterity),
                monsterConstitutionStat: monster.constitution,
                monsterIntelligenceStat: monster.intelligence,
                monsterWisdomStat: monster.wisdom,
                monsterCharismaStat: monster.charisma,
                // actions to be added at a later time/future development
                // monsterActions: monster.actions.map((actions) => ({
                //     actionName: actions?.name,
                //     actionDesc: actions?.desc,
                //     actionAttack: actions?.attack_bonus,
                //     actionDamageDice: actions?.damage_dice,
                //     actionDamageBonus: actions?.damage_bonus
                // }))
            }));

            setSearchedMonsters(monsterData);
            setSearchInput('');
            } catch (err) {
            console.error(err);
        };
    }

    // function to handle saving monster to our db
    const handleSaveMonster = async (monsterName) => {
        // find the monster in 'searchedMonsters' state by the matching name
        const monsterToSave = searchedMonsters.find((monster) => monster.monsterName === monsterName);

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
        <div className="">
            <div className="form">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formMonster">
                    <Form.Label><h3 className="text-primary">Find a Monster</h3></Form.Label>
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
            </div>
            
            <div>
            <CardDeck>
                <Grid container spacing={2} justify="center">
                {searchedMonsters.map((monster, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                        <Card className="card" key={monster.monsterName}>
                            <CardImg className="card-img" src={`./images/${monster.monsterType}.png`}></CardImg>
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
                                    <ListGroup.Item><h5>Strength:</h5> {monster.monsterStrengthStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Dexterity:</h5> {monster.monsterDexterityStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Constitution:</h5> {monster.monsterConstitutionStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Intelligence:</h5> {monster.monsterIntelligenceStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Charisma:</h5> {monster.monsterCharismaStat}</ListGroup.Item>
                                    <ListGroup.Item><h5>Wisdom:</h5> {monster.monsterWisdomStat}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                {Auth.loggedIn() && (
                                    <Button
                                    disabled={savedMonsterNames?.some((savedMonsterName) => savedMonsterName === monster.monsterName)}
                                    onClick={() => handleSaveMonster(monster.monsterName)}>
                                    Save this Monster!
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
