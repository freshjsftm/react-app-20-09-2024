import { useState, useEffect } from 'react';

const CursorTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const changeCoords = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    document.addEventListener('mousemove', changeCoords);
    return () => {
      document.removeEventListener('mousemove', changeCoords);
    };
  }, []);
  return (
    <div>
      <h2>cursor position</h2>
      <h3>x: {coords.x}</h3>
      <h3>y: {coords.y}</h3>
    </div>
  );
};

export default CursorTracker;
