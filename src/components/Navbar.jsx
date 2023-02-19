import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ links }) {

    const Navbar = () => {
        if (links.length > 1) {
            return (
                <ul>
                    {links.map((e, i) => {
                        return <li key={i}><Link to={e.path}>{e.name}</Link></li>
                    })}
                </ul>
            )
        }
    }

    return (
        <header>
            <Link to="/pokemon"><img src="https://www.svgrepo.com/show/306584/pokemon.svg" alt="Pokémon" /></Link>
            {Navbar()}
        </header>
    )
}

export default Navbar

/*
<div className="dropdown">
                        <Link to="/pokemon">Pokémon</Link>
                        <div className="dropdown-content">
                            <Link to="/pokemon/card-view">Card View</Link>
                            <Link to="/pokemon/table-view">Table View</Link>
                        </div>
                    </div>
                     */