import React from 'react';
import { searchMonsters } from '../../utils/API';

const Monsters = () => {
  return (
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            <button onClick={searchMonsters}>Search Monsters</button>
        </div>
      
  );
};

export default Monsters;
