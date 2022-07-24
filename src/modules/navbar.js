import {Link} from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import logopokemon from '../img/logo-pokemon.png';
import searchicon from '../img/magnifying-glass.svg';

function Navbar() {


  return (
    <header>
      <img src={logopokemon} alt="Pokemon Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/pokedex-example/" className={styles.navlink}>Home</Link>
          </li>
          <li>
            <Link to="/pokedex-example/pokedex" className={styles.navlink}>Pokedex</Link>
          </li>
          <li>
            <Link to="/pokedex-example/about" className={styles.navlink}>About</Link>
          </li>
          <li>
            <input 
              type='text'
              id='search'
              placeholder='Search for your favourite Pokemon!'
            />
            <button 
            type='submit'/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
