import React from 'react'

export default function Test() {
    /*return (
        <div class="testcard">
            <img class="grass" src="#" alt={"sprite of "} />
            <div class="cardcontainer">
                <div class="name">
                    <p class="id">#001</p>
                    <h4 class="pokename">Charmander</h4>
                </div>
                <div class="type">
                    <p class="grass">Grass</p>
                </div>
            </div>
        </div>
    )*/
    return (<main>
        <div class="pokecard">
            <img class="grass" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="sprite of bulbasaur" />
            <div class="cardcontainer">
                <div class="name">
                    <p class="id">1</p>
                    <h4 class="pokename">Bulbasaur</h4>
                </div>
                <div class="type">
                    <p class="grass">grass</p><p class="poison">poison</p>
                </div>
            </div>
        </div>
        <div class="testcard">
            <img class="grass" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="sprite of bulbasaur" />
            <div class="cardcontainer">
                <div class="name">
                    <p class="id">#001</p>
                    <h4 class="pokename">Charmander</h4>
                </div>
                <div class="type">
                    <p class="grass">Grass</p>
                </div>
            </div>
        </div>
    </main>
    )
}
