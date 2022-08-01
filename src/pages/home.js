import styles from '../styles/home.module.css';
import getPokemons from '../modules/fetch-pokedex';
import React, { useState, useEffect } from 'react';
import loading_svg from '../img/loading.svg';
import '../styles/card.css';
// DESIGN: https://www.behance.net/gallery/148252385/Pokdex-Web-Design?tracking_source=search


function Home() {
    const [pokemonAmount, setPokemonAmount] = useState(10);
    const [pokemonList, setPokemonList] = useState([]);
    const clickHandler = () => {
        setPokemonAmount(previousState => {
            return previousState + 10 
        })
        getPokemons(pokemonAmount).then(res => setPokemonList(res));
        refreshPokedex();
    }
    useEffect(() => {
        refreshPokedex();
    });
    function refreshPokedex(){
        console.log("refreshed")
        if(pokemonList.length === 0){
            getPokemons(pokemonAmount).then(res => setPokemonList(res))
        } else {
            if (document.getElementById('loading')) document.getElementById('loading').remove();
            document.getElementById(styles.pokedex).innerHTML = pokemonList.join("");
        }
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
            <img src={loading_svg} alt="loading..." id="loading" />
        </section>
        <section id={styles.buttonSection}>
            <button id={styles.moreButton} onClick={clickHandler}>Load more Pokemon</button>
        </section>
    </main>
    );
}

export default Home