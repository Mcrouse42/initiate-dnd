import React from "react";
import { Link } from "react-router-dom";
import { getPlayerStatModifier } from '../../utils/getStatMod';

const PlayerList = ({ players, title }) => {
  if (!players.length) {
    return <h3>No Players yet</h3>;
  }

  // send all players data to function which will take the stats and send back the stats plus the modifiers
  getPlayerStatModifier(players);

  return (
    <div>
      <h3>Player List</h3>
      {players &&
        players.map((player) => (
          <div key={player._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${player.dungeonMaster}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {player.dungeonMaster}
              </Link>{" "}
              player created on {player.createdAt}
            </p>

            <div className="card-body">
              <Link to={`/player/${player._id}`}>
                {/* <p>{player.playerName}</p> */}
              </Link>
              <div className="card mb-3">
                <h2>{player.playerName}</h2>
                <p>Player Race: {player.playerRace}</p>
                <p>Player Class: {player.playerClass}</p>
                <p>Player Level: {player.playerLevel}</p>
                <p>Player AC: {player.playerArmorClass}</p>
                <p>Player HP: {player.playerHitPoints}</p>
                <p>Player STR: {player.playerStrengthStat}</p>
                <p>Player DEX: {player.playerDexterityStat}</p>
                <p>Player CON: {player.playerConstitutionStat}</p>
                <p>Player INT: {player.playerIntelligenceStat}</p>
                <p>Player WIS: {player.playerWisdomStat}</p>
                <p>Player CHA: {player.playerCharismaStat}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlayerList;
