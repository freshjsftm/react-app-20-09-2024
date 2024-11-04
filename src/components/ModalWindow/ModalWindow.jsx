import PropTypes from 'prop-types';
import styles from './ModalWindow.module.scss'

const ModalWindow = (props) => {
  const {children, closeModal} = props;
  return (
    <div className={styles.outward}>
      <div className={styles.inward}>
        <button onClick={()=>{closeModal()}}>X</button>
        {children}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.any,
  closeModal: PropTypes.func
};


export default ModalWindow;
