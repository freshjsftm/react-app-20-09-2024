import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DragElement.module.scss';

const DragElement = (props) => {
  const { text='drag', left=25, top=25 } = props;
  const [positions, setPositions] = useState({ left: left, top: top });
  const [hasDrag, setHasDrag] = useState(false);

  useEffect(() => {
    const changePosition = (event) => {
      if (hasDrag) {
        setPositions({ left: event.clientX, top: event.clientY });
      }
    };
    const leaveHasDrag = () => {
      setHasDrag(false);
    };
    document.addEventListener('mousemove', changePosition);
    document.addEventListener('mouseup', leaveHasDrag);
    return () => {
      document.removeEventListener('mousemove', changePosition);
      document.removeEventListener('mouseup', leaveHasDrag);
    };
  }, [hasDrag]);

  const changeHasDrag = () => {
    setHasDrag(true);
  };
  return (
    <div
      id="drag"
      onMouseDown={changeHasDrag}
      className={styles.drag}
      style={{ left: positions.left, top: positions.top }}
    >
      {text}
    </div>
  );
};

DragElement.propTypes = {
  text: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
};

export default DragElement;
