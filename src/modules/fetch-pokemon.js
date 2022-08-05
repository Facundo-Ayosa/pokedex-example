import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

async function getPokemon(name) {
    const pokemon = await P.getPokemonByName(name.toLowerCase())
        .catch((error) => {
            console.log('There was an ERROR: ', error);
        });
    console.log(pokemon);
}

export default getPokemon;