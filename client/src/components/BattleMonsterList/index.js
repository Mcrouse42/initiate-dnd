import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from '../Modal';


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
    //console.log(playersArray);
  
  
    // ------------------------------------------------ USE EFFECT ------------------------------------------------
    // set value to track when it is the first time initializing or not
    const firstUpdate = useRef(true);
    // use effect to track changes to the array playersArray
    useEffect(() => {
      console.log(firstUpdate);
      if (firstUpdate.current) {
        firstUpdate.current = false;
        giveMonstersInit();
        console.log(monstersArray);
      }
      else {
        monstersArray.map((monster) => {
            monster.initiative = parseInt(document.getElementById(monster.monsterName).value)
        });
        console.log(monstersArray);
          // const hold = playersArray;
          // setPlayersArray([]);
          monstersArray.sort(mySortFunction);
        console.log(monstersArray);
          //setPlayersArray(playersArray);
      }
    }, [monstersArray]);
  
  
    // ------------------------------------------------ STYLE ------------------------------------------------
    useLayoutEffect(() => {
      console.log('layer effect');
      console.log(monstersArray);
    }, [monstersArray]);
  
    // ------------------------------------------------ SORTING FUNCTIONS ------------------------------------------------
    // function to sort the players in the playersArray based on their user provided initiative, calls mySortFunction
    function sortMonsters () {
        monstersArray.map((monster) => {
            monster.initiative = parseInt(document.getElementById(monster.monsterName).value)
      });
      
      console.log(monstersArray);
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
        //console.log(document.getElementById(player.playerName));
        //console.log(document.getElementById(player.playerName).value);
  
        // remove the textbox after initiative order is achieved
        document.getElementById(monster.monsterName).style.display = "none";
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
      <div id="monster-container">
        <h3>Monsters</h3>
        {monstersArray.map((monster) => (
          <div key={monster.monsterName} className="card mb-3">
            <p className="card-header">
              <h2>
                {monster.monsterName}
                <span onClick={showModal}> + </span>
                        <input id={monster.monsterName} onChange={sortMonsters} defaultValue = '0' name='monsterInitiative' placeholder="initiative number" />
              </h2>
              <Modal show={modelStatus.show} handleClose={hideModal}>
                <h2>{monster.monsterName}</h2>
                <p>Size: {monster.monsterSize}</p>
                    <p>Type: {monster.monsterType}</p>
                    <p>Alignment: {monster.monsterAlignment}</p>
                    <p>Walking Speed: {monster.monsterSpeed}</p>
                    <p>Challenge: {monster.monsterChallenge}</p>
                    <p>Armor Class: {monster.monsterArmorClass}</p>
                    <p>Hit Points: {monster.monsterHitPoints}</p>
                    <p>Strength: {monster.monsterStrengthStat}</p>
                    <p>Dexterity: {monster.monsterDexterityStat}</p>
                    <p>Constitution: {monster.monsterConstitutionStat}</p>
                    <p>Intelligence: {monster.monsterIntelligenceStat}</p>
                    <p>Wisdom: {monster.monsterWisdomStat}</p>
                    <p>Charisma: {monster.monsterCharismaStat}</p>
              </Modal>
            </p>
            <div className="card-body">
              <div className="card mb-3">
                <p>Monster AC: {monster.monsterArmorClass}</p>
                <form>
                  <label htmlFor="monsterHitPoints">Monster HP:</label>
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
        <button onClick={() => updateButton() }>SORT MONSTERS BY INITIATIVE</button>
          {/* <Link
            to={{
              pathname: "/battle",
              state: {playersArray} // your data array of objects
            }}
          >Battle!</Link> */}
      </div>
    );
  };



// class BattleMonsterList extends Component { 
//     constructor() {
//         super();
//         this.state = {
//             show: false
//         };
//         this.showModal = this.showModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);
//     }

//     showModal = () => {
//         this.setState({ show: true });
//     };

//     hideModal = () => {
//         this.setState({ show: false });
//     };

//     render() {
//         return (
//             <div>
                
//                 {this.props.monsters.map((monster) =>
//                     <div key={monster.monsterName} className="card mb-3">
//                         <p className="card-header">
//                             <h2>{monster.monsterName}<span onClick={this.showModal}> + </span></h2>
//                             <textarea> Test</textarea>
//                             <Modal show={this.state.show} handleClose={this.hideModal}>
//                                 <h2>{monster.monsterName}</h2>
//                                 <p>Size: {monster.monsterSize}</p>
//                                 <p>Type: {monster.monsterType}</p>
//                                 <p>Alignment: {monster.monsterAlignment}</p>
//                                 <p>Walking Speed: {monster.monsterSpeed}</p>
//                                 <p>Challenge: {monster.monsterChallenge}</p>
//                                 <p>Armor Class: {monster.monsterArmorClass}</p>
//                                 <p>Hit Points: {monster.monsterHitPoints}</p>
//                                 <p>Strength: {monster.monsterStrengthStat}</p>
//                                 <p>Dexterity: {monster.monsterDexterityStat}</p>
//                                 <p>Constitution: {monster.monsterConstitutionStat}</p>
//                                 <p>Intelligence: {monster.monsterIntelligenceStat}</p>
//                                 <p>Wisdom: {monster.monsterWisdomStat}</p>
//                                 <p>Charisma: {monster.monsterCharismaStat}</p>
//                             </Modal>
//                             {/* <button type="button" onClick={this.showModal}>
//                                 Open
//                             </button> */}

//                         </p>
//                         <div className="card-body">          
//                             <div className="card mb-3">
//                                 <p>Player AC: {monster.monsterArmorClass}</p>
//                                 <form>
//                                     <label htmlFor="playerArmorClass">Player AC:</label>
//                                     <input
//                                         id="playerArmorClass"
//                                         placeholder={monster.monster}
//                                         input="number"
//                                        />
//                                 </form>
//                                 <p>Player HP: {player.playerHitPoints}</p>
//                                 {/* <textarea id="initiative">Initiative</textarea> */}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

export default BattleMonsterList;
