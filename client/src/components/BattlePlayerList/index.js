import React, { useState, useEffect } from "react";
import Modal from "../Modal";

const BattlePlayerList = (props) => {
    const [modelStatus, setModalStatus] = useState({ show: false });
    const [playersArray, setPlayersArray] = useState(props.players);

    let givePlayersInit = () => {
        let playerInitMap = playersArray.map(player => {
            player.initiative = 0;
            return player
        });

        setPlayersArray(playerInitMap);
    }

    useEffect(() => {
        givePlayersInit();
    }, []);

  let showModal = () => {
    setModalStatus({ show: true });
  };

  let hideModal = () => {
      setModalStatus({ show: false });
  };

  // ZK ATTEMPTS:

//   let mySortFunction = (playersArray) => {
//     let a = a.player;
//     let b = b.player;
//     playersArray.sort((a, b) => (b.initiative - a.initiative));
//     console.log('my SortFunction');
// };

const mySortFunction = () => {
        console.log(document.getElementById('initiative').value);
        let initiatve = document.getElementById('initiative').value;
        playersArray.sort(function(a, b) {
        return a.initiative - b.initiative;
    });
};


return (
    <div>
      {playersArray.map((player) => (
        <div key={player._id} className="card mb-3">
          <p className="card-header">
            <h2>
              {player.playerName}
              <span onClick={showModal}> + </span>
                      <input id="initiative" onChange={mySortFunction} placeholder="initiative number" />
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