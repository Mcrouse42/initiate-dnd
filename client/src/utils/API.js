// 3rd party api
export const searchMonsterApi = (query) => {
    fetch(`https://api.open5e.com/monsters/?search=${query}`)
    .then(response => response.json())
    .then(data => console.log(data));
};