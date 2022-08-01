import Pokedex from 'pokedex-promise-v2';
import pokemonList from '../pages/home';
import '../styles/card.css';
// https://github.com/PokeAPI/pokedex-promise-v2#pokemon

const P = new Pokedex();

// Get (number) amount of pokemons and format them to an array of objects.
async function getPokemons(number){
    var array = []
    for (let i = pokemonList.length; i <= number; i++){
        if( i===0 ) i++;
        array.push(`/api/v2/pokemon/` + i)
    }
    const pokemonData = await P.getResource(array);
    return ManageCards(pokemonData);
}
//async not working?

function ManageCards(data){
    let importantData = data.map((e) => {
        let isshiny = (Math.random()*8192)+1 === 1 ? true : false;
        let shinyurl = e.sprites.front_default;
        if (isshiny) {
            shinyurl = e.sprites.front_shiny
        }
        return {
            id: e.id,
            name: e.name,
            sprite: shinyurl,
            shiny: isshiny,
            types: e.types.map((e) => { return e.type.name}),
        }
    });
    let cards = importantData.map((e) => {
        let domtypes = e.types.map((e) => {
            return `<p class=${e}>${e}</p>`
        })
        return (`<div class="pokecard">
        <img class=${e.types[0]} src=${e.sprite} alt="sprite of ${e.name}"}/>
        <div class="cardcontainer">
            <div class="name">
                <p class="id">${e.id}</p>
                <h4 class="pokename">${e.name}</h4>
            </div>
            <div class="type">
                ${domtypes.join("")}
            </div>
        </div>
    </div>`)
    })
    return cards;
}

export default getPokemons;