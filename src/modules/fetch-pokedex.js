import pokemonList from '../pages/home';
import '../styles/card.css';

const P = new Pokedex();

// Get (number) amount of pokemons and format them to an array of objects.
async function getPokedex(number) {
    var array = []
    for (let i = pokemonList.length; i <= number; i++) {
        if (i === 0) i++;
        array.push(`/api/v2/pokemon/` + i)
    }
    const pokemonData = await P.getResource(array)
        .catch((error) => {
            console.log('No Pokemon with that ID', error);
        });
    console.log(pokemonData);
    return;
}

export default getPokedex;