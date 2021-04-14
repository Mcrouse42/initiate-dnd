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
  
    // let updatePlayerInit = (playerNameValue, updatedInitValue) => {
    //   playersArray.map((player) => {
    //     if (playerNameValue === player.playerName) {
    //       player.initative = updatedInitValue;
    //     }
    //     return player;
    //   });

      let showModal = () => {
        setModalStatus({ show: true });
      };
      let hideModal = () => {
        setModalStatus({ show: false });
      };

      // let mySortFunction = () => {
      //     playersArray.sort((a, b) => (b.intiative - a.initiative))
      // };

    //   function mySortFunction(a, b) {
    //     if (a.initative < b.initative) {
    //       return -1;
    //     }
    //     if (a.initative > b.initative) {
    //       return 1;
    //     }
    //     return 0;
    //   }
    //     playersArray.sort(mySortFunction);
    // };

return (
    <div>
      {playersArray.map((player) => (
        <div key={player._id} className="card mb-3">
          <p className="card-header">
            <h2>
              {player.playerName}
              <span onClick={showModal}> + </span>
                      {/* <input id="initiative" key={player._id} onChange={mySortFunction} placeholder="initiative number" /> */}
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
