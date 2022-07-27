import Pokedex from 'pokedex-promise-v2';
// https://github.com/PokeAPI/pokedex-promise-v2#pokemon

const P = new Pokedex();

// Get (number) amount of pokemons and format them to an array of objects.
function pokedex(number){
    console.log("pokedex works")
        var array = []
        for (let i = 1; i < number; i++){
            array.push(i)
        }
        return new Promise((resolve, reject) => {
        const urls = array.map(e => "https://pokeapi.co/api/v2/pokemon/" + e);
        let data = P.getResource(urls)
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

async function getPokemons(number){
    return await pokedex(number).then(res => ManageCards(res));
}

function ManageCards(data){
    let importantData = data.map((e) => {
        let isshiny = (Math.random()*8192)+1 === 1 ? true : false;
        return {
            id: e.id,
            name: e.name,
            sprite: isshiny ? e.front.shiny : e.front_default,
            shiny: isshiny,
            types: e.types,
        }
    });
    let cards = importantData.map((e) => {
        return `<Card id=${e.id} name=${e.name} sprite=${e.sprite} shiny=${e.shiny} types=${e.types} />`
    })
    console.log(cards)
    return ({cards})
}
//async not working?

export default getPokemons;