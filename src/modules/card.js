import styles from '../styles/card.module.css';

function Card(props){

    const type = {
        normal: "rgb(168, 168, 120)",
        fire: "rgb(240, 128, 48)",
        water: "rgb(104, 144, 240)",
        grass: "rgb(120, 200, 80)",
        electric: "rgb(248, 208, 48)",
        ice: "rgb(152, 216, 216)",
        fighting: "rgb(192, 48, 40)",
        poison: "rgb(160, 64, 160)",
        ground: "rgb(224, 192, 104)",
        flying: "rgb(168, 144, 240)",
        psychic: "rgb(248, 88, 136)",
        bug: "rgb(168, 184, 32)",
        rock: "rgb(184, 160, 56)",
        ghost: "rgb(112, 88, 152)",
        dark: "rgb(112, 88, 72)",
        dragon: "rgb(112, 56, 248)",
        steel: "rgb(184, 184, 208)",
        fairy: "rgb(240, 182, 188)",
        unknown: "rgb(106, 165, 150)"
    }

    return (
        <div id={styles.pokecard}>
            <div id={styles.img}></div>
            <div id={styles.container}>
                <div id={styles.name}>
                    <p id={styles.number}># 001</p>
                    <h4 id={styles.pokename}>bulbasaur</h4>
                </div>
                <div id={styles.type}>
                    <p id="type-1">Grass</p>
                    <p id="type-2">Poison</p>
                </div>
            </div>
        </div>
    );
}
export default Card;