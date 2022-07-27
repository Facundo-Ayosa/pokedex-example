import styles from '../styles/home.module.css';
import getPokemons from '../modules/fetch-pokedex';
import React, { useState } from 'react';
import loading_svg from '../img/loading.svg';
// DESIGN: https://www.behance.net/gallery/148252385/Pokdex-Web-Design?tracking_source=search


function Home() {
    let [pokemons, setpokemons] = useState(10);
    const clickHandler = () => {
        setpokemons(previousState => {
            return previousState + 10 
        })
        getPokemons(pokemons).then(res => console.log(res));
    }
    
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
            
            <img src={loading_svg} alt="loading..." className="loading" />
        </section>
        <section id={styles.buttonSection}>
            <button id={styles.moreButton} onClick={clickHandler}>Load more Pokemon</button>
        </section>
    </main>
    );
}
export default Home