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
  