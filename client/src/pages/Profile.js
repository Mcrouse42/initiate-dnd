import React from 'react';
import { useParams } from 'react-router-dom';

//import ThoughtList from '../components/ThoughtList';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_DM } from '../utils/queries';

const Profile = () => {
  const { dungeonMaster: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_DM, {
    variables: { dungeonMaster: userParam }
  });

  const dungeonMaster = data?.dungeonMaster || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          THIS IS THE DM PROFILE
          {/* Viewing {dungeonMaster}'s profile. */}
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">{/* PRINT THOUGHT LIST  */}</div>

        <div className="col-12 col-lg-3 mb-3">{/* PRINT FRIEND LIST */}</div>
      </div>
    </div>
  );
};

export default Profile;
