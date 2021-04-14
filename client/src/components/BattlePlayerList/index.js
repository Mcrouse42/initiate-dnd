import React, { useState } from "react";
import Modal from "../Modal";
const BattlePlayerList = (props) => {
  const [modelStatus, setModalStatus] = useState({ show: false });
  let showModal = () => {
    setModalStatus({ show: true });
  };
  let hideModal = () => {
      setModalStatus({ show: false });
  };
    
    
  return (
    <div>
      {props.players.map((player) => (
        <div key={player._id} className="card mb-3">
          <p className="card-header">
            <h2>
              {player.playerName}
              <span onClick={showModal}> + </span>
              <input id="initiative" />
            </h2>
            <Modal show={modelStatus.show} handleClose={hideModal}>
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
            </Modal>
          </p>
          <div className="card-body">
            <div className="card mb-3">
              <p>Player AC: {player.playerArmorClass}</p>
              <form>
                <label htmlFor="playerHitPoints">Player HP:</label>
                <input
                  id="playerHitPoints"
                  placeholder={player.playerHitPoints}
                  input="number"
                />
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BattlePlayerList;
