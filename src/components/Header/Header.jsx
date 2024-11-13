import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>logo</Link>
      <Menu />
    </header>
  );
};

export default Header;
