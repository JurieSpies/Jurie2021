import React from 'react';
import './ProgressBar.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background-color: var(--color-primary);
  transition: width 0.5s ease-in-out;
`;

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
    <ProgressBarContainer>
      <Progress $progress={width} />
      <div className="meter" style={divStyles}>
        <span style={span1Styles}>
          <span
            className={stripe ? 'stripe' : null}
            style={animate ? span2Styles : null}
          />
        </span>
      </div>
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  stripe: PropTypes.bool,
  animate: PropTypes.bool,
  animationSpeed: PropTypes.string,
};

ProgressBar.defaultProps = {
  height: '15px',
  color: 'green',
  stripe: true,
  animate: true,
  animationSpeed: '2s',
};

export default ProgressBar;
