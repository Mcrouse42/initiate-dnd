import React from 'react';
import { Link } from 'react-router-dom';

//import style components
import { Grid } from '@material-ui/core';
import { CardDeck, Card, ListGroup, ListGroupItem, CardImg } from 'react-bootstrap';

const MonsterList = ({ monsters, title }) => {
    if (!monsters.length) {
        return <h3>No Monsters yet</h3>
    }

    return (
        <div>
          <h3>Monster List</h3>
          <CardDeck>
          <Grid container spacing={1} justify="center">
          {monsters &&
            monsters.map((monster) => (
              <Grid item xs={12} sm={6} md={6}>
              <Card key={monster.monsterName} className="card mb-3">    
              <CardImg className="card-img" src={`./images/${monster.monsterType}.png`}></CardImg>
                <Card.Body className="card-body">
                  <div className="">
                    <Card.Title className="text-center"><h2>{monster.monsterName}</h2></Card.Title>
                    <ListGroup>
                    <ListGroupItem><h5>Size:</h5> {monster.monsterSize}</ListGroupItem>
                    <ListGroupItem><h5>Type:</h5> {monster.monsterType}</ListGroupItem>
                    <ListGroupItem><h5>Alignment:</h5> {monster.monsterAlignment}</ListGroupItem>
                    <ListGroupItem><h5>Walking Speed:</h5> {monster.monsterSpeed}</ListGroupItem>
                    <ListGroupItem><h5>Challenge:</h5> {monster.monsterChallenge}</ListGroupItem>
                    <ListGroupItem><h5>Armor Class:</h5> {monster.monsterArmorClass}</ListGroupItem>
                    <ListGroupItem><h5>Hit Points:</h5> {monster.monsterHitPoints}</ListGroupItem>
                    <ListGroupItem><h5>Strength:</h5> {monster.monsterStrengthStat}</ListGroupItem>
                    <ListGroupItem><h5>Dexterity:</h5> {monster.monsterDexterityStat}</ListGroupItem>
                    <ListGroupItem><h5>Constitution:</h5> {monster.monsterConstitutionStat}</ListGroupItem>
                    <ListGroupItem><h5>Intelligence:</h5> {monster.monsterIntelligenceStat}</ListGroupItem>
                    <ListGroupItem><h5>Wisdom:</h5> {monster.monsterWisdomStat}</ListGroupItem>
                    <ListGroupItem><h5>Charisma:</h5> {monster.monsterCharismaStat}</ListGroupItem>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
              </Grid>
            ))}
            </Grid>
            </CardDeck>
        </div>
      );
};

export default MonsterList;