import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownMenu.module.scss';

const DropdownMenu = (props) => {
  const { children, text, widthList = 100 } = props;
  console.log(widthList);

  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.parent}>
      <button onClick={changeIsOpen}>{text}</button>
      {isOpen && (
        <div style={{ width: widthList + 'px' }} className={styles.list}>
          {children}
        </div>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  widthList: PropTypes.number,
};

export default DropdownMenu;
