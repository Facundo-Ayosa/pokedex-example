import styles from '../styles/home.module.css';
import Card from '../modules/card';
import getPokemons from '../modules/pokedex-promise.js';


// DESIGN: https://www.behance.net/gallery/148252385/Pokdex-Web-Design?tracking_source=search

function Home() {
    //console.log(getPokemons([5,6,7,8,9]).then())
    return (
    <main>
        <section id={styles.title}>
            <h1>Pokédex</h1>
            <p>Search for a Pokemon by Name or using his Pokédex Number</p>
            <div id={styles.searchblock}>
                <div id={styles.searchbar}></div>
                <p>S.I.</p>
            </div>
        </section>
        <section id={styles.pokedex}>
            <Card />
        </section>
    </main>
    );
}
export default Home