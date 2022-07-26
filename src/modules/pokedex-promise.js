import Pokedex from 'pokedex-promise-v2';
// https://github.com/PokeAPI/pokedex-promise-v2#pokemon

const P = new Pokedex();

// Get (number) amount of pokemons and format them to an array of objects.
function getPokemons(number){
    const urls = (Array.isArray(number) ? number.filter(e => e > 0) : [number]).map(e => "https://pokeapi.co/api/v2/pokemon/" + e);
    callforapi(urls)
    async function callforapi(urls){
        try {
            return await P.getResource(urls);
        } catch (error) {
            throw error
        }
    }
}

// TO DO: Check for Async/Await

export default getPokemons;