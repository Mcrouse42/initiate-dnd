import React from "react";
import { Link } from "react-router-dom";

const PlayerList = ({ Player }) => {
  if (!players.length) {
    return <h3>No Players yet</h3>;
  }

  return (
    <div>
      <h3>Player List</h3>
      {players &&
        players.map((thought) => (
          <div key={player._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${player.dungeonMaster}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {player.dungeonMaster}
              </Link>{" "}
              player created on {player.createdAt}
            </p>

            <div className="card-body">
              <Link to={`/player/${player._id}`}>
                <p>{player.playerName}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
