// Monster local storage:
export const getSavedMonsterNames = () => {
  const savedMonsterNames = localStorage.getItem('saved_monsters')
    ? JSON.parse(localStorage.getItem('saved_monsters'))
    : [];
  
  return savedMonsterNames;
};
  
export const saveMonsterNames = (monsterNameArr) => {
  if (monsterNameArr.length) {
    localStorage.setItem('saved_monsters', JSON.stringify(monsterNameArr));
  } else {
    localStorage.removeItem('saved_monsters');
  }
};
  
export const removeMonsterName= (monsterName) => {
  const savedMonsterNames = localStorage.getItem('saved_monsters')
    ? JSON.parse(localStorage.getItem('saved_monsters'))
     : null;

  if (!savedMonsterNames) {
    return false;
  }
  
  const updatedSavedMonsterNames = savedMonsterNames?.filter((savedMonsterName) => savedMonsterName !== monsterName);
  localStorage.setItem('saved_monsters', JSON.stringify(updatedSavedMonsterNames));
  
  return true;
};

// Player local storage
export const getSavedPlayerNames = () => {
  const savedPlayerNames = localStorage.getItem('saved_players')
    ? JSON.parse(localStorage.getItem('saved_players'))
    : [];
  
  return savedPlayerNames;
};
  
export const savePlayerNames = (playerNameArr) => {
  if (playerNameArr.length) {
    localStorage.setItem('saved_players', JSON.stringify(playerNameArr));
  } else {
    localStorage.removeItem('saved_players');
  }
};
  
export const removePlayerName= (playerName) => {
  const savedPlayerNames = localStorage.getItem('saved_players')
    ? JSON.parse(localStorage.getItem('saved_players'))
     : null;

  if (!savedPlayerNames) {
    return false;
  }
  
  const updatedSavedPlayerNames = savedPlayerNames?.filter((savedPlayerName) => savedPlayerName !== playerName);
  localStorage.setItem('saved_players', JSON.stringify(updatedSavedPlayerNames));
  
  return true;
};
