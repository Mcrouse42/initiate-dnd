import React from 'react';
import { Link } from 'react-router-dom';

const MonsterList = ({ monsters, title }) => {
    if (!monsters.length) {
        return <h3>No Monsters yet</h3>
    }

    return (
        <div>
          <h3>Monster List</h3>
          {monsters &&
            monsters.map((monster) => (
              <div key={monster.monsterName} className="card mb-3">    
                <div className="card-body">
                  <div className="card mb-3">
                    <h2>{monster.monsterName}</h2>
                    <p>Size: {monster.monsterSize}</p>
                    <p>Type: {monster.monsterType}</p>
                    <p>Alignment: {monster.monsterAlignment}</p>
                    <p>Walking Speed: {monster.monsterSpeed}</p>
                    <p>Challenge: {monster.monsterChallenge}</p>
                    <p>Armor Class: {monster.monsterArmorClass}</p>
                    <p>Hit Points: {monster.monsterHitPoints}</p>
                    <p>Strength: {monster.monsterStrengthStats}</p>
                    <p>Dexterity: {monster.monsterDexterity}</p>
                    <p>Constitution: {monster.monsterConstitutionStat}</p>
                    <p>Intelligence: {monster.monsterIntelligenceStat}</p>
                    <p>Wisdom: {monster.monsterWisdomStat}</p>
                    <p>Charisma: {monster.monsterCharismaStat}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
};

export default MonsterList;