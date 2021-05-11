/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { useState } from 'react';
import CountUp from 'react-countup';

const styles = {
  mainComponent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  },
};

const Fun = () => {
  const [cupsOfCoffee, setCupsOfCoffee] = useState(200);
  const refDate = new Date('03/12/2021');
  const today = new Date('05/12/2021');

  // const refDate2 = moment('03/12/2021');
  // const today2 = moment(new Date());
  // const refDate2 = moment('03/12/2021').format('YYYY-MM-DD');
  // const today2 = moment(new Date()).format('YYYY-MM-DD');

  const difference = Math.abs(today - refDate) / (1000 * 3600 * 24);

  console.log('🚀 ~ refDate', refDate);
  console.log('🚀 ~ today', today);

  // console.log('🚀 ~ refDate2', refDate2);
  // console.log('🚀 ~ today2', today2);

  console.log('🚀 ~ difference', difference);

  return (
    <div style={styles.mainComponent}>
      <div style={styles.title}>
        Cups of Coffee
      </div>
      <div style={{
        backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center',
      }}
      >
        <CountUp end={cupsOfCoffee} />
      </div>
      {/* <div style={styles.title}>
        Lines of Code
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <CountUp end={100} />
      </div> */}
    </div>
  );
};

export default Fun;
