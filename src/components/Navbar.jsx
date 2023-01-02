import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <Link to="/pokemon"><img src="https://www.svgrepo.com/show/306584/pokemon.svg" alt="Pokémon" /></Link>
            <ul>
                <li>
                    <div class="dropdown">
                        <Link to="/pokemon">Pokémon</Link>
                        <div class="dropdown-content">
                            <Link to="/pokemon/card-view">Card View</Link>
                            <Link to="/pokemon/table-view">Table View</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/pokemon/test">Test</Link>
                </li>
                <li>
                    <Link to="/pokemon/about">About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar