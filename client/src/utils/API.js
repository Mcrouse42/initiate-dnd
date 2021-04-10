// 3rd party api
export const searchMonsterApi = (query) => {
    // return fetch(`https://api.open5e.com/monsters/?search=${query}`)
    fetch(`https://api.open5e.com/monsters/?search=${query}`)
    .then(response => response.json())
    .then(data => console.log(data, 
        data.results[0].name,
        data.results[0].size,
        data.results[0].type,
        data.results[0].alignment,
        // speed is an object or array of objects if multiple
            // { speedType: string, speedValue: }
        data.results[0].speed,
        data.results[0].challenge_rating,
        data.results[0].armor_class,
        data.results[0].hit_points,
        data.results[0].strength,
        data.results[0].dexterity,
        data.results[0].constitution,
        data.results[0].intelligence,
        data.results[0].wisdom,
        data.results[0].charisma,
        // actions is an array of objects
        data.results[0].actions
        ))
};