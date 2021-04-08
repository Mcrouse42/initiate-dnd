
// 3rd party api
export const searchMonsters = () => {
    fetch(`https://api.open5e.com/monsters/`)
    .then(response => response.json())
    .then(data => console.log(data));
};
