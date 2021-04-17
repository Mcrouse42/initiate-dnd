import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_DMS, QUERY_PLAYERS } from '../utils/queries';

const Home = () => {
  
  // get all players
  const { data } = useQuery(QUERY_PLAYERS);

  console.log(data);
  const player = data?.playerName || [];
  console.log(player);

  return (
    <main>
      <div className='flex-row justify-space-between'>
      </div>
    </main>
  );
};

export default Home;
