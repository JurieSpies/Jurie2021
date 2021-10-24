import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { GiCoffeeCup } from 'react-icons/gi';
import { BsCodeSlash } from 'react-icons/bs';

const styles = {
  mainComponent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  spacer: {
    display: 'grid',
    width: '300px',
    margin: '15px',
    fontSize: 'min(max(18px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    textDecorationColor: 'blue',
  },
  subTitle: {
    display: 'grid',
    width: '300px',
    margin: '15px',
    fontSize: 'min(max(18px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    textDecorationColor: 'blue',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: '40px',
    // backgroundColor: 'orange',
  },
  iconStyle: {
    color: 'white',
    paddingRight: '10px',
    fontSize: 'xx-large',
    // backgroundColor: 'red',
  },
  counter: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    border: 'solid',
    color: 'white',
    // backgroundColor: 'white',
  },
  counterText: {
    fontWeight: 'bold',
  },
};

const Fun = () => {
  const refDate = '2019-01-06';
  const today = dayjs();
  const diff = today.diff(refDate, 'day').toString();
  const [cupsOfCoffee, setCupsOfCoffee] = useState(0);
  const [linesOfCode, setLinesOfCode] = useState(0);
  const [isLazyLoading, setIsLazyLoading] = useState(false);

  const bottomListener = () => {
    setIsLazyLoading(true);
  };

  useEffect(() => {
    setCupsOfCoffee(diff * 5);
    setLinesOfCode(diff * 119);
  }, [diff]);

  return (
    <>
      <div style={styles.mainComponent}>
        <BottomScrollListener onBottom={bottomListener} offset={100} />
        <div style={styles.spacer} />
        <div style={{
          margin: '15px', width: '1300px', height: '100%', textAlign: 'center',
        }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.subTitle}>
              Cups of Coffee
            </div>
            <div style={styles.counterContainer}>
              <GiCoffeeCup style={styles.iconStyle} />
              {isLazyLoading
            && (
            <div style={styles.counter}>
              <CountUp
                style={styles.counterText}
                end={cupsOfCoffee}
                duration={5}
              />
            </div>
            )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.subTitle}>
              Lines of Code
            </div>
            <div style={styles.counterContainer}>
              <BsCodeSlash style={styles.iconStyle} />
              {isLazyLoading
            && (
            <div style={styles.counter}>
              <CountUp
                style={styles.counterText}
                end={linesOfCode}
                duration={3}
              />
            </div>
            )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Fun;
