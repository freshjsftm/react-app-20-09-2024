import PropTypes from 'prop-types';
import styles from './Wrapper.module.scss';

const Wrapper = (props) => {
  const { children } = props;

  return <div className={styles.wrapper}>
    {children}
  </div>;
};

Wrapper.propTypes = {
  children: PropTypes.any
};

export default Wrapper;
