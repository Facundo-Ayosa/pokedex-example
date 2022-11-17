import React from 'react'

function Card({ id, name, sprites, types }) {

    let isShiny = Math.floor(Math.random() * 8192) === 1 ? true : false;
    let sprite = isShiny ? sprites.front_shiny : sprites.front_default;

    return (<div class="pokecard">
        <img class={types[0]} src={sprite} alt={`Sprite of ${name}`} />
        <div class="cardcontainer">
            <div class="name">
                <p class="id">{id}</p>
                <h4 class="pokename">{name.charAt(0).toUpperCase() + name.substring(1)}</h4>
            </div>
            <div class="type">
                {types.map((e) => {
                    return <p class={e}>{e}</p>
                })}
            </div>
        </div>
    </div>);
}

export default Card