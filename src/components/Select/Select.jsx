import { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { list } = props;
  const [selectOption, setSelectOption] = useState('');
  const showOption = (elem) => (
    <option key={elem.value} value={elem.value}>
      {elem.label}
    </option>
  );
  return (
    <>
      <select>{list.map(showOption)}</select>
    </>
  );
};

Select.propTypes = {
  list: PropTypes.array,
};

export default Select;
