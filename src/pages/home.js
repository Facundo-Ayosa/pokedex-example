import styles from '../styles/home.module.css';
import getPokedex from '../modules/fetch-pokedex';
import React, { useState, useEffect } from 'react';
import loading_svg from '../img/loading.svg';
import '../styles/card.css';
// DESIGN: https://www.behance.net/gallery/148252385/Pokdex-Web-Design?tracking_source=search


function Home() {
    const [pokemonAmount, setPokemonAmount] = useState(12);
    const [pokemonList, setPokemonList] = useState([]);
    const clickHandler = () => {
        setPokemonAmount(previousState => {
            return previousState + 12;
        })
        getPokedex(pokemonAmount).then(res => setPokemonList(res))
    }
    useEffect(() => {
        if(pokemonList.length !== pokemonAmount){
            getPokedex(pokemonAmount).then(res => setPokemonList(res))
        }else {
            if (document.getElementById('loading')) document.getElementById('loading').remove();
        }
        document.getElementById(styles.pokedex).innerHTML = pokemonList.join("");
    }, [pokemonList]);
    return (
    <main>
        <section id={styles.title}>
            <h1>Pokédex</h1>
        </section>
        <section id={styles.pokedex}>
            <img src={loading_svg} alt="loading..." id="loading" />
        </section>
        <section id={styles.buttonSection}>
            <button id={styles.moreButton} onClick={clickHandler}>Load more Pokemon</button>
        </section>
    </main>
    );
}

export default Home