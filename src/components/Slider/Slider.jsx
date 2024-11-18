import { useState } from 'react';
import PropTypes from 'prop-types';

const Slider = (props) => {
  const { render, min, max } = props;
  const [value, setValue] = useState((min + max) / 2);
  const changeValue = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input
        type="range"
        value={value}
        onChange={changeValue}
        min={min}
        max={max}
      />
      {render(value)}
    </div>
  );
};

Slider.propTypes = {
  render: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Slider;
