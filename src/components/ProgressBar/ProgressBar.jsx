import React from 'react';
import './ProgressBar.css';
import propTypes from 'prop-types';

const ProgressBar = (props) => {
  const {
    height, width, color, stripe, animate,
  } = props;
  const divStyles = {
    height,
    width: '1000px',
  };
  const span1Styles = {
    width: width <= 100 ? `${width}%` : '100%',
    backgroundColor: color,
    borderTopRightRadius: width < 100 ? '8px' : '20px',
    borderBottomRightRadius: width < 100 ? '8px' : '20px',
  };
  const span2Styles = {
    animation: 'move 2s linear infinite',
  };
  return (
    <div className="meter" style={divStyles}>
      <span style={span1Styles}>
        <span
          className={stripe ? 'stripe' : null}
          style={animate ? span2Styles : null}
        />
      </span>
    </div>
  );
};

ProgressBar.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  color: propTypes.string,
  stripe: propTypes.bool,
  animate: propTypes.bool,
};

ProgressBar.defaultProps = {
  width: '50%',
  height: '15px',
  color: 'green',
  stripe: true,
  animate: true,
};

export default ProgressBar;
