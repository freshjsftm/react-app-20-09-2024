import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const Tooltip = (props) => {
  const { children, textTooltip } = props;
  const [isVisible, setIsVisible] = useState(false);
  const setOnVisible = () => {setIsVisible(true)};
  const setOutVisible = () => {setIsVisible(false)};
  return (
    <div className={styles.mainElement} >
      <div onMouseEnter={setOnVisible} onMouseLeave={setOutVisible}>
        {children}
      </div>
      {isVisible && <div className={styles.tooltip} >{textTooltip}</div>}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.any,
  textTooltip: PropTypes.string,
};

export default Tooltip;
