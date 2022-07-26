import {Link} from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import pokeball from '../img/pokeball.svg';
import person from '../img/person.svg';

function Navbar() {


  return (
    <header>
      <ul>
        <li>
          <Link to="/pokedex-example/" className={styles.navlink}><img src={pokeball} /></Link>
        </li>
        <li>
          <Link to="/pokedex-example/pokedex" className={styles.navlink}><img src={person} /></Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
