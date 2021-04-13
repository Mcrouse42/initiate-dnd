import React, { Component } from "react";
import Modal from '../Modal';


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
                            <h2>{monster.monsterName}<span onClick={this.showModal}> + </span></h2>
                            <textarea> Test</textarea>
                            <Modal show={this.state.show} handleClose={this.hideModal}>
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
                            {/* <button type="button" onClick={this.showModal}>
                                Open
                            </button> */}

                        </p>
                        <div className="card-body">          
                            <div className="card mb-3">
                                <p>Monster AC: {monster.monsterArmorClass}</p>
                                <form>
                                    <label htmlFor="monsterArmorClass">Player AC:</label>
                                    <input
                                        id="monsterArmorClass"
                                        placeholder={monster.monsterArmorClass}
                                        input="number"
                                       />
                                </form>
                                <p>Monster HP: {monster.monsterHitPoints}</p>
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
