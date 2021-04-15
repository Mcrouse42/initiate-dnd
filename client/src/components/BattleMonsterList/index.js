import React, { Component } from "react";
import Modal from '../Modal';

//import style components
import { CardImg } from 'react-bootstrap';


class BattleMonsterList extends Component { 
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                
                {this.props.monsters.map((monster) =>
                    <div key={monster.monsterName} className="card mb-3">
                        <p className="card-header">
                        <CardImg className="card-img" src={`./images/${monster.monsterType}.png`}></CardImg>
                            <h2>{monster.monsterName}<span onClick={this.showModal}> + </span></h2>
                            <textarea> Test</textarea>
                            <Modal show={this.state.show} handleClose={this.hideModal}>
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
                            {/* <button type="button" onClick={this.showModal}>
                                Open
                            </button> */}

                        </p>
                        <div className="card-body">          
                            <div className="card mb-3">
                                <p><h3>Monster AC:</h3> {monster.monsterArmorClass}</p>
                                <form>
                                    <label htmlFor="monsterArmorClass"><h3>Player AC:</h3></label>
                                    <input
                                        id="monsterArmorClass"
                                        placeholder={monster.monsterArmorClass}
                                        input="number"
                                       />
                                </form>
                                <p><h3>Monster HP:</h3> {monster.monsterHitPoints}</p>
                                {/* <textarea id="initiative">Initiative</textarea> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default BattleMonsterList;
