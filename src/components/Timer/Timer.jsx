import { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (run) {
      const idInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => {
        clearInterval(idInterval);
      };
    }
  }, [run]);

  const startTimer = () => {
    setRun(true);
  };
  const stopTimer = () => {
    setRun(false);
  };
  const resetTimer = () => {
    setRun(false);
    setTime(0);
  };

  return (
    <article className={styles.timer}>
      <h2>Timer: {time} seconds</h2>
      <div>
        <button onClick={startTimer} disabled={run}>
          start
        </button>
        <button onClick={stopTimer} disabled={!run}>
          stop
        </button>
        <button onClick={resetTimer} disabled={time === 0}>
          reset
        </button>
      </div>
    </article>
  );
};

export default Timer;
