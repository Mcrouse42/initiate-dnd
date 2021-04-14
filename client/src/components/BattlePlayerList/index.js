import React, { Component } from "react";
import Modal from '../Modal';


class BattlePlayerList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.sortPlayerByDesc = this.sortPlayerByDesc.bind(this); 
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  sortPlayerByDesc() {
    this.setState((prevState) => {
      this.state.players.sort((a, b) => b.player - a.player);
    });
  }

  render() {
    return (
      <div>
        {this.props.players.map((player) => (
          <div key={player._id} className="card mb-3">
            <p className="card-header">
              <h2>
                {player.playerName}
                <span onClick={this.showModal}> + </span>
              </h2>
              <button onClick={this.sortPlayerByDesc}>Reorder</button>
              <input placeholder="Player order" />

              <Modal show={this.state.show} handleClose={this.hideModal}>
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
              {/* <button type="button" onClick={this.showModal}>
                                Open
                            </button> */}
            </p>
            <div className="card-body">
              <div className="card mb-3">
                <p>Player AC: {player.playerArmorClass}</p>
                {/* <p>Player HP: {player.playerHitPoints}</p> */}
                <form>
                  <label htmlFor="playerHitPoints">Player HP:</label>
                  <input
                    id="playerHitPoints"
                    placeholder={player.playerHitPoints}
                    input="number"
                  />
                </form>
                {/* <textarea id="initiative">Initiative</textarea> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BattlePlayerList;
