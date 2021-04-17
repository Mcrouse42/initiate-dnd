// 3rd party api
export const searchMonsterApi = (query) => {
    return fetch(`https://api.open5e.com/monsters/?search=${query}`)
};