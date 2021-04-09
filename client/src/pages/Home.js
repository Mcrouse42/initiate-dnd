import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_DMS, QUERY_PLAYERS } from '../utils/queries';

const Home = () => {
  // use useQuery hook to make query request
  // const { data } = useQuery(QUERY_DMS);
  // console.log(data);
  // const dungeonMaster = data?.dungeonMasters || [];
  // console.log(dungeonMaster);

  // const { data } = useQuery(QUERY_PLAYERS, {
  //   variables: {playerName}
  // });
  
  // get all players
  const { data } = useQuery(QUERY_PLAYERS);

  console.log(data);
  const player = data?.playerName || [];
  console.log(player);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {/* <div className='col-12 mb-3'>{player}</div> */}
      </div>
    </main>
  );
};

export default Home;
