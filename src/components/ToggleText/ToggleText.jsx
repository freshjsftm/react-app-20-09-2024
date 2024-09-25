import { useState } from 'react';

const ToggleText = () => {
  const [close, setClose] = useState(true);
  // close - змінна яка зберігає булеве значення
  // setClose - функція, яка змінює значення змінної close
  const changeClose = () => {
    setClose(!close);
  };
  return (
    <div>
      <h2>
        Title <button onClick={changeClose}>{close ? 'hide' : 'open'}</button>
      </h2>
      {close && <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sequi?
        Laboriosam impedit esse modi nemo maxime odio nulla praesentium quam
        incidunt, debitis, inventore, excepturi aut quibusdam cumque eum
        accusamus sit.
      </p>}
    </div>
  );
};

export default ToggleText;
