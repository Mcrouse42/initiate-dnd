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
  //console.log(playersArray);


  // ------------------------------------------------ USE EFFECT ------------------------------------------------
  // set value to track when it is the first time initializing or not
  const firstUpdate = useRef(true);
  // use effect to track changes to the array playersArray
  useEffect(() => {
    console.log(firstUpdate);
    if (firstUpdate.current) {
      firstUpdate.current = false;
      givePlayersInit();
      console.log(playersArray);
    }
    else {
      playersArray.map((player) => {
        player.initiative = parseInt(document.getElementById(player.playerName).value)
      });
      console.log(playersArray);
        // const hold = playersArray;
        // setPlayersArray([]);
      playersArray.sort(mySortFunction);
      console.log(playersArray);
        //setPlayersArray(playersArray);
    }
  }, [playersArray]);


  // ------------------------------------------------ STYLE ------------------------------------------------
  useLayoutEffect(() => {
    console.log('layer effect');
    console.log(playersArray);
  }, [playersArray]);

  // ------------------------------------------------ SORTING FUNCTIONS ------------------------------------------------
  // function to sort the players in the playersArray based on their user provided initiative, calls mySortFunction
  function sortPlayers () {
    playersArray.map((player) => {
      player.initiative = parseInt(document.getElementById(player.playerName).value)
    });
    
    console.log(playersArray);
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
      //console.log(document.getElementById(player.playerName));
      //console.log(document.getElementById(player.playerName).value);

      // remove the textbox after initiative order is achieved
      document.getElementById(player.playerName).style.display = "none";
      //document.getElementById(player.playerName).value = parseInt(player.initiative);
      // document.getElementById(player.playerName).setAttribute("value", player.initiative);
      // console.log(player);
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
      <button onClick={() => updateButton() }>UPDATE</button>
        {/* <Link
          to={{
            pathname: "/battle",
            state: {playersArray} // your data array of objects
          }}
        >Battle!</Link> */}
    </div>
  );
};


export default BattlePlayerList;
