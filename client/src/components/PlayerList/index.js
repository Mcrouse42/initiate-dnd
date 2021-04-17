import React from "react";
import { Link } from "react-router-dom";
//import { getPlayerStatModifier } from '../../utils/getStatMod';

//import style components from material-ui
import { Grid } from '@material-ui/core';
//import style components from react-bootstrap
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlayerList = ({ players, title }) => {
  if (!players.length) {
    return <h3>No Players yet</h3>;
  }


  return (
    <div>
      <h3>Player List</h3>
      <CardDeck>
      <Grid container spacing={1} justify="center">
      {players &&
        players.map((player) => (
          <Grid item xs={12} sm={6} md={6}>
          <Card key={player._id} className="">
            <Card.Body>
            <p className="">
              <Link
                to={`/profile/${player.dungeonMaster}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {player.dungeonMaster}
              </Link>{" "}
            </p>
            
            <div className="">
              <Link to={`/player/${player._id}`}>
              </Link>
                <Card.Title className="text-center mb-3"><h2>{player.playerName}</h2></Card.Title>
              <Card.Text>
                <ListGroup>
                <ListGroupItem><h5>Player Race:</h5> {player.playerRace}</ListGroupItem>
                <ListGroupItem><h5>Player Class:</h5> {player.playerClass}</ListGroupItem>
                <ListGroupItem><h5>Player Level:</h5> {player.playerLevel}</ListGroupItem>
                <ListGroupItem><h5>Player AC:</h5> {player.playerArmorClass}</ListGroupItem>
                <ListGroupItem><h5>Player HP:</h5> {player.playerHitPoints}</ListGroupItem>
                <ListGroupItem><h5>Player STR:</h5> {player.playerStrengthStat}</ListGroupItem>
                <ListGroupItem><h5>Player DEX:</h5> {player.playerDexterityStat}</ListGroupItem>
                <ListGroupItem><h5>Player CON:</h5> {player.playerConstitutionStat}</ListGroupItem>
                <ListGroupItem><h5>Player INT:</h5> {player.playerIntelligenceStat}</ListGroupItem>
                <ListGroupItem><h5>Player WIS:</h5> {player.playerWisdomStat}</ListGroupItem>
                <ListGroupItem><h5>Player CHA:</h5> {player.playerCharismaStat}</ListGroupItem>
                </ListGroup>
              </Card.Text>
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

export default PlayerList;
