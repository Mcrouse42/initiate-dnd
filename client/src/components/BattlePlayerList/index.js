import React, { useState, useEffect, useRef } from "react";
import Modal from "../Modal";
import PlayerList from "../PlayerList";
import { Link } from 'react-router-dom';

const BattlePlayerList = (props) => {
    const [modelStatus, setModalStatus] = useState({ show: false });
    const [playersArray, setPlayersArray] = useState(props.players);

    let givePlayersInit = () => {
        let playerInitMap = playersArray.map(player => {
            player.initiative = 0;
            console.log(typeof(player.initiative));
            console.log(player);
            return player
        });

        setPlayersArray(playerInitMap);
    }
    console.log(playersArray);
    const firstUpdate = useRef(true);
  
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
    
    // useEffect(() => {
    //     givePlayersInit();
    // }, []);

    function sortPlayers () {
        playersArray.map((player) => {
            player.initiative = parseInt(document.getElementById(player.playerName).value)
            });
        console.log(playersArray);
        // const hold = playersArray;
        // setPlayersArray([]);
        playersArray.sort(mySortFunction);
        setPlayersArray(playersArray);
    }

  let showModal = () => {
    setModalStatus({ show: true });
  };

  let hideModal = () => {
      setModalStatus({ show: false });
  };

function mySortFunction(a, b) {
        return b.initiative - a.initiative;
    };


    function updateButton() {

      setPlayersArray(playersArray.slice())
      
      playersArray.forEach((player) => {
        console.log(document.getElementById(player.playerName));
        console.log(document.getElementById(player.playerName).value);
        document.getElementById(player.playerName).style.display = "none";
        //document.getElementById(player.playerName).value = parseInt(player.initiative);
        // document.getElementById(player.playerName).setAttribute("value", player.initiative);
        // console.log(player);
        });
    }
// useEffect(() => {
//     playersArray.map((player) => {
//         player.initiative = parseInt(document.getElementById(player.playerName).value)
//     });
//     console.log(playersArray);
//     playersArray.sort(mySortFunction);
//     console.log(playersArray);
// }, [playersArray]);

// let updatePlayerInit = (playerId) => {
//     console.log(playerId);
//     playersArray.map((player) => {
//         player.initiative = parseInt(document.getElementById(player.playerName).value)
//     });
//     console.log(playersArray);
//     playersArray.sort(mySortFunction);
//     console.log(playersArray);
// };


return (
    <div id="player-container">
      {playersArray.map((player) => (
        <div key={player._id} className="card mb-3">
          <p className="card-header">
            <h2>
              {player.playerName}
              <span onClick={showModal}> + </span>
                      <input id={player.playerName} onChange={sortPlayers} defaultValue = '0' name='playerInitiative' placeholder="initiative number" />
                      {/* <input id="initiative" onChange={mySortFunction()} placeholder="initiative number" /> */}
                      {/* <input id={player.playerName} disabled /> */}
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
      <button onClick={() => updateButton() }>UPDATE
        {/* <PlayerList players={playersArray}/> */}
        {/* <Link to="/profile">DM Profile</Link> */}
        {/* <Link to="/generatenpc" players={playersArray} >Generate NPC</Link> */}
        {/* <Link
          to={{
            pathname: "/battle",
            state: {playersArray} // your data array of objects
          }}
        >Battle!</Link> */}
      </button>
      {/* <button onClick={() => updatePlayerInit(playersArray)}>Update</button> */}
    </div>
  );
};


export default BattlePlayerList;
