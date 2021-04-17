import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from '../Modal';

//import style components
import { CardImg } from 'react-bootstrap';


const BattleMonsterList = (props) => {
    const [modelStatus, setModalStatus] = useState({ show: false });
    const [monstersArray, setMonstersArray] = useState(props.monsters);
  
    // ------------------------------------------------ INITIALIZE ------------------------------------------------
    // When page is initially loaded, set the player initiative to 0
    let giveMonstersInit = () => {
        let monsterInitMap = monstersArray.map(monster => {
            monster.initiative = 0;
            return monster
        });
  
        // set state to the player init map which marks all initiative as 0
        setMonstersArray(monsterInitMap);
    }  
  
    // ------------------------------------------------ USE EFFECT ------------------------------------------------
    // set value to track when it is the first time initializing or not
    const firstUpdate = useRef(true);
    // use effect to track changes to the array playersArray
    useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        giveMonstersInit();
      }
      else {
        monstersArray.map((monster) => {
            monster.initiative = parseInt(document.getElementById(monster.monsterName).value)
        });
          // const hold = playersArray;
          // setPlayersArray([]);
          monstersArray.sort(mySortFunction);
          //setPlayersArray(playersArray);
      }
    }, [monstersArray]);
  
  
    // ------------------------------------------------ STYLE ------------------------------------------------
    useLayoutEffect(() => {
    }, [monstersArray]);
  
    // ------------------------------------------------ SORTING FUNCTIONS ------------------------------------------------
    // function to sort the players in the playersArray based on their user provided initiative, calls mySortFunction
    function sortMonsters () {
        monstersArray.map((monster) => {
            monster.initiative = parseInt(document.getElementById(monster.monsterName).value)
      });
      
      monstersArray.sort(mySortFunction);
      setMonstersArray(monstersArray);
    }
  
    // function to sort incoming array
    function mySortFunction(a, b) {
      return b.initiative - a.initiative;
    };
  
    // ------------------------------------------------ UPDATE INITIATIVE ORDER ------------------------------------------------
    // function takes the button click and updates the player array.  The .slice forces a state update which then rerenders the JSX
    function updateButton() {
      setMonstersArray(monstersArray.slice())
        
      monstersArray.forEach((monster) => {
 
        // remove the textbox after initiative order is achieved
        document.getElementById(monster.monsterName).style.display = "none";
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
    <div id="monster-container">
        <h3>Monsters</h3>
        {monstersArray.map((monster) => (
          <div key={monster.monsterName} className="card mb-3">
            <p className="card-header">
            <CardImg className="card-img" src={`./images/${monster.monsterType}.png`}></CardImg>
              <h2>
                {monster.monsterName}
                <span onClick={showModal}> + </span>
                        <input id={monster.monsterName} onChange={sortMonsters} defaultValue = '0' name='monsterInitiative' placeholder="initiative number" />
              </h2>
              <Modal show={modelStatus.show} handleClose={hideModal}>
              <CardImg className="modal-img" src={`./images/${monster.monsterType}.png`}></CardImg>
                <h2>{monster.monsterName}</h2>
                    <p><h3>Size:</h3> {monster.monsterSize}</p>
                    <p><h3>Type:</h3> {monster.monsterType}</p>
                    <p><h3>Alignment:</h3> {monster.monsterAlignment}</p>
                    <p><h3>Walking Speed:</h3> {monster.monsterSpeed}</p>
                    <p><h3>Challenge:</h3> {monster.monsterChallenge}</p>
                    <p><h3>Armor Class:</h3> {monster.monsterArmorClass}</p>
                    <p><h3>Hit Points:</h3> {monster.monsterHitPoints}</p>
                    <p><h3>Strength:</h3> {monster.monsterStrengthStat}</p>
                    <p><h3>Dexterity:</h3> {monster.monsterDexterityStat}</p>
                    <p><h3>Constitution:</h3> {monster.monsterConstitutionStat}</p>
                    <p><h3>Intelligence:</h3> {monster.monsterIntelligenceStat}</p>
                    <p><h3>Wisdom:</h3> {monster.monsterWisdomStat}</p>
                    <p><h3>Charisma:</h3> {monster.monsterCharismaStat}</p>
              </Modal>
            </p>
            <div className="card-body">
              <div className="card mb-3">
                <p><h3>Monster AC:</h3> {monster.monsterArmorClass}</p>
                <form>
                  <label htmlFor="monsterHitPoints"><h3>Monster HP:</h3></label>
                  <input
                    id="monsterHitPoints"
                    placeholder={monster.monsterHitPoints}
                    input="number"
                  />
                </form>
              </div>
            </div>
          </div>
        ))}
        <button className="btn" onClick={() => updateButton() }>SORT MONSTERS BY INITIATIVE</button>
      </div>
    );
}

export default BattleMonsterList;