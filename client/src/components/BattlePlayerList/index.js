// Import required items from react and external
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from "../Modal";

const BattlePlayerList = (props) => {
  const [modelStatus, setModalStatus] = useState({ show: false });
  const [playersArray, setPlayersArray] = useState(props.players);

  // ------------------------------------------------ INITIALIZE ------------------------------------------------
  // When page is initially loaded, set the player initiative to 0
  let givePlayersInit = () => {
      let playerInitMap = playersArray.map(player => {
          player.initiative = 0;
          return player
      });

      // set state to the player init map which marks all initiative as 0
      setPlayersArray(playerInitMap);
  }


  // ------------------------------------------------ USE EFFECT ------------------------------------------------
  // set value to track when it is the first time initializing or not
  const firstUpdate = useRef(true);
  // use effect to track changes to the array playersArray
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      givePlayersInit();
    }
    else {
      playersArray.map((player) => {
        player.initiative = parseInt(document.getElementById(player.playerName).value)
      });
        // const hold = playersArray;
        // setPlayersArray([]);
      playersArray.sort(mySortFunction);
        //setPlayersArray(playersArray);
    }
  }, [playersArray]);


  // ------------------------------------------------ STYLE ------------------------------------------------
  useLayoutEffect(() => {
  }, [playersArray]);

  // ------------------------------------------------ SORTING FUNCTIONS ------------------------------------------------
  // function to sort the players in the playersArray based on their user provided initiative, calls mySortFunction
  function sortPlayers () {
    playersArray.map((player) => {
      player.initiative = parseInt(document.getElementById(player.playerName).value)
    });
    
    playersArray.sort(mySortFunction);
    setPlayersArray(playersArray);
  }

  // function to sort incoming array
  function mySortFunction(a, b) {
    return b.initiative - a.initiative;
  };

  // ------------------------------------------------ UPDATE INITIATIVE ORDER ------------------------------------------------
  // function takes the button click and updates the player array.  The .slice forces a state update which then rerenders the JSX
  function updateButton() {
    setPlayersArray(playersArray.slice())
      
    playersArray.forEach((player) => {

      // remove the textbox after initiative order is achieved
      document.getElementById(player.playerName).style.display = "none";
    });
  }

  // ------------------------------------------------ MODAL CONTROL ------------------------------------------------
    // function to show modal
  let showModal = () => {
    setModalStatus({ show: true });
  };

  // function to hide modal
  let hideModal = () => {
      setModalStatus({ show: false });
  };


return (
    <div id="player-container">
    <h3>Players</h3>
      {playersArray.map((player) => (
        <div key={player._id} className="card mb-3">
          <p className="card-header">
            <h2>
              {player.playerName}
              <span onClick={showModal}> + </span>
                      <input id={player.playerName} onChange={sortPlayers} defaultValue = '0' name='playerInitiative' placeholder="initiative number" />
            </h2>
            <Modal show={modelStatus.show} handleClose={hideModal}>
              <h2>{player.playerName}</h2>
              <p><h3>Player Race:</h3> {player.playerRace}</p>
              <p><h3>Player Class:</h3> {player.playerClass}</p>
              <p><h3>Player Level:</h3> {player.playerLevel}</p>
              <p><h3>Player AC:</h3> {player.playerArmorClass}</p>
              <p><h3>Player HP:</h3> {player.playerHitPoints}</p>
              <p><h3>Player STR:</h3> {player.playerStrengthStat}</p>
              <p><h3>Player DEX:</h3> {player.playerDexterityStat}</p>
              <p><h3>Player CON:</h3> {player.playerConstitutionStat}</p>
              <p><h3>Player INT:</h3> {player.playerIntelligenceStat}</p>
              <p><h3>Player WIS:</h3> {player.playerWisdomStat}</p>
              <p><h3>Player CHA:</h3> {player.playerCharismaStat}</p>
            </Modal>
          </p>
          <div className="card-body">
            <div className="card mb-3">
              <p><h3>Player AC:</h3> {player.playerArmorClass}</p>
              <form>
                <label htmlFor="playerHitPoints"><h3>Player HP:</h3></label>
                <input className="my-2"
                  id="playerHitPoints"
                  placeholder={player.playerHitPoints}
                  input="number"
                />
              </form>
            </div>
          </div>
        </div>
      ))}
      <button className="btn" onClick={() => updateButton() }>SORT PLAYERS BY INITIATIVE</button>
    </div>
  );
};


export default BattlePlayerList;
