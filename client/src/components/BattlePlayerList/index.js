import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from "../Modal";

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
        console.log(playersArray);
        console.log(this);
        // let newPlayersArray = playersArray.map(player => {
        //     player.initiative = parseInt(document.getElementById(player.playerName).value)
        // });
        // console.log(newPlayersArray);
        // newPlayersArray.sort(mySortFunction);
        // console.log(newPlayersArray);
        // setPlayersArray({playersArray: newPlayersArray});
    }
    }, [playersArray]);

    useLayoutEffect(() => {
        console.log('layer effect');
        console.log(playersArray);
    }, [playersArray]);

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.) !== this.state. {
    //         console.log('state has changed')
    //     }
    // }
    
    // useEffect(() => {
    //     givePlayersInit();
    // }, []);

    function sortPlayers () {
        playersArray.map((player) => {
            player.initiative = parseInt(document.getElementById(player.playerName).value)
        });
        console.log(playersArray);
        let newPlayersArray = playersArray.sort(mySortFunction);
        console.log(newPlayersArray);
        setPlayersArray(newPlayersArray);
        console.log(this);
    };

  let showModal = () => {
    setModalStatus({ show: true });
  };

  let hideModal = () => {
      setModalStatus({ show: false });
  };

function mySortFunction(a, b) {
        return b.initiative - a.initiative;
    };


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
      {/* <button onClick={() => updatePlayerInit(playersArray)}>Update</button> */}
    </div>
  );
};


export default BattlePlayerList;
