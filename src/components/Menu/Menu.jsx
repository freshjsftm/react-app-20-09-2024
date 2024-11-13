import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/contacts'>contacts</NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu;
