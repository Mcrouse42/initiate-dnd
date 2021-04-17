import React from 'react';
import PlayerList from "../components/PlayerList";
import MonsterList from '../components/MonsterList';
import { Redirect, useParams } from 'react-router-dom';

import PlayerForm from '../components/PlayerForm';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_DM, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { dungeonMaster: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_DM : QUERY_ME, {
    variables: { dungeonMaster: userParam }
  });

  const dungeonMaster = data?.me || data?.dungeonMaster || {};

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.dungeonMaster === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dungeonMaster?.dungeonMaster) {
    return (
      <h4 className="text-primary">
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }
  
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="text-primary p-3 display-inline-block">
          Viewing {`${dungeonMaster.dungeonMaster}'s`} profile
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="text-primary col-12 mb-3 col-lg-8">
          <PlayerList
            players={dungeonMaster.players}
            title={`${dungeonMaster.dungeonMaster}'s player...`}
          />
          <MonsterList
            monsters={dungeonMaster.monsters}
            title={`${dungeonMaster.dungeonMaster}'s monster...`}
          />
          </div>
        </div>
        <div className="mb-3"><PlayerForm /></div>
      </div>
  
  );
};

export default Profile;
