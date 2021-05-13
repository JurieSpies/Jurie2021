import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { BottomScrollListener } from 'react-bottom-scroll-listener';

const styles = {
  mainComponent: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '100px',
  },
  title: {
    display: 'grid',
    width: '300px',
    margin: '15px',
    fontSize: 'min(max(18px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    textDecorationColor: 'blue',
    alignSelf: 'center',
  },
  counter: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  counterText: {
    fontWeight: 'bold',
  },
};

const Fun = () => {
  const refDate = '2019-01-01';
  const today = dayjs();
  const diff = today.diff(refDate, 'day').toString();
  const [cupsOfCoffee, setCupsOfCoffee] = useState(0);
  const [linesOfCode, setLinesOfCode] = useState(0);
  const [isLazyLoading, setIsLazyLoading] = useState(false);

  const bottomListener = () => {
    setIsLazyLoading(true);
  };

  useEffect(() => {
    setCupsOfCoffee(diff * 4);
    setLinesOfCode(diff * 123);
  }, [diff]);

  return (
    <>
      <div style={styles.mainComponent}>
        <BottomScrollListener onBottom={bottomListener} />
        <div style={styles.title}>
          Cups of Coffee
        </div>
        {isLazyLoading
        && (
        <div style={styles.counter}>
          <CountUp
            style={styles.counterText}
            end={cupsOfCoffee}
            delay={1}
            duration={5}
          />
        </div>
        )}
        <div style={styles.title}>
          Lines of Code
        </div>
        {isLazyLoading
        && (
        <div style={styles.counter}>
          <CountUp
            style={styles.counterText}
            end={linesOfCode}
            delay={1}
            duration={5}
            redraw
          />
        </div>
        )}
      </div>
    </>
  );
};

export default Fun;
