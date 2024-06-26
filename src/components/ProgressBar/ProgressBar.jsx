import React from 'react';
import './ProgressBar.css';
import propTypes from 'prop-types';

const ProgressBar = (props) => {
  const {
    height, width, color, stripe, animate, animationSpeed,
  } = props;
  const divStyles = {
    height,
  };
  const span1Styles = {
    width: width <= 100 ? `${width}%` : '100%',
    backgroundColor: color,
    borderTopRightRadius: width < 100 ? '8px' : '20px',
    borderBottomRightRadius: width < 100 ? '8px' : '20px',
  };
  const span2Styles = {
    animation: `move ${animationSpeed} linear infinite`,
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
  width: propTypes.string.isRequired,
  height: propTypes.string,
  color: propTypes.string,
  stripe: propTypes.bool,
  animate: propTypes.bool,
  animationSpeed: propTypes.string,
};

ProgressBar.defaultProps = {
  height: '15px',
  color: 'green',
  stripe: true,
  animate: true,
  animationSpeed: '2s',
};

export default ProgressBar;
