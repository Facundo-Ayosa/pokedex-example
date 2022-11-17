import styles from '../styles/home.module.css';
import React, { useState, useEffect } from 'react';
import loading_svg from '../img/loading.svg';
import '../styles/card.css';
import { pokeFetcher } from '../modules/fetch-api';
import Card from "../components/card";
// DESIGN: https://www.behance.net/gallery/148252385/Pokdex-Web-Design?tracking_source=search
// DESIGN: https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept?tracking_source=search_projects%7CPokedex+

function Home() {
    const [Pokemon, setPokemon] = useState(undefined)

    useEffect(() => {

        setPokemon(pokeFetcher(20, 0));
    }, []);

    return (
        <main>
            <section id={styles.title}>
                <h1>Pokédex</h1>
            </section>
            <section id={styles.pokedex}>
                <img src={loading_svg} alt="loading..." id="loading" />
            </section>
            <section id={styles.buttonSection}>
                <button id={styles.moreButton}>Load more Pokemon</button>
            </section>
        </main>
    );
}

export default Home